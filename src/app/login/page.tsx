"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, User, ArrowRight, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Mock auth flow for restoration consistency
    const adminEmails = ["banswadashivasaikrishna@gmail.com", "srinivasasomputers@hotmail.com"];
    const isAdmin = adminEmails.includes(email.toLowerCase());

    const mockUser = {
      email,
      uid: "mock-uid-" + Math.random().toString(36).substr(2, 9),
      name: name || email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1),
      isAdmin: isAdmin
    };
    
    localStorage.setItem("mockUser", JSON.stringify(mockUser));
    localStorage.setItem("isLoggedIn", "true");
    window.dispatchEvent(new Event("auth-change"));
    
    setTimeout(() => {
      router.push("/");
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#f9f9f9] relative">
      <div className="max-w-[440px] w-full bg-white border border-gray-200 p-10 shadow-xl rounded-sm">
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-2 mb-8 group">
            <div className="w-12 h-12 bg-[#0050d1] flex items-center justify-center rounded-sm">
              <span className="text-white font-black text-xl tracking-tighter">SC</span>
            </div>
            <div className="text-left">
              <div className="text-lg font-black text-[#1a1a1a] leading-none tracking-tight">SRINIVASA</div>
              <div className="text-[10px] text-gray-400 font-bold leading-none mt-1 uppercase">Computers</div>
            </div>
          </Link>
          
          <h1 className="text-2xl font-black text-[#1a1a1a] tracking-tighter mb-2 uppercase">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>
          <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">
            {isLogin ? "Sign in to your account" : "Join our trusted network"}
          </p>
        </div>

        <form onSubmit={handleAuth} className="space-y-4">
          {!isLogin && (
            <div className="relative">
              <User className="absolute left-4 top-4 text-gray-300 w-5 h-5" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-white border border-gray-200 rounded-sm py-4 pl-12 pr-4 text-[#1a1a1a] placeholder-gray-300 focus:border-[#0050d1] outline-none transition-all font-bold text-sm"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}
          <div className="relative">
            <Mail className="absolute left-4 top-4 text-gray-300 w-5 h-5" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-white border border-gray-200 rounded-sm py-4 pl-12 pr-4 text-[#1a1a1a] placeholder-gray-300 focus:border-[#0050d1] outline-none transition-all font-bold text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-4 text-gray-300 w-5 h-5" />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-white border border-gray-200 rounded-sm py-4 pl-12 pr-4 text-[#1a1a1a] placeholder-gray-300 focus:border-[#0050d1] outline-none transition-all font-bold text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-red-500 text-xs font-bold pt-2">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0050d1] hover:bg-[#003d9e] disabled:opacity-50 text-white font-black py-4 rounded-sm flex items-center justify-center gap-2 transition-all group mt-6 uppercase text-sm tracking-widest"
          >
            <span>{loading ? "Please Wait..." : isLogin ? "Login Now" : "Register Now"}</span>
            {!loading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
          </button>
        </form>

        <div className="mt-10 text-center border-t border-gray-100 pt-8">
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-[#0050d1] font-black hover:underline transition-all"
            >
              {isLogin ? "Register Here" : "Login Here"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

