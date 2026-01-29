import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#achievements" },
  { name: "Projects", href: "#projects" },
  { name: "GitHub", href: "#github" },
  { name: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.slice(1));
      const headerHeight = headerRef.current?.offsetHeight || 80;
      const scrollPosition = window.scrollY + headerHeight + 20;

      setIsScrolled(window.scrollY > 50);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = headerRef.current?.offsetHeight || 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      ref={headerRef}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-6 left-0 right-0 z-50"
    >
      {/* Desktop Navigation - Centered */}
      <div className="hidden md:flex justify-center">
        <motion.div
          className={`rounded-2xl border border-white/25 backdrop-blur-2xl transition-all duration-300 shadow-2xl ${
            isScrolled 
              ? "bg-background/80 shadow-primary/5" 
              : "bg-background/70"
          }`}
          whileHover={{ 
            scale: 1.02,
            backgroundColor: "rgba(var(--background), 0.9)"
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <nav className="px-6 py-3">
            <ul className="flex items-center justify-center gap-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg block ${
                      activeSection === link.href.slice(1)
                        ? "text-primary bg-primary/20 border border-primary/20"
                        : "text-foreground/80 hover:text-foreground hover:bg-white/10"
                    }`}
                  >
                    <span className="relative z-10">{link.name}</span>
                    {activeSection === link.href.slice(1) && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 bg-primary/20 border border-primary/20 rounded-lg"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      </div>

      {/* Mobile Navigation - Right Side */}
      <div className="md:hidden flex justify-end px-6">
        <nav className="p-3 relative">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg border border-white/10 hover:bg-white/10 transition-colors text-foreground/80 hover:text-foreground"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-full mt-3 w-56 z-50"
            >
              <div className="rounded-2xl border border-white/20 backdrop-blur-3xl bg-background/80 shadow-2xl p-3">
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={(e) => handleClick(e, link.href)}
                        className={`relative px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg block ${
                          activeSection === link.href.slice(1)
                            ? "text-primary bg-primary/15 border border-primary/30"
                            : "text-foreground/90 hover:text-foreground hover:bg-white/10"
                        }`}
                      >
                        <span className="relative z-10">{link.name}</span>
                        {activeSection === link.href.slice(1) && (
                          <motion.div
                            layoutId="activeSectionMobile"
                            className="absolute inset-0 bg-primary/15 border border-primary/30 rounded-lg"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </nav>
      </div>
    </motion.header>
  );
};

export default Navigation;