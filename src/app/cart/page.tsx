"use client";

import Link from "next/link";
import { ShoppingBag, ArrowRight, Trash2, Plus, Minus, MessageCircle, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";
import { useState, useEffect } from "react";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartCount, cartTotal, clearCart } = useCart();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [isOrdered, setIsOrdered] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    const checkUser = async () => {
      if (!supabase) return;
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    checkUser();
  }, []);

  const handlePlaceOrder = async () => {
    if (!user) {
      alert("Please login to place an order");
      window.location.href = "/login";
      return;
    }

    setLoading(true);
    try {
      // 1. Create Order
      const totalAmount = parseFloat(cartTotal.toString().replace(/[^\d.]/g, '')) || 0;
      const { data: order, error: orderError } = await supabase
        .from("orders")
        .insert([{ 
          customer_id: user.id, 
          total_amount: totalAmount, 
          status: "pending" 
        }])
        .select()
        .single();

      if (orderError) throw orderError;

      // 2. Create Order Items
      const orderItems = cart.map(item => ({
        order_id: order.id,
        product_id: item.id,
        quantity: item.quantity,
        price_at_purchase: parseFloat(item.price.toString().replace(/[^\d.]/g, '')) || 0
      }));

      const { error: itemsError } = await supabase.from("order_items").insert(orderItems);
      if (itemsError) throw itemsError;

      // 3. Clear Cart & Show Success
      setIsOrdered(true);
      clearCart();
      
      // WhatsApp Notification
      const whatsappMsg = `New Order Placed! Order ID: ${order.id}\nItems: ${cart.map(i => `${i.name} (x${i.quantity})`).join(', ')}`;
      window.open(`https://wa.me/919440502488?text=${encodeURIComponent(whatsappMsg)}`, '_blank');

    } catch (err: any) {
      alert(err.message || "Failed to place order");
    } finally {
      setLoading(false);
    }
  };

  if (isOrdered) {
    return (
      <div className="bg-[#f9f9f9] min-h-screen py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <ShoppingBag className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-4xl font-black text-[#1a1a1a] mb-4 uppercase tracking-tighter italic">Order Received!</h1>
          <p className="text-gray-500 font-medium mb-10 leading-relaxed">Thank you for your order. We've sent a notification to our team, and we'll contact you shortly for fulfillment.</p>
          <Link href="/profile" className="bg-[#0050d1] text-white px-10 py-4 font-black uppercase text-xs tracking-widest hover:bg-[#003d9e] transition-all inline-block">
            View My Orders
          </Link>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="bg-[#f9f9f9] min-h-screen pt-10 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Home / Shopping Cart</p>
          <h1 className="text-4xl font-black text-[#1a1a1a] mb-8 uppercase tracking-tighter">Your Cart</h1>

          <div className="bg-white border border-gray-200 p-12 flex flex-col items-center justify-center text-center shadow-sm">
            <div className="w-20 h-20 bg-[#f4f4f4] rounded-full flex items-center justify-center mb-6">
              <ShoppingBag className="w-10 h-10 text-gray-300" />
            </div>
            <h2 className="text-xl font-black text-[#1a1a1a] mb-2 uppercase tracking-tight">Your cart is currently empty.</h2>
            <p className="text-gray-500 mb-8 max-w-sm">Before you proceed to checkout, you must add some products to your shopping cart. You will find a lot of interesting products on our "Products" page.</p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products" className="bg-[#0050d1] hover:bg-[#003d9e] text-white font-bold px-10 py-4 text-sm transition-all flex items-center justify-center gap-2">
                <ArrowLeft className="w-4 h-4" /> Return To Shop
              </Link>
              <a href="https://wa.me/919440502488" target="_blank" rel="noreferrer" className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-10 py-4 text-sm transition-all flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4 fill-white" /> WhatsApp Support
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f9f9f9] min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8 pb-6 border-b border-gray-200">
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Shopping Cart</p>
            <h1 className="text-3xl font-black text-[#1a1a1a] uppercase tracking-tighter">Your Items ({cartCount})</h1>
          </div>
          <Link href="/products" className="text-sm font-bold text-[#0050d1] hover:underline uppercase tracking-wider">
            Continue Shopping
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 flex flex-col gap-4">
            {cart.map((item) => (
              <div key={item.id} className="bg-white p-6 border border-gray-100 flex gap-6 items-center group hover:shadow-md transition-shadow">
                <div className="w-24 h-24 bg-gray-50 flex-shrink-0 flex items-center justify-center p-4 relative overflow-hidden">
                  <Image src={item.image_url || item.image} alt={item.name} fill className="object-contain p-2" />
                </div>
                
                <div className="flex-grow">
                  <h3 className="font-black text-[#1a1a1a] text-base uppercase tracking-tight mb-1 group-hover:text-[#0050d1] transition-colors">{item.name}</h3>
                  <p className="text-[#0050d1] font-black text-sm mb-4">
                    {typeof item.price === 'number' ? `₹${item.price}` : item.price}
                  </p>
                  
                  <div className="flex items-center gap-6">
                    <div className="flex items-center border border-gray-200 rounded-sm">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1.5 hover:bg-gray-50 transition-colors text-gray-400 hover:text-gray-600"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-10 text-center text-sm font-black text-gray-700">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1.5 hover:bg-gray-50 transition-colors text-gray-400 hover:text-gray-600"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-xs font-bold text-red-500 hover:text-red-700 flex items-center gap-1.5 transition-colors uppercase tracking-wider"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-100 p-8 sticky top-32">
              <h2 className="text-lg font-black text-[#1a1a1a] uppercase tracking-tighter mb-6 pb-4 border-b border-gray-100">Order Summary</h2>
              
              <div className="flex justify-between mb-4">
                <span className="text-gray-500 font-bold text-sm uppercase">Total Items</span>
                <span className="text-[#1a1a1a] font-black text-sm">{cartCount}</span>
              </div>
              
              <div className="flex justify-between mb-8">
                <span className="text-gray-500 font-bold text-sm uppercase">Subtotal</span>
                <span className="text-[#0050d1] font-black text-lg">₹{cartTotal}</span>
              </div>

              <div className="space-y-3">
                <button 
                  onClick={handlePlaceOrder}
                  disabled={loading}
                  className="w-full bg-[#1a1a1a] text-white py-4 font-black rounded-sm hover:bg-[#0050d1] transition-all flex items-center justify-center gap-2 uppercase tracking-wider text-[13px] disabled:opacity-50"
                >
                  {loading ? "Processing..." : "Secure Checkout"}
                </button>
                <a 
                  href={`https://wa.me/919440502488?text=I want to buy: ${cart.map(i => `${i.name} (x${i.quantity})`).join(', ')}`}
                  target="_blank"
                  className="w-full bg-[#25D366] text-white py-4 font-black rounded-sm hover:bg-[#128C7E] transition-all flex items-center justify-center gap-2 uppercase tracking-wider text-[13px]"
                >
                  <MessageCircle className="w-5 h-5 fill-white" /> WhatsApp Order
                </a>
              </div>
              
              <p className="text-[10px] text-gray-400 mt-6 text-center leading-relaxed font-bold uppercase tracking-widest">
                Safe & Secure Payments • Nizamabad Store Pickup Available
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
