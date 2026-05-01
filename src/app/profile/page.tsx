"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { User, Mail, ShieldCheck, LogOut } from "lucide-react";

export default function ProfilePage() {
  const [user, setUser] = useState<{name: string, email: string, isAdmin?: boolean} | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("mockUser");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {}
    } else {
      // Redirect to login if not logged in
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("mockUser");
    localStorage.removeItem("isLoggedIn");
    window.dispatchEvent(new Event("auth-change"));
    router.push("/");
  };

  if (!user) return <div className="min-h-screen flex justify-center items-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-[#f4f4f4] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-black text-[#1a1a1a] mb-8">My Account</h1>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-[#0050d1] p-8 text-white flex items-center gap-6">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl font-black shadow-inner">
              {user.name.charAt(0)}
            </div>
            <div>
              <h2 className="text-2xl font-bold">{user.name}</h2>
              <p className="text-blue-200 flex items-center gap-2 mt-1">
                <Mail className="w-4 h-4" /> {user.email}
              </p>
              {user.isAdmin && (
                <span className="inline-flex items-center gap-1 bg-white text-[#0050d1] text-xs font-bold px-2 py-1 rounded mt-3">
                  <ShieldCheck className="w-3 h-3" /> ADMIN
                </span>
              )}
            </div>
          </div>

          <div className="p-8">
            <h3 className="text-lg font-bold text-gray-800 border-b border-gray-100 pb-4 mb-4">Account Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Full Name</p>
                <p className="font-medium text-gray-800 flex items-center gap-2">
                  <User className="w-4 h-4 text-gray-400" /> {user.name}
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Email Address</p>
                <p className="font-medium text-gray-800 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-400" /> {user.email}
                </p>
              </div>
            </div>

            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 text-red-600 hover:text-red-700 hover:bg-red-50 px-4 py-2 rounded-lg font-bold transition-colors"
            >
              <LogOut className="w-5 h-5" /> Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
