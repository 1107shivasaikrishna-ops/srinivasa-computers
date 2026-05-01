"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { User, Mail, ShieldCheck, LogOut, Package, Clock, ChevronRight } from "lucide-react";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const checkUser = async () => {
      if (!supabase) {
        setLoading(false);
        return;
      }
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
        const { data: profileData } = await supabase
          .from("customers")
          .select("*")
          .eq("id", user.id)
          .single();
        setProfile(profileData);
      } else {
        router.push("/login");
      }
      setLoading(false);
    };
    checkUser();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  };

  if (loading) return <div className="min-h-screen flex justify-center items-center">Loading...</div>;
  if (!user) return null;

  return (
    <div className="min-h-screen bg-[#f9f9f9] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-4xl font-black text-[#1a1a1a] tracking-tighter uppercase italic">My Account</h1>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 text-gray-400 hover:text-red-600 font-black uppercase text-xs tracking-widest transition-colors"
          >
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white border border-gray-200 p-8 shadow-sm">
              <div className="w-20 h-20 bg-[#0050d1] flex items-center justify-center text-white text-3xl font-black mb-6">
                {(profile?.full_name || user.email).charAt(0).toUpperCase()}
              </div>
              <h2 className="text-xl font-black text-[#1a1a1a] uppercase mb-1">{profile?.full_name || "New Customer"}</h2>
              <p className="text-gray-400 text-xs font-bold truncate mb-6">{user.email}</p>
              
              <div className="space-y-4 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3 text-gray-500">
                  <Mail className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase">{user.email}</span>
                </div>
                {profile?.phone && (
                  <div className="flex items-center gap-3 text-gray-500">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase">{profile.phone}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border border-gray-200 p-8 shadow-sm">
              <h3 className="text-lg font-black uppercase tracking-widest mb-8 flex items-center gap-3">
                <Package className="w-5 h-5 text-[#0050d1]" /> Recent Orders
              </h3>
              
              <div className="space-y-4">
                {/* Mock Order for UI */}
                <div className="p-6 bg-gray-50 border border-gray-100 flex items-center justify-between group cursor-pointer hover:border-[#0050d1] transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white flex items-center justify-center border border-gray-200">
                      <Clock className="w-6 h-6 text-gray-300" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Order #SC-1001</p>
                      <h4 className="text-sm font-black text-[#1a1a1a] uppercase">Sample Order</h4>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-black text-[#0050d1]">₹0.00</p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">Processing</p>
                  </div>
                </div>

                <div className="p-12 text-center text-gray-400 border-2 border-dashed border-gray-100 font-bold uppercase tracking-widest text-xs">
                  No real orders yet
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-8 shadow-sm">
              <h3 className="text-lg font-black uppercase tracking-widest mb-8">Shipping Address</h3>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">
                {profile?.address || "No address saved yet. Update your profile to add a shipping address."}
              </p>
              <button className="mt-6 text-[#0050d1] font-black uppercase text-[10px] tracking-widest hover:underline">
                Edit Address
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
