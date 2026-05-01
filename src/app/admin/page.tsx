"use client";

import { useState, useEffect } from "react";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut, User } from "firebase/auth";
import { LogOut, Upload, Users, List, Mail, Lock, ArrowRight, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    // Auto-bypass if no Firebase keys or if user uses demo credentials
    const isMockMode = !process.env.NEXT_PUBLIC_FIREBASE_API_KEY || process.env.NEXT_PUBLIC_FIREBASE_API_KEY === "dummy-api-key";

    if (isMockMode) {
      setUser({ email: email || "admin@demo.com" } as any);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      setError(err.message || "Failed to log in");
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white">Loading...</div>;
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-[#0a0a0a] relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0050d1]/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-[420px] w-full bg-[#111111] border border-white/5 p-10 rounded-[24px] relative z-10 shadow-2xl">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-[#0050d1] rounded-[16px] flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(0,80,209,0.2)]">
              <ShieldCheck className="text-white w-8 h-8" />
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight mb-2 uppercase">
              WELCOME BACK
            </h1>
            <p className="text-gray-500 text-sm font-medium">
              Access your Srinivasa Computers dashboard
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative group">
              <Mail className="absolute left-4 top-4 text-gray-500 w-5 h-5 group-focus-within:text-[#0050d1] transition-colors" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:border-[#0050d1] focus:bg-white/[0.05] outline-none transition-all font-medium"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="relative group">
              <Lock className="absolute left-4 top-4 text-gray-500 w-5 h-5 group-focus-within:text-[#0050d1] transition-colors" />
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:border-[#0050d1] focus:bg-white/[0.05] outline-none transition-all font-medium"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && <p className="text-red-500 text-xs font-bold pt-2">{error}</p>}

            <button
              type="submit"
              className="w-full bg-[#0050d1] hover:bg-[#003d9e] text-white font-black py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-[#0050d1]/20 group mt-6"
            >
              <span>Sign In</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-10 text-center">
            <p className="text-gray-500 text-sm font-medium">
              New to Srinivasa Computers? <span className="text-[#0050d1] font-black cursor-pointer hover:underline">Create Account</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-brand-dark text-white min-h-screen">
        <div className="p-6 border-b border-gray-800">
          <h2 className="text-xl font-bold text-white">Admin Panel</h2>
        </div>
        <nav className="p-4 space-y-2">
          <a href="#" className="flex items-center space-x-3 bg-blue-900 text-white p-3 rounded-md">
            <List className="w-5 h-5" />
            <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-400 hover:text-white hover:bg-gray-800 p-3 rounded-md transition-colors">
            <Upload className="w-5 h-5" />
            <span>Products</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-400 hover:text-white hover:bg-gray-800 p-3 rounded-md transition-colors">
            <Users className="w-5 h-5" />
            <span>Leads</span>
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <header className="bg-white shadow-sm border-b border-gray-200 p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
          <button onClick={handleLogout} className="flex items-center text-gray-600 hover:text-red-600 transition-colors">
            <LogOut className="w-5 h-5 mr-2" />
            Sign out
          </button>
        </header>

        <main className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-gray-500 text-sm font-medium mb-1">Total Products</h3>
              <p className="text-3xl font-bold text-brand-dark">12</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-gray-500 text-sm font-medium mb-1">New Service Requests</h3>
              <p className="text-3xl font-bold text-brand-dark">4</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-gray-500 text-sm font-medium mb-1">Total Leads</h3>
              <p className="text-3xl font-bold text-brand-dark">28</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800">Recent Service Requests</h2>
            </div>
            <div className="p-6 text-center text-gray-500 py-12">
              Connect to Firestore to load real data.
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
