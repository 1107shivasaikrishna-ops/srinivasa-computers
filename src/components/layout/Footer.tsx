import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white/80 pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <h3 className="text-xl font-bold text-white mb-6">SRINIVASA <span className="text-brand-red">COMPUTERS</span></h3>
          <p className="mb-6 leading-relaxed">
            Your trusted partner for premium industrial cash-handling machines and top-quality laptop accessories in Telangana.
          </p>
          <div className="flex space-x-4">
            {/* Social icons could go here */}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-6">Contact Info</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <MapPin className="w-5 h-5 text-brand-red mr-3 mt-1 flex-shrink-0" />
              <span>Beside Kapila Hotel, Hyd-Road, Pragati Nagar, Nizamabad, Telangana</span>
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 text-brand-red mr-3 flex-shrink-0" />
              <a href="tel:9440502488" className="hover:text-white transition-colors">9440502488</a>
            </li>
            <li className="flex items-center">
              <Mail className="w-5 h-5 text-brand-red mr-3 flex-shrink-0" />
              <a href="mailto:info@srinivasacomputers.com" className="hover:text-white transition-colors">info@srinivasacomputers.com</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-6">Our Location</h3>
          <div className="w-full h-48 bg-gray-800 rounded-lg overflow-hidden border border-white/10">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.052864380816!2d78.10657987519502!3d18.66167818245842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcce7d3f23719b3%3A0x6d9f8e4e892c5a1!2sPragati%20Nagar%2C%20Nizamabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 pt-8 border-t border-white/10 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Srinivasa Computers. All rights reserved.</p>
      </div>
    </footer>
  );
}
