import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us | Srinivasa Computers",
  description: "Get in touch with Srinivasa Computers for sales, support, and inquiries.",
};

export default function ContactPage() {
  return (
    <div className="bg-brand-light min-h-screen pb-20">
      <div className="bg-brand-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We're here to help! Reach out for sales, support, or any inquiries.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Details */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start">
              <div className="bg-blue-50 p-3 rounded-full mr-4 text-brand-blue">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-brand-dark text-lg mb-1">Our Location</h3>
                <p className="text-gray-600">Beside Kapila Hotel, Hyd-Road,<br/>Pragati Nagar, Nizamabad,<br/>Telangana</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start">
              <div className="bg-red-50 p-3 rounded-full mr-4 text-brand-red">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-brand-dark text-lg mb-1">Phone Number</h3>
                <p className="text-gray-600">Sales & Demo: <a href="tel:9440502488" className="text-brand-blue hover:underline font-semibold">9440502488</a></p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start">
              <div className="bg-blue-50 p-3 rounded-full mr-4 text-brand-blue">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-brand-dark text-lg mb-1">Email Address</h3>
                <p className="text-gray-600"><a href="mailto:info@srinivasacomputers.com" className="hover:text-brand-blue transition-colors">info@srinivasacomputers.com</a></p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start">
              <div className="bg-gray-100 p-3 rounded-full mr-4 text-gray-600">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-brand-dark text-lg mb-1">Business Hours</h3>
                <p className="text-gray-600">Mon - Sat: 9:00 AM - 8:00 PM<br/>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <h2 className="text-2xl font-bold text-brand-dark mb-6">Send Us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input type="text" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input type="email" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input type="text" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea rows={6} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none"></textarea>
                </div>

                <button type="button" className="bg-brand-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
