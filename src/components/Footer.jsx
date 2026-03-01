import { Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import backgroundimg from "../assets/background.png";

const Footer = () => {
  return (
    <footer
      className="relative bg-repeat bg-cover bg-[center_-1950px]"
      style={{ backgroundImage: `url(${backgroundimg})` }}
    >
      <div className="max-w-8xl mx-auto px-4 md:p-6">

        <div className="bg-[#0b0b0e]/90 backdrop-blur-xl rounded-[2.5rem] 
                        px-6 md:px-14 
                        py-10 md:py-12 
                        grid grid-cols-1 md:grid-cols-5 
                        gap-10">

          {/* LOGO */}
          <div className="md:col-span-1 text-center md:text-left">
            <img
              src="/logo.png"
              alt="Flow Studios"
              className="h-16 mb-6 mx-auto md:mx-0"
            />

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Clear, competitive, and result-oriented pricing — so you know
              exactly what you're investing in.
            </p>
          </div>

          {/* INFORMATION */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-amber-50 mb-4">Information</h3>
            <ul className="space-y-2 text-gray-400 text-sm">

              <li><HashLink smooth to="/#reviews" className="hover:text-white">Reviews</HashLink></li>
              <li><HashLink smooth to="/#faq" className="hover:text-white">FAQ's</HashLink></li>
              <li><HashLink smooth to="/#contact" className="hover:text-white">Get in touch</HashLink></li>

            </ul>
          </div>

          {/* PORTFOLIO */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-amber-50 mb-4">Our Portfolio</h3>
            <ul className="space-y-2 text-gray-400 text-sm">

              <li><Link to="/portfolio/fourth" className="hover:text-white">Aatm Nurture</Link></li>
              <li><Link to="/portfolio/second" className="hover:text-white">Iot Dashboard</Link></li>
              <li><Link to="/portfolio/fuel" className="hover:text-white">Fuel N Flavour</Link></li>
              <li><Link to="/portfolio/third" className="hover:text-white">TrackIt</Link></li>
              <li><Link to="/portfolio/fifth" className="hover:text-white">Starbucks</Link></li>
              <li><Link to="/portfolio/sixth" className="hover:text-white">Downsyndrome</Link></li>

            </ul>
          </div>

          {/* COMPANY */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-amber-50 mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm">

              <li><Link to="/about" className="hover:text-white">About us</Link></li>
              <li><HashLink smooth to="/#services" className="hover:text-white">Our Services</HashLink></li>
              <li><HashLink smooth to="/#whyus" className="hover:text-white">Why us?</HashLink></li>
              <li><HashLink smooth to="/#technologies" className="hover:text-white">Technologies</HashLink></li>

            </ul>
          </div>

          {/* CONTACT */}
          <div className="flex flex-col md:flex-row md:justify-between gap-8 text-center md:text-left">

            <div>
              <h3 className="font-semibold text-amber-50 mb-4">CONTACT</h3>

              <div className="space-y-3 text-gray-400 text-sm">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <Phone size={16} className="text-purple-400" />
                  <span>+91 9773777618</span>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-3">
                  <Mail size={16} className="text-purple-400" />
                  <span>info@floowstudios.com</span>
                </div>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="flex justify-center md:flex-col gap-4 items-center md:items-end">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition cursor-pointer"
                >
                  <Icon size={18} />
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;