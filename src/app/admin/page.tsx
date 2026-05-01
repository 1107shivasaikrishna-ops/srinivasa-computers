"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { 
  LogOut, Upload, Users, List, Mail, Lock, 
  ArrowRight, ShieldCheck, Plus, Trash2, Edit, Save, X 
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const [user, setUser] = useState<any>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [products, setProducts] = useState<any[]>([]);
  const [enquiries, setEnquiries] = useState<any[]>([]);
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image_url: "",
    stock: "0"
  });

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
        // Fallback for owner emails or DB check
        const superAdmins = ["banswadashivasaikrishna@gmail.com", "srinivasasomputers@hotmail.com"];
        const isSuperAdmin = superAdmins.includes(user.email || "");

        const { data: profile } = await supabase
          .from("customers")
          .select("is_admin")
          .eq("id", user.id)
          .single();

        if (isSuperAdmin || profile?.is_admin) {
          setUser(user);
          fetchData();
        } else {
          setError("Access Denied: You do not have admin privileges.");
          await supabase.auth.signOut();
        }
      }
      setLoading(false);
    };
    checkUser();
  }, []);

  const fetchData = async () => {
    if (!supabase) return;
    const { data: productsData } = await supabase.from("products").select("*").order("created_at", { ascending: false });
    const { data: enquiriesData } = await supabase.from("enquiries").select("*").order("created_at", { ascending: false });
    setProducts(productsData || []);
    setEnquiries(enquiriesData || []);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabase) {
      setError("Database connection not configured. Please add Supabase keys to .env.local");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;

      // Verify Admin status
      const superAdmins = ["banswadashivasaikrishna@gmail.com", "srinivasasomputers@hotmail.com"];
      const isSuperAdmin = superAdmins.includes(data.user.email || "");

      const { data: profile } = await supabase
        .from("customers")
        .select("is_admin")
        .eq("id", data.user.id)
        .single();

      if (isSuperAdmin || profile?.is_admin) {
        setUser(data.user);
        fetchData();
      } else {
        setError("Access Denied: You are not an authorized admin.");
        await supabase.auth.signOut();
      }
    } catch (err: any) {
      setError(err.message || "Failed to log in");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase.from("products").insert([
        { 
          ...newProduct, 
          price: parseFloat(newProduct.price), 
          stock: parseInt(newProduct.stock) 
        }
      ]);
      if (error) throw error;
      setIsAddingProduct(false);
      setNewProduct({ name: "", description: "", price: "", category: "", image_url: "", stock: "0" });
      fetchData();
    } catch (err: any) {
      alert(err.message);
    }
  };

  const handleDeleteProduct = async (id: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
      await supabase.from("products").delete().eq("id", id);
      fetchData();
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white">Loading...</div>;
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-[#0a0a0a] relative overflow-hidden">
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
              ADMIN ACCESS
            </h1>
            <p className="text-gray-500 text-sm font-medium">
              Srinivasa Computers Management
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative group">
              <Mail className="absolute left-4 top-4 text-gray-500 w-5 h-5 group-focus-within:text-[#0050d1] transition-colors" />
              <input
                type="email"
                placeholder="Admin Email"
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
              <span>Verify Access</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-[#111] text-white min-h-screen">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-xl font-black tracking-tighter">ADMIN PANEL</h2>
        </div>
        <nav className="p-4 space-y-2">
          <button 
            onClick={() => setActiveTab("dashboard")}
            className={`w-full flex items-center space-x-3 p-3 rounded-md transition-colors ${activeTab === "dashboard" ? "bg-[#0050d1] text-white" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
          >
            <List className="w-5 h-5" />
            <span className="font-bold text-sm uppercase">Dashboard</span>
          </button>
          <button 
            onClick={() => setActiveTab("products")}
            className={`w-full flex items-center space-x-3 p-3 rounded-md transition-colors ${activeTab === "products" ? "bg-[#0050d1] text-white" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
          >
            <Upload className="w-5 h-5" />
            <span className="font-bold text-sm uppercase">Products</span>
          </button>
          <button 
            onClick={() => setActiveTab("enquiries")}
            className={`w-full flex items-center space-x-3 p-3 rounded-md transition-colors ${activeTab === "enquiries" ? "bg-[#0050d1] text-white" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
          >
            <Users className="w-5 h-5" />
            <span className="font-bold text-sm uppercase">Enquiries</span>
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white border-b border-gray-200 p-6 flex justify-between items-center sticky top-0 z-10">
          <h1 className="text-xl font-black text-gray-900 uppercase tracking-tight">{activeTab}</h1>
          <button onClick={handleLogout} className="flex items-center text-gray-500 hover:text-red-600 transition-colors font-bold text-sm uppercase">
            <LogOut className="w-5 h-5 mr-2" />
            Sign out
          </button>
        </header>

        <main className="p-8">
          {activeTab === "dashboard" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-8 border border-gray-200 shadow-sm">
                <h3 className="text-gray-400 text-xs font-black uppercase tracking-widest mb-2">Total Products</h3>
                <p className="text-4xl font-black text-[#0050d1]">{products.length}</p>
              </div>
              <div className="bg-white p-8 border border-gray-200 shadow-sm">
                <h3 className="text-gray-400 text-xs font-black uppercase tracking-widest mb-2">Active Enquiries</h3>
                <p className="text-4xl font-black text-[#0050d1]">{enquiries.filter(e => e.status === 'new').length}</p>
              </div>
              <div className="bg-white p-8 border border-gray-200 shadow-sm">
                <h3 className="text-gray-400 text-xs font-black uppercase tracking-widest mb-2">Total Orders</h3>
                <p className="text-4xl font-black text-[#0050d1]">0</p>
              </div>
            </div>
          )}

          {activeTab === "products" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter">Product Inventory</h2>
                <button 
                  onClick={() => setIsAddingProduct(true)}
                  className="bg-[#0050d1] text-white px-6 py-3 font-black text-sm uppercase tracking-widest flex items-center gap-2 hover:bg-[#003d9e] transition-all"
                >
                  <Plus className="w-4 h-4" /> Add Product
                </button>
              </div>

              {isAddingProduct && (
                <div className="bg-white p-8 border-2 border-[#0050d1] shadow-xl">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-black uppercase">Add New Product</h3>
                    <button onClick={() => setIsAddingProduct(false)}><X className="w-6 h-6 text-gray-400" /></button>
                  </div>
                  <form onSubmit={handleAddProduct} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input 
                      type="text" placeholder="Product Name" required
                      className="w-full border border-gray-200 p-4 text-sm font-bold outline-none focus:border-[#0050d1]"
                      value={newProduct.name}
                      onChange={e => setNewProduct({...newProduct, name: e.target.value})}
                    />
                    <input 
                      type="text" placeholder="Category" required
                      className="w-full border border-gray-200 p-4 text-sm font-bold outline-none focus:border-[#0050d1]"
                      value={newProduct.category}
                      onChange={e => setNewProduct({...newProduct, category: e.target.value})}
                    />
                    <input 
                      type="number" placeholder="Price" required
                      className="w-full border border-gray-200 p-4 text-sm font-bold outline-none focus:border-[#0050d1]"
                      value={newProduct.price}
                      onChange={e => setNewProduct({...newProduct, price: e.target.value})}
                    />
                    <input 
                      type="number" placeholder="Stock" required
                      className="w-full border border-gray-200 p-4 text-sm font-bold outline-none focus:border-[#0050d1]"
                      value={newProduct.stock}
                      onChange={e => setNewProduct({...newProduct, stock: e.target.value})}
                    />
                    <input 
                      type="text" placeholder="Image URL" required
                      className="w-full border border-gray-200 p-4 text-sm font-bold outline-none focus:border-[#0050d1] md:col-span-2"
                      value={newProduct.image_url}
                      onChange={e => setNewProduct({...newProduct, image_url: e.target.value})}
                    />
                    <textarea 
                      placeholder="Description" required
                      className="w-full border border-gray-200 p-4 text-sm font-bold outline-none focus:border-[#0050d1] md:col-span-2 h-32"
                      value={newProduct.description}
                      onChange={e => setNewProduct({...newProduct, description: e.target.value})}
                    ></textarea>
                    <button type="submit" className="bg-[#0050d1] text-white py-4 font-black uppercase tracking-widest md:col-span-2 hover:bg-[#003d9e]">
                      Save Product
                    </button>
                  </form>
                </div>
              )}

              <div className="bg-white border border-gray-200 overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="p-6 text-xs font-black uppercase tracking-widest text-gray-400">Product</th>
                      <th className="p-6 text-xs font-black uppercase tracking-widest text-gray-400">Category</th>
                      <th className="p-6 text-xs font-black uppercase tracking-widest text-gray-400">Price</th>
                      <th className="p-6 text-xs font-black uppercase tracking-widest text-gray-400">Stock</th>
                      <th className="p-6 text-xs font-black uppercase tracking-widest text-gray-400 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {products.map(product => (
                      <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                        <td className="p-6">
                          <div className="flex items-center gap-4">
                            <img src={product.image_url} alt="" className="w-12 h-12 object-cover rounded-sm bg-gray-100" />
                            <span className="font-bold text-gray-900">{product.name}</span>
                          </div>
                        </td>
                        <td className="p-6 text-sm font-bold text-gray-500 uppercase">{product.category}</td>
                        <td className="p-6 text-sm font-black text-[#0050d1]">₹{product.price}</td>
                        <td className="p-6 text-sm font-bold text-gray-500">{product.stock}</td>
                        <td className="p-6 text-right space-x-4">
                          <button onClick={() => handleDeleteProduct(product.id)} className="text-gray-300 hover:text-red-600 transition-colors">
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                    {products.length === 0 && (
                      <tr>
                        <td colSpan={5} className="p-12 text-center text-gray-400 font-bold uppercase tracking-widest">No products found</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "enquiries" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter">Customer Enquiries</h2>
              <div className="grid grid-cols-1 gap-4">
                {enquiries.map(enquiry => (
                  <div key={enquiry.id} className="bg-white p-6 border border-gray-200 shadow-sm relative group">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-black text-lg text-gray-900 uppercase">{enquiry.name}</h3>
                        <p className="text-sm text-gray-400 font-bold">{enquiry.email} | {enquiry.phone}</p>
                      </div>
                      <span className={`px-3 py-1 text-[10px] font-black uppercase tracking-widest ${enquiry.status === 'new' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
                        {enquiry.status}
                      </span>
                    </div>
                    <p className="text-gray-600 font-medium mb-4">{enquiry.message}</p>
                    <div className="text-[10px] text-gray-300 font-black uppercase tracking-widest">
                      {new Date(enquiry.created_at).toLocaleString()}
                    </div>
                  </div>
                ))}
                {enquiries.length === 0 && (
                  <div className="p-12 text-center text-gray-400 font-bold uppercase tracking-widest bg-white border border-gray-200">
                    No enquiries yet
                  </div>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
