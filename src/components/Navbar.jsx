import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  ArrowUpRight,
  Globe2,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const location = useLocation();
  const contactRef = useRef(null);

  // Detect navbar scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setMobileOpen(false);
    setContactOpen(false);
  }, [location.pathname]);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close contact dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        contactRef.current &&
        !contactRef.current.contains(event.target)
      ) {
        setContactOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "Our Portfolio",
      path: "/portfolio",
    },
    {
      name: "Contact Us",
      path: "/contact",
    },
  ];

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* =========================
          NAVBAR
      ========================== */}
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "py-2"
            : "py-3 md:py-4"
        }`}
      >
        <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <nav
            className={`relative flex h-[68px] items-center justify-between rounded-2xl px-4 sm:px-5 lg:px-6 transition-all duration-500 ${
              scrolled
                ? "border border-white/[0.08] bg-black/80 shadow-[0_15px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl"
                : "border border-white/[0.06] bg-black/25 backdrop-blur-md"
            }`}
          >
            {/* =========================
                LOGO
            ========================== */}
            <Link
              to="/"
              aria-label="Floww Studios Home"
              className="relative z-10 flex shrink-0 items-center"
            >
              <img
                src="/logo.png"
                alt="Floww Studios"
                className="h-10 w-auto object-contain sm:h-11 lg:h-12"
              />
            </Link>

            {/* =========================
                DESKTOP NAVIGATION
            ========================== */}
            <div className="absolute left-1/2 hidden -translate-x-1/2 items-center lg:flex">
              <div className="flex items-center rounded-full border border-white/[0.06] bg-white/[0.03] p-1">
                {navLinks.map((item) => {
                  const active = isActive(item.path);

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`relative rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-300 xl:px-5 xl:text-sm ${
                        active
                          ? "bg-white/[0.09] text-white"
                          : "text-white/60 hover:bg-white/[0.05] hover:text-white"
                      }`}
                    >
                      {item.name}

                      {active && (
                        <span className="absolute bottom-0 left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-purple-500" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* =========================
                DESKTOP RIGHT SECTION
            ========================== */}
            <div className="hidden items-center gap-3 lg:flex">
              {/* Worldwide indicator */}
              <div className="hidden items-center gap-2 pr-1 2xl:flex">
                <div className="relative">
                  <Globe2
                    size={16}
                    className="text-purple-400"
                  />

                  <span className="absolute -right-1 -top-1 h-1.5 w-1.5 rounded-full bg-green-400">
                    <span className="absolute inset-0 animate-ping rounded-full bg-green-400 opacity-70" />
                  </span>
                </div>

                <span className="text-xs text-white/50">
                  Available Worldwide
                </span>
              </div>

              {/* CONTACT DROPDOWN */}
              <div
                ref={contactRef}
                className="relative"
              >
                <button
                  type="button"
                  onClick={() =>
                    setContactOpen((prev) => !prev)
                  }
                  className="group flex items-center gap-2 rounded-full bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(147,51,234,0.25)] transition-all duration-300 hover:bg-purple-500 hover:shadow-[0_10px_35px_rgba(147,51,234,0.4)]"
                >
                  Let's Talk

                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      contactOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* DROPDOWN */}
                <div
                  className={`absolute right-0 top-[calc(100%+14px)] w-[320px] origin-top-right transition-all duration-300 ${
                    contactOpen
                      ? "visible translate-y-0 scale-100 opacity-100"
                      : "invisible -translate-y-2 scale-95 opacity-0"
                  }`}
                >
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0f]/95 p-2 shadow-[0_25px_80px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
                    {/* Heading */}
                    <div className="px-3 pb-3 pt-2">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-purple-400">
                        Get in touch
                      </p>

                      <p className="mt-1 text-sm text-white/50">
                        Choose the best way to connect.
                      </p>
                    </div>

                    {/* USA WHATSAPP */}
                    <a
                      href="https://wa.me/18432875990"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-xl p-3 transition-all duration-300 hover:bg-white/[0.06]"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
                          <FaWhatsapp size={20} />
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-medium text-white">
                              USA WhatsApp
                            </p>

                            <span className="rounded-md bg-purple-500/10 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-purple-300">
                              US
                            </span>
                          </div>

                          <p className="mt-0.5 text-xs text-white/45">
                            +1 843-287-5990
                          </p>
                        </div>
                      </div>

                      <ArrowUpRight
                        size={16}
                        className="text-white/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                      />
                    </a>

                    {/* INDIA WHATSAPP */}
                    <a
                      href="https://wa.me/919773777618"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-xl p-3 transition-all duration-300 hover:bg-white/[0.06]"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
                          <FaWhatsapp size={20} />
                        </div>

                        <div>
                          <p className="text-sm font-medium text-white">
                            India WhatsApp
                          </p>

                          <p className="mt-0.5 text-xs text-white/45">
                            +91 9773777618
                          </p>
                        </div>
                      </div>

                      <ArrowUpRight
                        size={16}
                        className="text-white/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                      />
                    </a>

                    {/* INDIA CALL */}
                    <a
                      href="tel:+918448276790"
                      className="group flex items-center justify-between rounded-xl p-3 transition-all duration-300 hover:bg-white/[0.06]"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                          <Phone size={18} />
                        </div>

                        <div>
                          <p className="text-sm font-medium text-white">
                            Call India
                          </p>

                          <p className="mt-0.5 text-xs text-white/45">
                            +91 8448276790
                          </p>
                        </div>
                      </div>

                      <ArrowUpRight
                        size={16}
                        className="text-white/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                      />
                    </a>

                    {/* Bottom */}
                    <div className="mt-2 border-t border-white/[0.06] px-3 py-3">
                      <p className="flex items-center gap-2 text-[11px] text-white/35">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                        </span>

                        We usually respond quickly
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =========================
                MOBILE BUTTON
            ========================== */}
            <button
              type="button"
              aria-label={
                mobileOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileOpen}
              onClick={() =>
                setMobileOpen((prev) => !prev)
              }
              className="relative z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white transition-all hover:bg-white/[0.1] lg:hidden"
            >
              {mobileOpen ? (
                <X size={21} />
              ) : (
                <Menu size={22} />
              )}
            </button>
          </nav>
        </div>
      </header>

            {/* =========================
          MOBILE MENU
      ========================== */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${
          mobileOpen
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        }`}
      >
        {/* Background */}
        <div
          onClick={() => setMobileOpen(false)}
          className="absolute inset-0 bg-black/80 backdrop-blur-xl"
        />

        {/* Mobile Content */}
        <div
          className={`absolute left-4 right-4 top-[92px] max-h-[calc(100vh-110px)] overflow-y-auto rounded-3xl border border-white/[0.08] bg-[#0c0c0e]/95 shadow-[0_30px_100px_rgba(0,0,0,0.65)] transition-all duration-500 ${
            mobileOpen
              ? "translate-y-0 scale-100 opacity-100"
              : "-translate-y-5 scale-[0.98] opacity-0"
          }`}
        >
          <div className="p-5 sm:p-6">
            {/* Mobile Navigation */}
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
                Navigation
              </p>

              <div className="flex flex-col">
                {navLinks.map((item, index) => {
                  const active = isActive(item.path);

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className={`group flex items-center justify-between border-b border-white/[0.06] py-4 transition-all ${
                        active
                          ? "text-white"
                          : "text-white/60 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className={`text-[10px] font-medium ${
                            active
                              ? "text-purple-400"
                              : "text-white/20"
                          }`}
                        >
                          0{index + 1}
                        </span>

                        <span className="text-lg font-medium">
                          {item.name}
                        </span>
                      </div>

                      <ArrowUpRight
                        size={18}
                        className={`transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
                          active
                            ? "text-purple-400"
                            : "text-white/20"
                        }`}
                      />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-7">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
                  Let's Work Together
                </p>

                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                  </span>

                  <span className="text-[10px] text-white/40">
                    Available
                  </span>
                </div>
              </div>

              {/* USA WhatsApp - Primary */}
              <a
                href="https://wa.me/18432875990"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex w-full items-center justify-between overflow-hidden rounded-2xl bg-purple-600 p-4 shadow-[0_15px_40px_rgba(147,51,234,0.25)] transition-all duration-300 hover:bg-purple-500"
              >
                {/* Glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/10 blur-2xl" />

                <div className="relative flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                    <FaWhatsapp
                      size={22}
                      className="text-white"
                    />
                  </div>

                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-white">
                        WhatsApp USA
                      </p>

                      <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white/70">
                        USA
                      </span>
                    </div>

                    <p className="mt-0.5 text-xs text-white/65">
                      +1 843-287-5990
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={19}
                  className="relative text-white/70 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                />
              </a>

              {/* Secondary Contact Options */}
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {/* India WhatsApp */}
                <a
                  href="https://wa.me/919773777618"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4 transition-all duration-300 hover:border-green-400/20 hover:bg-white/[0.07]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
                    <FaWhatsapp size={19} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-white/40">
                      India WhatsApp
                    </p>

                    <p className="mt-0.5 whitespace-nowrap text-sm font-medium text-white">
                      +91 9773777618
                    </p>
                  </div>
                </a>

                {/* India Phone */}
                <a
                  href="tel:+918448276790"
                  className="group flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4 transition-all duration-300 hover:border-purple-400/20 hover:bg-white/[0.07]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                    <Phone size={18} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-white/40">
                      Call India
                    </p>

                    <p className="mt-0.5 whitespace-nowrap text-sm font-medium text-white">
                      +91 8448276790
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-7 flex items-center justify-center gap-2 border-t border-white/[0.06] pt-5">
              <Globe2
                size={14}
                className="text-purple-400"
              />

              <p className="text-xs text-white/35">
                Helping brands grow worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;