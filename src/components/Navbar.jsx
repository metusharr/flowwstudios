import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path) =>
    location.pathname === path
      ? "text-purple-400"
      : "text-gray-300 hover:text-white";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-black/70 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-8xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LEFT: LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Floww Studios Logo"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* CENTER MENU */}
        <div className="hidden lg:flex items-center gap-4 text-sm">
          <Link to="/" className={isActive("/")}>Home</Link>
          <span className="text-gray-500">•</span>

          <Link to="/about" className={isActive("/about")}>
            About Us
          </Link>
                    <span className="text-gray-500">•</span>

          <Link to="/portfolio" className={isActive("/portfolio")}>
            Our Portfolio
          </Link>
          <span className="text-gray-500">•</span>

          
          

          <Link to="/contact" className={isActive("/contact")}>
            Contact us
          </Link>
        </div>

        {/* RIGHT CTA */}
        <a
          href="https://wa.me/919773777618"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full text-sm font-medium transition shadow-lg"
        >
          <Phone size={16} />
          +91 9773777618
        </a>

        {/* MOBILE MENU ICON */}
        <button className="lg:hidden text-white text-2xl">
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
