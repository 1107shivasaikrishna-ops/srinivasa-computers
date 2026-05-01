"use client";

import { MessageSquare, X, Send, User, Bot, Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const knowledgeBase = {
  products: [
    "EASE 1000 Semi Value Counter", "INX 4000 Mix Value Counter", "BANKOMAT CURRENCY COUNTER", 
    "MARC NOTE COUNTING MACHINE", "GODREJ CASH COUNTER", "Dell Inspiron 15", "HP Pavilion 15",
    "Lenovo IdeaPad Slim 3", "MSI Modern 14", "Acer Aspire 5", "DELL OPTIPLEX", "HP ELITEDESK",
    "MSI Gaming GF63", "Dell G15 Gaming", "ASUS ROG STRIX G15", "Alienware m15 R7",
    "CP Plus 2.4MP Camera", "HP LaserJet Pro M126nw", "Canon Pixma G3000"
  ],
  services: [
    "Laptop Repair", "Desktop Service", "Printer Repair", "CCTV Installation", 
    "Data Recovery", "Software Installation", "Hardware Upgrade", "AMC Services"
  ],
  location: "Pragati Nagar, Nizamabad, Telangana 503003",
  contact: "9440502488",
  hours: "10:00 AM - 9:00 PM (Monday to Saturday)"
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, type: "bot", text: "Hi! I'm the Srinivasa Computers Virtual Assistant. I know everything about our products and services." },
    { id: 2, type: "bot", text: "Ask me about Cash Counters, Laptops, Printers, or our Store Location!" },
  ]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const getBotResponse = (input: string) => {
    const lowInput = input.toLowerCase();
    
    if (lowInput.includes("price") || lowInput.includes("cost") || lowInput.includes("how much")) {
      return "Pricing varies by model. For example, the HP LaserJet starts around ₹18,200. I recommend checking our Products page or chatting with us on WhatsApp for the latest quote!";
    }
    if (lowInput.includes("laptop") || lowInput.includes("dell") || lowInput.includes("hp")) {
      return `We have a great range of laptops including ${knowledgeBase.products.slice(5, 9).join(", ")}. Which one are you interested in?`;
    }
    if (lowInput.includes("cash") || lowInput.includes("counter") || lowInput.includes("counting")) {
      return "We are specialists in Cash Handling. Our top models are EASE 1000 and INX 4000. They feature advanced UV/MG detection.";
    }
    if (lowInput.includes("where") || lowInput.includes("location") || lowInput.includes("address")) {
      return `Our store is located at: ${knowledgeBase.location}. We are open from ${knowledgeBase.hours}.`;
    }
    if (lowInput.includes("repair") || lowInput.includes("service") || lowInput.includes("fix")) {
      return `Yes! We provide ${knowledgeBase.services.slice(0, 4).join(", ")}. You can bring your device to our store or request a visit.`;
    }
    if (lowInput.includes("printer") || lowInput.includes("toner") || lowInput.includes("ink")) {
      return "We have HP, Canon, Epson, and Brother printers and toners in stock. We also provide original ink refills.";
    }
    if (lowInput.includes("cctv") || lowInput.includes("camera") || lowInput.includes("security")) {
      return "We offer high-quality CCTV solutions from CP PLUS, TRUE VIEW, and Hikvision. We also provide professional installation!";
    }
    if (lowInput.includes("ups") || lowInput.includes("backup") || lowInput.includes("power")) {
      return "Protect your electronics with our UPS systems from CyberPower and APC. We have 600VA and 1000VA models available.";
    }
    if (lowInput.includes("desktop") || lowInput.includes("pc") || lowInput.includes("monitor")) {
      return "We have professional desktops from Dell (OptiPlex), HP (EliteDesk), and Lenovo (ThinkCentre) in stock.";
    }
    if (lowInput.includes("gaming") || lowInput.includes("rog") || lowInput.includes("alienware")) {
      return "Level up with our gaming gear! We have ASUS ROG, Dell G15, and MSI gaming laptops with high-refresh rate displays and RTX graphics.";
    }
    
    return "That's a good question! I'm still learning, but I can definitely help you if we move to WhatsApp. Would you like to connect with a human expert?";
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputText.trim()) return;

    const userMsg = { id: Date.now(), type: "user", text: inputText };
    setMessages(prev => [...prev, userMsg]);
    const currentInput = inputText;
    setInputText("");

    setTimeout(() => {
      const botResponse = getBotResponse(currentInput);
      setMessages(prev => [...prev, { id: Date.now() + 1, type: "bot", text: botResponse }]);
    }, 1000);
  };

  const quickActions = [
    { label: "💵 Cash Counters", text: "Show me cash counting machines." },
    { label: "💻 Laptops", text: "What laptops do you have?" },
    { label: "🖥️ Desktops", text: "Show me desktop computers." },
    { label: "🎮 Gaming Setup", text: "I'm looking for gaming laptops." },
    { label: "📸 CCTV Cameras", text: "Do you have security cameras?" },
    { label: "🔋 UPS Backups", text: "I need power backup for my PC." },
    { label: "🖨️ Printers & Toners", text: "Show me printers and toners." },
    { label: "📍 Store Location", text: "Where is your store located?" },
  ];

  return (
    <>
      <motion.button 
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-[60] bg-[#0050d1] text-white w-14 h-14 flex items-center justify-center shadow-2xl rounded-sm group"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-[60] w-[380px] max-w-[90vw] h-[550px] max-h-[80vh] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-gray-100 flex flex-col overflow-hidden rounded-sm"
          >
            {/* Header */}
            <div className="bg-[#0050d1] p-6 text-white shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-sm flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-black text-sm uppercase tracking-wider">Store Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-[10px] font-bold text-blue-100 uppercase tracking-widest">AI Agent Online</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-grow p-4 space-y-4 overflow-y-auto bg-[#f9f9f9]">
              {messages.map(msg => (
                <div key={msg.id} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] p-3 text-[13px] leading-relaxed font-medium ${
                    msg.type === "user" 
                    ? "bg-[#0050d1] text-white rounded-l-lg rounded-tr-lg" 
                    : "bg-white text-gray-700 border border-gray-100 rounded-r-lg rounded-tl-lg shadow-sm"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              <div className="pt-2">
                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-3 px-1">Common Questions</p>
                <div className="flex flex-wrap gap-2">
                  {quickActions.map(action => (
                    <button 
                      key={action.label}
                      onClick={() => {
                        setInputText(action.text);
                        // Trigger send automatically after a tiny delay
                        setTimeout(() => handleSendMessage(), 100);
                      }}
                      className="text-[10px] font-black bg-white border border-gray-200 text-gray-600 px-3 py-2 hover:border-[#0050d1] hover:text-[#0050d1] hover:bg-blue-50 transition-all rounded-sm shadow-sm uppercase tracking-tighter"
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              </div>
              <div ref={chatEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100">
              <form onSubmit={handleSendMessage} className="relative flex items-center gap-2 mb-3">
                <input 
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-grow bg-gray-50 border border-gray-200 rounded-sm px-4 py-3 text-[13px] text-gray-900 font-bold focus:outline-none focus:border-[#0050d1] transition-colors pr-12"
                />
                <button 
                  type="submit"
                  className="absolute right-2 bg-[#0050d1] text-white p-2 rounded-sm hover:bg-[#003d9e] transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              
              <div className="flex items-center gap-2">
                <a 
                  href="https://wa.me/919440502488" 
                  target="_blank" 
                  className="flex-grow bg-[#25D366] text-white py-2.5 px-4 rounded-sm font-black text-[10px] uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-white" /> Talk to Human
                </a>
                <a 
                  href="tel:9440502488" 
                  className="bg-gray-100 text-gray-600 p-2.5 rounded-sm hover:bg-gray-200 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
