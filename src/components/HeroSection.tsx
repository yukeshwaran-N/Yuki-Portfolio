import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Search, BookOpen, Download } from "lucide-react";

const HeroSection = () => {
  const handleGoogleSearch = () => {
    const searchQuery = "yukeshwaran n";
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
    window.open(googleSearchUrl, '_blank', 'noopener,noreferrer');
  };

  const handleResumeDownload = () => {
    // Replace with your actual resume URL
    const resumeUrl = "/Resume/Yukeshwaran-resume.pdf";
    
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = "/Resume/Yukeshwaran-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleResumePreview = () => {
    // Open resume in new tab for preview
    const resumeUrl = "/Resume/Yukeshwaran-resume.pdf";
    window.open(resumeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated gradient orbs in background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-glow-cyan/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-glow-magenta/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      
      {/* Hero card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass-card p-8 md:p-12 lg:p-16 max-w-6xl w-full relative z-10 neon-glow-mixed"
      >
        {/* Accent line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-1 bg-gradient-to-r from-glow-cyan via-glow-magenta to-glow-purple rounded-full mb-8"
        />
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 flex-1">
            {/* Name - Clickable for Google Search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="cursor-pointer group"
              onClick={handleGoogleSearch}
              title="Click to search 'Yukeshwaran N' on Google"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron tracking-wide group-hover:scale-105 transition-transform duration-300">
                <span className="bg-gradient-to-r from-glow-cyan via-glow-purple to-glow-magenta bg-clip-text text-transparent group-hover:from-glow-magenta group-hover:via-glow-cyan group-hover:to-glow-purple transition-all duration-500">
                  Yukeshwaran N
                </span>
              </h1>
              <div className="flex items-center justify-center lg:justify-start gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Search className="w-4 h-4 text-glow-cyan" />
                <span className="text-xs text-muted-foreground">Click to search on Google</span>
              </div>
            </motion.div>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground font-light"
            >
              Cybersecurity Researcher <span className="text-primary">|</span> Ethical Hacker <span className="text-secondary">|</span> India Book Of Records Holder
            </motion.p>
            
            {/* Quote */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-foreground/90 font-light italic max-w-2xl"
            >
              "Building systems that think, adapt, and protect."
            </motion.p>
            
            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              {/* First row of buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="neon"
                  size="lg"
                  className="min-w-[180px]"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/yukeshwaran-n-4b170b247" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>
                <Button
                  variant="neonSecondary"
                  size="lg"
                  className="min-w-[180px]"
                  asChild
                >
                  <a href="https://medium.com/@Yukeshwaran-N" target="_blank" rel="noopener noreferrer">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Read Articles
                  </a>
                </Button>
              </div>
              
              {/* Second row of buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="neon"
                  size="lg"
                  className="min-w-[180px]"
                  onClick={handleResumePreview}
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View Resume
                </Button>
    
              </div>
            </motion.div>
          </div>

          {/* Profile Picture - Clickable for Google Search */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div 
              className="relative cursor-pointer group"
              onClick={handleGoogleSearch}
              title="Click to search 'Yukeshwaran N' on Google"
            >
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-glow-cyan to-glow-purple rounded-full blur-xl opacity-30 animate-pulse group-hover:opacity-50 transition-opacity duration-300" />
              
              {/* Profile image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-primary/20 overflow-hidden neon-glow-cyan group-hover:neon-glow-mixed group-hover:scale-105 transition-all duration-300">
                <img
                  src="/profile-picture.jpg"
                  alt="Yukeshwaran N - Cybersecurity Researcher"
                  className="w-full h-full object-cover"
                />
                {/* Overlay with search icon */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center">
                    <Search className="w-8 h-8 text-white mb-2" />
                    <span className="text-white text-sm font-medium">Search on Google</span>
                  </div>
                </div>
              </div>
              
              {/* Floating badges around the image */}
              <motion.div
                className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-bold border border-glow-cyan neon-glow-cyan"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                NASA
              </motion.div>
              
              <motion.div
                className="absolute -bottom-2 -left-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold border border-glow-purple neon-glow-purple"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                CERT-In
              </motion.div>
              
              <motion.div
                className="absolute top-1/2 -left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold border border-glow-magenta neon-glow-magenta"
                animate={{ x: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                IBR Achiver
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom accent line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-0.5 bg-gradient-to-r from-glow-purple via-glow-magenta to-glow-cyan rounded-full mt-8"
        />
      </motion.div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;