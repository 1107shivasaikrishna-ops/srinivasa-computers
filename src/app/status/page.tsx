"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { CheckCircle2, XCircle, Database, Shield, Server, RefreshCw } from "lucide-react";
import Link from "next/link";

export default function StatusPage() {
  const [status, setStatus] = useState({
    config: "checking",
    database: "checking",
    auth: "checking",
  });
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  const checkStatus = async () => {
    setLoading(true);
    const newStatus = { config: "ok", database: "ok", auth: "ok" };

    // 1. Check Config
    if (!supabase) {
      setStatus({ config: "error", database: "error", auth: "error" });
      setLoading(false);
      return;
    }

    try {
      // 2. Check Auth
      const { error: authError } = await supabase.auth.getSession();
      if (authError) newStatus.auth = "error";

      // 3. Check Database (Try to fetch products)
      const { error: dbError } = await supabase.from("products").select("id").limit(1);
      if (dbError) newStatus.database = "error";
    } catch (e) {
      newStatus.database = "error";
      newStatus.auth = "error";
    }

    setStatus(newStatus);
    setLoading(false);
  };

  useEffect(() => {
    checkStatus();
  }, []);

  const StatusItem = ({ title, state, icon: Icon }: any) => (
    <div className="bg-white border border-gray-100 p-8 flex items-center justify-between shadow-sm group hover:border-[#0050d1] transition-all">
      <div className="flex items-center gap-6">
        <div className={`w-14 h-14 flex items-center justify-center rounded-full ${
          state === "ok" ? "bg-green-50 text-green-600" : state === "error" ? "bg-red-50 text-red-600" : "bg-gray-50 text-gray-400"
        }`}>
          <Icon className="w-7 h-7" />
        </div>
        <div>
          <h3 className="text-lg font-black text-[#1a1a1a] uppercase tracking-tight">{title}</h3>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">
            {state === "ok" ? "System Operational" : state === "error" ? "Connection Failed" : "Checking Status..."}
          </p>
        </div>
      </div>
      <div>
        {state === "ok" ? (
          <CheckCircle2 className="w-8 h-8 text-green-500" />
        ) : state === "error" ? (
          <XCircle className="w-8 h-8 text-red-500" />
        ) : (
          <RefreshCw className="w-8 h-8 text-gray-200 animate-spin" />
        )}
      </div>
    </div>
  );

  return (
    <div className="bg-[#f9f9f9] min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Srinivasa Computers</p>
            <h1 className="text-4xl font-black text-[#1a1a1a] uppercase tracking-tighter italic">System Status</h1>
          </div>
          <button 
            onClick={checkStatus} 
            disabled={loading}
            className="bg-[#1a1a1a] text-white px-6 py-3 font-black text-xs uppercase tracking-widest hover:bg-[#0050d1] transition-all flex items-center gap-2"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} /> Refresh
          </button>
        </div>

        <div className="space-y-4">
          <StatusItem title="Environment Configuration" state={status.config} icon={Server} />
          <StatusItem title="Database Connection" state={status.database} icon={Database} />
          <StatusItem title="Authentication Service" state={status.auth} icon={Shield} />
        </div>

        <div className="mt-12 p-8 bg-white border border-gray-100 shadow-sm">
          <h2 className="text-sm font-black uppercase tracking-widest mb-4 italic">How to fix issues?</h2>
          <p className="text-sm text-gray-500 font-medium leading-relaxed mb-6">
            If any system shows a "Connection Failed" status, please ensure your <code className="bg-gray-100 px-1.5 py-0.5 rounded text-[#cc0000]">.env.local</code> file contains valid Supabase credentials and that you have restarted your development server.
          </p>
          <div className="flex gap-4">
            <Link href="/" className="text-[10px] font-black uppercase tracking-widest text-[#0050d1] hover:underline">Back to Home</Link>
            <Link href="/admin" className="text-[10px] font-black uppercase tracking-widest text-[#0050d1] hover:underline">Admin Panel</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
