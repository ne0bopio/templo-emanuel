"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Horarios", href: "#horarios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Ubicación", href: "#ubicacion" },
];

function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

function LogoMark({ size = 26 }: { size?: number }) {
  // Simplified from the church's house-and-family logo
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5.5 10v9.5h13V10" />
      <path d="M12 17.5c-1.8-1.5-3-2.6-3-4a1.9 1.9 0 0 1 3-1.5 1.9 1.9 0 0 1 3 1.5c0 1.4-1.2 2.5-3 4Z" />
    </svg>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 20);
        if (y > 300 && y > lastY + 8) setHidden(true);
        if (y < lastY - 8 || y < 100) setHidden(false);
        setLastY(y);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  });

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* ── FLOATING CAPSULE NAV ── */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{
          y: hidden && !mobileOpen ? -100 : 0,
          opacity: hidden && !mobileOpen ? 0 : 1,
        }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
        style={{ willChange: "transform, opacity" }}
      >
        <div className="px-4 sm:px-6 pt-4">
          <div
            className={cn(
              "max-w-5xl mx-auto rounded-2xl pointer-events-auto",
              "transition-all duration-500 ease-out backdrop-blur-xl",
              "border border-white/[0.08]",
              scrolled || mobileOpen
                ? "bg-capsule/95 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
                : "bg-capsule/80 shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
            )}
          >
            <div className="flex items-center justify-between h-[58px] px-4 sm:px-6">
              <a href="#inicio" className="flex items-center gap-2.5 shrink-0 group text-white">
                <span className="text-accent-soft group-hover:text-white transition-colors">
                  <LogoMark />
                </span>
                <span className="font-display font-bold text-[15px] tracking-tight">
                  Templo Emanuel
                </span>
              </a>

              {/* Center links — desktop */}
              <div className="hidden md:flex items-center gap-1 mx-6">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="relative px-4 py-2 text-[13px] font-semibold rounded-xl transition-all duration-200 text-white/60 hover:text-white hover:bg-white/[0.08]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* CTA — desktop */}
              <div className="hidden md:flex items-center shrink-0">
                <a href="#contacto" className="no-underline">
                  <div className="px-5 py-2 rounded-xl text-[13px] font-bold transition-all duration-200 cursor-pointer bg-gradient-to-r from-accent to-accent-deep text-on-accent hover:shadow-[0_0_20px_rgba(0,0,0,0.35)] hover:scale-[1.02] active:scale-[0.98] min-h-[38px] flex items-center">
                    Visítanos
                  </div>
                </a>
              </div>

              {/* Mobile hamburger */}
              <button
                className="md:hidden p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/[0.08] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ── MOBILE FULLSCREEN MENU ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 z-40 bg-capsule"
          >
            <div className="flex flex-col pt-[92px] px-6 pb-8 h-full">
              <div className="flex flex-col gap-1 flex-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.25 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-4 text-lg font-semibold rounded-xl transition-colors text-white/70 hover:text-white hover:bg-white/[0.05]"
                    >
                      {link.label}
                    </a>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.3 }}
                className="pt-4 border-t border-white/[0.08]"
              >
                <a
                  href="#contacto"
                  onClick={() => setMobileOpen(false)}
                  className="block no-underline"
                >
                  <div className="w-full py-4 rounded-xl text-center font-bold text-on-accent bg-gradient-to-r from-accent to-accent-deep text-base">
                    Visítanos
                  </div>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
