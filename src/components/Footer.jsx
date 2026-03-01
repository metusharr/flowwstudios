import { Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import backgroundimg from "../assets/background.png";

const Footer = () => {
  const socialLinks = [
    { Icon: Instagram, href: "#", label: "Instagram" },
    { Icon: Facebook, href: "#", label: "Facebook" },
    { Icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer
      className="relative bg-repeat  bg-cover"
      style={{
        backgroundImage: `url(${backgroundimg})`,
        backgroundPosition: "center -3000px",
      }}
    >
      <div className="w-full px-3 sm:px-5 md:px-8 lg:px-10 xl:px-14 py-6 sm:py-8 md:py-10">

        {/* Card */}
        <div className="bg-[#0b0b0e]/90 backdrop-blur-xl rounded-[1.75rem] sm:rounded-[2rem] md:rounded-[2.5rem] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14 py-8 sm:py-10 md:py-12">

         
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-6 xl:gap-10">

            {/* ── LOGO & TAGLINE ─────────────────────────────────── */}
            <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-center sm:items-start">
              <img
                src="/logo.png"
                alt="Flow Studios"
                className="h-14 sm:h-16 mb-4 sm:mb-6"
              />
              <p className="text-gray-400 text-sm leading-relaxed text-center sm:text-left max-w-[260px]">
                Turn your ideas into powerful, modern digital brand experiences.
              </p>

              {/* Social icons shown here on mobile only (below tagline) */}
              <div className="flex gap-3 mt-6 lg:hidden">
                {socialLinks.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>

            {/* ── INFORMATION ───────────────────────────────────── */}
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="font-semibold text-amber-50 mb-4 tracking-wide text-sm uppercase">
                Information
              </h3>
              <ul className="space-y-2.5 text-gray-400 text-sm">
                <li>
                  <HashLink smooth to="/#reviews" className="hover:text-white transition-colors">
                    Reviews
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/#faq" className="hover:text-white transition-colors">
                    FAQ's
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/#contact" className="hover:text-white transition-colors">
                    Get in touch
                  </HashLink>
                </li>
              </ul>
            </div>

            {/* ── PORTFOLIO ─────────────────────────────────────── */}
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="font-semibold text-amber-50 mb-4 tracking-wide text-sm uppercase">
                Our Portfolio
              </h3>
              <ul className="space-y-2.5 text-gray-400 text-sm">
                <li><Link to="/portfolio/fourth" className="hover:text-white transition-colors">Aatm Nurture</Link></li>
                <li><Link to="/portfolio/second" className="hover:text-white transition-colors">IoT Dashboard</Link></li>
                <li><Link to="/portfolio/fuel"   className="hover:text-white transition-colors">Fuel N Flavour</Link></li>
                <li><Link to="/portfolio/third"  className="hover:text-white transition-colors">TrackIt</Link></li>
                <li><Link to="/portfolio/fifth"  className="hover:text-white transition-colors">Starbucks</Link></li>
                <li><Link to="/portfolio/sixth"  className="hover:text-white transition-colors">Downsyndrome</Link></li>
              </ul>
            </div>

            {/* ── COMPANY ───────────────────────────────────────── */}
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="font-semibold text-amber-50 mb-4 tracking-wide text-sm uppercase">
                Company
              </h3>
              <ul className="space-y-2.5 text-gray-400 text-sm">
                <li><Link to="/about" className="hover:text-white transition-colors">About us</Link></li>
                <li><HashLink smooth to="/#services"     className="hover:text-white transition-colors">Our Services</HashLink></li>
                <li><HashLink smooth to="/#whyus"        className="hover:text-white transition-colors">Why us?</HashLink></li>
                <li><HashLink smooth to="/#technologies" className="hover:text-white transition-colors">Technologies</HashLink></li>
              </ul>
            </div>

            {/* ── CONTACT + SOCIAL (desktop) ────────────────────── */}
            <div className="flex flex-col items-center sm:items-start lg:items-start">
              <h3 className="font-semibold text-amber-50 mb-4 tracking-wide text-sm uppercase">
                Contact
              </h3>

              <div className="space-y-3 text-gray-400 text-sm w-full">
                <div className="flex items-center justify-center sm:justify-start gap-3">
                  <Phone size={15} className="text-purple-400 shrink-0" />
                  <span>+91 9773777618</span>
                </div>
                <div className="flex items-start justify-center sm:justify-start gap-3">
                  <Mail size={15} className="text-purple-400 shrink-0 mt-0.5" />
                  <span className="break-all">contact@floowstudios.com</span>
                </div>
              </div>

              {/* Social icons — desktop only (lg+) */}
              <div className="hidden lg:flex gap-3 mt-6">
                {socialLinks.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

          </div>

          

        </div>
      </div>
    </footer>
  );
};

export default Footer;
