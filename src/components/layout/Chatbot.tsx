"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Phone } from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! Welcome to Srinivasa Computers.", isBot: true },
    { text: "How can we help you with our products or services today?", isBot: true }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: inputMessage, isBot: false }]);
    setInputMessage("");

    // Simulate bot response based on keywords
    setTimeout(() => {
      const lowerInput = inputMessage.toLowerCase();
      let botResponse = "Thanks for reaching out! For immediate assistance and best pricing, please connect with us on WhatsApp or call us directly.";

      if (lowerInput.includes("price") || lowerInput.includes("cost") || lowerInput.includes("much")) {
        botResponse = "Our prices are highly competitive! For exact pricing on specific models, please click 'WhatsApp' below so our sales team can send you a quote instantly.";
      } else if (lowerInput.includes("mouse") || lowerInput.includes("keyboard") || lowerInput.includes("accessory")) {
        botResponse = "We have a wide range of premium laptop and desktop accessories. Prices start from just ₹850. Would you like me to connect you with sales for a full catalog?";
      } else if (lowerInput.includes("printer") || lowerInput.includes("ink") || lowerInput.includes("toner")) {
        botResponse = "We stock Epson, HP, Canon, and Brother printers and genuine toners. Let's get you on WhatsApp to check the exact stock for your model.";
      } else if (lowerInput.includes("cctv") || lowerInput.includes("camera") || lowerInput.includes("security")) {
        botResponse = "Security is crucial! We provide CP Plus, Hikvision, and Dahua systems. We can also arrange installation. Call us or message on WhatsApp to discuss your setup.";
      } else if (lowerInput.includes("hello") || lowerInput.includes("hi ") || lowerInput.includes("hey")) {
        botResponse = "Hello there! What kind of tech or cash handling product are you looking for today?";
      }

      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className={`bg-brand-red text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all ${isOpen ? 'hidden' : 'block'}`}
        >
          <MessageSquare className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden border border-gray-100 flex flex-col h-[500px] max-h-[80vh]"
          >
            {/* Header */}
            <div className="bg-brand-dark text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center font-bold">
                  SC
                </div>
                <div>
                  <h3 className="font-bold">Srinivasa Support</h3>
                  <p className="text-xs text-green-400 flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-1"></span> Online
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-900 flex flex-col gap-3">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`max-w-[80%] rounded-2xl p-3 text-sm ${
                    msg.isBot 
                      ? 'bg-gray-800 border border-gray-700 text-gray-100 self-start rounded-tl-none shadow-[0_0_10px_rgba(0,100,255,0.1)]' 
                      : 'bg-brand-red text-white self-end rounded-tr-none shadow-[0_0_10px_rgba(255,0,0,0.2)]'
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="p-3 bg-gray-900 border-t border-gray-800 flex gap-2">
              <a 
                href="https://wa.me/919440502488" 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white text-sm font-bold py-2 px-3 rounded-lg flex items-center justify-center transition-colors"
              >
                <MessageSquare className="w-4 h-4 mr-2" /> WhatsApp
              </a>
              <a 
                href="tel:9440502488" 
                className="flex-1 bg-brand-blue hover:bg-blue-800 text-white text-sm font-bold py-2 px-3 rounded-lg flex items-center justify-center transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" /> Call Now
              </a>
            </div>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="p-3 bg-gray-900 border-t border-gray-800 flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-gray-800 text-white rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-brand-red/50 transition-all text-sm placeholder-gray-400 border border-gray-700"
              />
              <button 
                type="submit"
                disabled={!inputMessage.trim()}
                className="w-10 h-10 bg-brand-red text-white rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors hover:shadow-[0_0_15px_rgba(255,0,0,0.5)]"
              >
                <Send className="w-4 h-4 ml-1" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
