import { motion, AnimatePresence } from "framer-motion";
import { Award, Trophy, Star, Shield, Globe, Building, Rocket, Book, Users, Heart, X, ZoomIn, ExternalLink } from "lucide-react";
import { useState } from "react";

const achievements = [
  {
    title: "India Book of Records",
    description: "Recognized in India Book of Records for exceptional cybersecurity research contributions",
    icon: Book,
    color: "primary",
    image: "/achievements/ibr-record.jpg",
    linkedinUrl: "https://indiabookofrecords.in/yukeshwaran-ibr-achiever/"
  },
  {
    title: "CERT-In Hall of Fame 2025",
    description: "Listed in Indian National CERT's official Hall of Fame for responsible vulnerability disclosure",
    icon: Trophy,
    color: "secondary",
    image: "/achievements/cert-in-hof.jpeg",
    linkedinUrl: "https://www.linkedin.com/posts/your-certin-post-url"
  },
  {
    title: "NASA Recognition",
    description: "Received official acknowledgment for identifying cybersecurity vulnerability in NASA systems",
    icon: Star,
    color: "primary",
    image: "/achievements/nasa-acknowledgment.jpeg",
    linkedinUrl: "https://www.linkedin.com/posts/yukeshwaran-n-4b170b247_nasa-cybersecurity-ethicalhacking-activity-7263086605928677376-angQ"
  },
  {
    title: "International Recognition",
    description: "Vulnerabilities acknowledged by Adidas, Mercedes-Benz, University of Oslo, and European organizations",
    icon: Globe,
    color: "secondary",
    image: "/achievements/international-recognition.png",
    linkedinUrl: "https://www.linkedin.com/posts/your-international-post-url"
  },
  {
    title: "ISRO Acknowledgment",
    description: "Official acknowledgment from Indian Space Research Organisation for reporting security issue",
    icon: Rocket,
    color: "accent",
    image: "/achievements/isro-acknowledgment.jpg",
    linkedinUrl: "https://www.linkedin.com/posts/your-isro-post-url"
  },
  {
    title: "Government Sector Impact",
    description: "50+ vulnerabilities disclosed across Indian government portals including Kerala & Karnataka",
    icon: Building,
    color: "accent",
    image: "/achievements/gov-impact.jpg",
    linkedinUrl: "https://www.linkedin.com/posts/your-gov-impact-post-url"
  },
];

const hackathonWins = [
  {
    title: "1st Place - KCG Xplore.AI Xora 24h Hackathon",
    description: "Won 1st place among 150+ teams with project 'Potter Heads'. Prize: ₹10,000",
    date: "27 September 2025",
    achievement: "After 7 consecutive losses, this victory symbolized resilience, belief, and brotherhood",
    icon: Trophy,
    color: "primary",
    image: "/hackathons/kcg-first-place.jpeg",
    team: ["Yukeshwaran N", "S Sasi Ganesan"],
    highlights: ["150+ competing teams", "24-hour intense coding", "Multi-state participants", "Teamwork & persistence"],
    linkedinUrl: "https://www.linkedin.com/posts/yukeshwaran-n-4b170b247_hackathon-innovation-persistence-activity-7377926178495590400-IaNb"
  },
  {
    title: "4th Place & Best Innovative Idea - Hackzilla",
    description: "Secured 4th overall and Best Innovative Idea Award among 120 teams at IEEE ComSoc Hackathon",
    date: "September 12-13, 2025",
    achievement: "Biggest win was the friendships forged during 24 hours of coding, laughter, and collaboration",
    icon: Award,
    color: "secondary",
    image: "/hackathons/hackzilla-achievement.jpeg",
    team: ["Yukeshwaran N", "Team Members"],
    highlights: ["120 competing teams", "Best Innovative Idea Award", "IEEE ComSoc Conference", "24-hour hackathon"],
    linkedinUrl: "https://www.linkedin.com/posts/yukeshwaran-n-4b170b247_hackzilla2025-kpriet-ieeecomsoc-activity-7373251769637793792-TCcY"
  }
];

// NEW: Added Symposium Achievements
const symposiumAchievements = [
  {
    title: "Best Paper Award - Karpagam Academy Conference",
    description: "Won Best Paper Award for presenting SecuQR: A Secure QR-Based Multi-Factor Authentication System",
    date: "Recent",
    achievement: "First conference presentation recognized with Best Paper Award for innovative authentication research",
    icon: Award,
    color: "primary",
    image: "/achievements/best-paper-award.jpeg",
    highlights: ["First conference presentation", "QR-based authentication system", "Enhanced user privacy", "Biometric verification"],
    linkedinUrl: "https://www.linkedin.com/posts/yukeshwaran-n-4b170b247_secuqr-cybersecurity-conference-activity-7300922476278992896-HZ9b"
  },
  {
    title: "Nandha College Symposium - Double Achievement",
    description: "🥉 3rd Place in CTF (Cybersecurity) - ₹1000 | 🥉 3rd Place in Paper Presentation - ₹750",
    date: "Recent",
    achievement: "Secured dual victories in both technical and presentation categories at cybersecurity symposium",
    icon: Trophy,
    color: "secondary",
    image: "/achievements/nandha-symposium.jpeg",
    highlights: ["CTF Competition - 3rd Place", "Paper Presentation - 3rd Place", "Cash Prize: ₹1750 total", "Multi-Factor Authentication topic"],
    linkedinUrl: "https://www.linkedin.com/posts/yukeshwaran-n-4b170b247_cybersecurity-ctf-paperpresentation-activity-7303992003917135873-CNRO"
  }
];

const recognitionList = [
  "Featured on Google Search as 'A Rising Cybersecurity Talent'",
  "India Book of Records holder for cybersecurity research contributions",
  "International recognitions from space research organizations (NASA, ISRO)",
  "Multiple government sector acknowledgments (CERT-In, Kerala, Karnataka)",
  "Automotive industry recognition (Mercedes-Benz, Adidas)",
  "European organization acknowledgments (University of Oslo, Platform.sh)",
  "Best Paper Award at Karpagam Academy Conference",
  "Double award winner at Nandha College Symposium",
];

// Image Modal Component
const ImageModal = ({ isOpen, onClose, image, title, description, linkedinUrl }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 z-10 p-2 text-white hover:text-glow-cyan transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-glow-cyan/10 to-glow-purple/10">
              <img
                src={image}
                alt={title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <h3 className="text-xl font-bold font-orbitron text-white mb-2">
                  {title}
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  {description}
                </p>
                {linkedinUrl && (
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A66C2] text-white rounded-lg hover:bg-[#004182] transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">View on LinkedIn</span>
                  </a>
                )}
              </div>
            </div>

            {/* Zoom Hint */}
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1">
              <div className="flex items-center gap-2 text-white text-sm">
                <ZoomIn className="w-4 h-4" />
                <span>Click outside to close</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Clickable Image Component
const ClickableImage = ({ src, alt, className, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div 
      className={`relative cursor-pointer group ${className}`}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setImageLoaded(true)}
      />
      
      {/* Loading Skeleton */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 animate-pulse rounded-lg" />
      )}

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 rounded-lg flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center">
          <ZoomIn className="w-8 h-8 text-white mb-2" />
          <span className="text-white text-sm font-medium">Click to enlarge</span>
        </div>
      </div>
    </div>
  );
};

const AchievementsSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openImageModal = (image, title, description, linkedinUrl) => {
    setSelectedImage({ image, title, description, linkedinUrl });
    setModalOpen(true);
  };

  const closeImageModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  const handleCardClick = (linkedinUrl) => {
    window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="achievements" className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 bg-gradient-to-r from-glow-cyan via-glow-purple to-glow-magenta bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-glow-cyan to-glow-magenta rounded-full" />
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 mb-12 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold font-orbitron text-glow-cyan mb-2">250+</div>
              <div className="text-foreground/70 text-sm">Total Vulnerabilities</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-orbitron text-glow-purple mb-2">100+</div>
              <div className="text-foreground/70 text-sm">.gov Domains</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-orbitron text-glow-magenta mb-2">10+</div>
              <div className="text-foreground/70 text-sm">Countries Impacted</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-orbitron text-glow-cyan mb-2">8+</div>
              <div className="text-foreground/70 text-sm">Awards & Prizes</div>
            </div>
          </div>
        </motion.div>

        {/* NEW: Symposium & Conference Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold font-orbitron text-center mb-8 bg-gradient-to-r from-glow-cyan to-glow-purple bg-clip-text text-transparent">
            Conference & Symposium Awards
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {symposiumAchievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="glass-card p-6 hover:neon-glow-mixed transition-all duration-300 group cursor-pointer"
                  onClick={() => handleCardClick(achievement.linkedinUrl)}
                >
                  {/* Image Section */}
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <ClickableImage
                      src={achievement.image}
                      alt={achievement.title}
                      className="h-48 rounded-lg"
                      onClick={() => openImageModal(achievement.image, achievement.title, achievement.description, achievement.linkedinUrl)}
                    />
                    <div className="absolute top-3 left-3">
                      <div className={`inline-flex p-2 rounded-lg bg-${achievement.color}/10 border border-${achievement.color}/30 neon-glow-cyan`}>
                        <Icon className={`w-4 h-4 text-${achievement.color}`} />
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-white text-sm font-medium">{achievement.date}</span>
                    </div>
                    
                    {/* LinkedIn Badge */}
                    <div className="absolute top-3 right-3 bg-[#0A66C2] text-white px-2 py-1 rounded text-xs font-semibold flex items-center gap-1">
                      <span>in</span>
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-orbitron text-foreground mb-2 flex items-center gap-2">
                    {achievement.title}
                    <ExternalLink className="w-4 h-4 text-[#0A66C2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </h3>
                  <p className="text-foreground/70 text-sm mb-3">
                    {achievement.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    {achievement.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-glow-cyan rounded-full" />
                        <span className="text-xs text-foreground/70">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 bg-secondary/10 border border-secondary/20 rounded-lg">
                    <div className="flex items-start gap-2">
                      <Heart className="w-4 h-4 text-glow-magenta mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-foreground/80 italic">{achievement.achievement}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Hackathon Wins Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold font-orbitron text-center mb-8 bg-gradient-to-r from-glow-cyan to-glow-purple bg-clip-text text-transparent">
            Hackathon Victories
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {hackathonWins.map((hackathon, index) => {
              const Icon = hackathon.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="glass-card p-6 hover:neon-glow-mixed transition-all duration-300 group cursor-pointer"
                  onClick={() => handleCardClick(hackathon.linkedinUrl)}
                >
                  {/* Image Section - Clickable */}
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <ClickableImage
                      src={hackathon.image}
                      alt={hackathon.title}
                      className="h-48 rounded-lg"
                      onClick={() => openImageModal(hackathon.image, hackathon.title, hackathon.description, hackathon.linkedinUrl)}
                    />
                    <div className="absolute top-3 left-3">
                      <div className={`inline-flex p-2 rounded-lg bg-${hackathon.color}/10 border border-${hackathon.color}/30 neon-glow-cyan`}>
                        <Icon className={`w-4 h-4 text-${hackathon.color}`} />
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-white text-sm font-medium">{hackathon.date}</span>
                    </div>
                    
                    {/* LinkedIn Badge */}
                    <div className="absolute top-3 right-3 bg-[#0A66C2] text-white px-2 py-1 rounded text-xs font-semibold flex items-center gap-1">
                      <span>in</span>
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-orbitron text-foreground mb-2 flex items-center gap-2">
                    {hackathon.title}
                    <ExternalLink className="w-4 h-4 text-[#0A66C2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </h3>
                  <p className="text-foreground/70 text-sm mb-3">
                    {hackathon.description}
                  </p>
                  
                  <div className="mb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-glow-cyan" />
                      <span className="text-sm font-medium text-foreground">Team:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {hackathon.team.map((member, i) => (
                        <span key={i} className="px-2 py-1 text-xs bg-primary/10 border border-primary/20 rounded-full text-primary">
                          {member}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    {hackathon.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-glow-cyan rounded-full" />
                        <span className="text-xs text-foreground/70">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 p-3 bg-secondary/10 border border-secondary/20 rounded-lg">
                    <div className="flex items-start gap-2">
                      <Heart className="w-4 h-4 text-glow-magenta mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-foreground/80 italic">{hackathon.achievement}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Main Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 hover:neon-glow-mixed transition-all duration-300 group cursor-pointer"
                onClick={() => handleCardClick(achievement.linkedinUrl)}
              >
                {/* Achievement with larger clickable image */}
                <div className="relative flex-1 mb-4">
                  {achievement.image && (
                    <div className="h-56 rounded-lg overflow-hidden">
                      <ClickableImage
                        src={achievement.image}
                        alt={achievement.title}
                        className="h-56 rounded-lg"
                        onClick={() => openImageModal(achievement.image, achievement.title, achievement.description, achievement.linkedinUrl)}
                      />
                      
                      {/* LinkedIn Badge */}
                      <div className="absolute top-3 right-3 bg-[#0A66C2] text-white px-2 py-1 rounded text-xs font-semibold flex items-center gap-1">
                        <span>in</span>
                        <ExternalLink className="w-3 h-3" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Icon positioned over the image */}
                <div className="relative -mt-12 mb-4 z-10">
                  <div className={`inline-flex p-3 rounded-lg bg-${achievement.color}/10 border border-${achievement.color}/30 neon-glow-cyan backdrop-blur-sm`}>
                    <Icon className={`w-6 h-6 text-${achievement.color}`} />
                  </div>
                </div>
                
                {/* Content below the image */}
                <div className="mt-4">
                  <h3 className="text-lg font-bold font-orbitron text-foreground mb-2 flex items-center gap-2">
                    {achievement.title}
                    <ExternalLink className="w-4 h-4 text-[#0A66C2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </h3>
                  <p className="text-foreground/70 text-sm">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card p-8"
        >
          <h3 className="text-2xl font-bold font-orbitron text-center mb-6 bg-gradient-to-r from-glow-cyan to-glow-purple bg-clip-text text-transparent">
            Public Recognition & Impact
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-foreground mb-4 flex items-center">
                <Award className="w-5 h-5 text-glow-cyan mr-2" />
                Notable Acknowledgments
              </h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                {recognitionList.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-glow-cyan mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4 flex items-center">
                <Globe className="w-5 h-5 text-glow-purple mr-2" />
                Global Impact
              </h4>
              <div className="text-sm text-foreground/70 space-y-2">
                <p><strong>National Honors:</strong> CERT-In Hall of Fame, India Book of Records</p>
                <p><strong>Sectors:</strong> Space Research, Government, Transport, E-commerce, Automotive, Education, IT platforms</p>
                <p><strong>Countries:</strong> India, USA, Norway, Germany, Europe (multi-national govt.)</p>
                <p><strong>Organizations:</strong> NASA, ISRO, Adidas, Mercedes-Benz, University of Oslo, Government portals</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Image Modal */}
        <ImageModal
          isOpen={modalOpen}
          onClose={closeImageModal}
          image={selectedImage?.image}
          title={selectedImage?.title}
          description={selectedImage?.description}
          linkedinUrl={selectedImage?.linkedinUrl}
        />
      </div>
    </section>
  );
};

export default AchievementsSection;