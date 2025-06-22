
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Anna & Co Advocates</h3>
            <p className="text-slate-300 mb-4">
              Professional Legal Services
            </p>
            <p className="text-slate-400 text-sm">
              Providing comprehensive legal representation with integrity, professionalism, and unwavering commitment to our clients.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Practice Areas</h4>
            <ul className="space-y-2 text-slate-300">
              <li>Corporate Law</li>
              <li>Contract Law</li>
              <li>Civil Litigation</li>
              <li>Family Law</li>
              <li>Land & Property Law</li>
              <li>County & National Legal Matters</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="text-slate-300 space-y-2">
              <p>Phone: +254 700 111 222</p>
              <p>Email: annadvocates@gmail.com</p>
              <p>Location: Nairobi CBD, Kenya</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Office Hours</h4>
            <div className="text-slate-300 space-y-2">
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 2:00 PM</p>
              <p>Sunday: By Appointment</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Anna & Co Advocates. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs mt-2">
            This website does not constitute legal advice. Professional consultation required for legal guidance.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
