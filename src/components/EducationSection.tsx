import { motion } from "framer-motion";
import { GraduationCap, Award, Star } from "lucide-react";

const educationData = [
  {
    degree: "Integrated M.Tech in Computer Science & Engineering",
    institution: "Erode Sengunthar Engineering College (Autonomous), Erode",
    year: "Sep 2022 - Present",
    achievements: [
      "CGPA: 8.15/10 (up to 5th semester)",
      "Focus on Cybersecurity, Ethical Hacking, and Web Application Security",
      "Active in security research and vulnerability disclosure",
    ],
  },
  {
    degree: "Pre University College (PCMC)",
    institution: "REVA University, Bengaluru",
    year: "Apr 2020 - Mar 2022",
    achievements: [
      "Computer Science with Physics, Chemistry, Mathematics, Computer Science",
      "Score: 84.2%",
      "Foundation for advanced computer science studies",
    ],
  },
  {
    degree: "Professional Certifications",
    institution: "Google & NPTEL, Govt. of India",
    year: "2023-2024",
    achievements: [
      "Foundations of Cybersecurity - Google",
      "Certified Ethical Hacking & Cybersecurity - NPTEL",
      "Hands-on experience with security tools and methodologies",
    ],
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 bg-gradient-to-r from-glow-cyan via-glow-purple to-glow-magenta bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-glow-cyan to-glow-magenta rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card p-6 md:p-8 hover:neon-glow-mixed transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/30 neon-glow-cyan">
                  {index === 0 ? (
                    <GraduationCap className="w-6 h-6 text-primary" />
                  ) : index === 1 ? (
                    <Award className="w-6 h-6 text-secondary" />
                  ) : (
                    <Star className="w-6 h-6 text-accent" />
                  )}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold font-orbitron text-foreground mb-2">
                    {item.degree}
                  </h3>
                  <p className="text-secondary font-medium mb-1">{item.institution}</p>
                  <p className="text-muted-foreground text-sm mb-4">{item.year}</p>
                  
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-glow-cyan rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground/80">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass-card p-8 mt-12 text-center neon-glow-mixed"
        >
          <h3 className="text-2xl font-bold font-orbitron mb-6 bg-gradient-to-r from-glow-cyan to-glow-purple bg-clip-text text-transparent">
            Academic Excellence & Records
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div>
              <h4 className="font-bold text-foreground mb-4 flex items-center">
                <Star className="w-5 h-5 text-glow-cyan mr-2" />
                National Records
              </h4>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start">
                  <span className="text-glow-cyan mr-2">•</span>
                  India Book of Records - Youngest researcher to get Hall of Fame in CERT-In and NASA
                </li>
                <li className="flex items-start">
                  <span className="text-glow-cyan mr-2">•</span>
                  Hall of Fame - CERT-In (July 2025)
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4 flex items-center">
                <Award className="w-5 h-5 text-glow-purple mr-2" />
                Awards & Recognitions
              </h4>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start">
                  <span className="text-glow-purple mr-2">•</span>
                  Best Paper Award - SecuQR Project at Karpagam Academy
                </li>
                <li className="flex items-start">
                  <span className="text-glow-purple mr-2">•</span>
                  1st Place - Paper Presentation at Annai Valiankami College
                </li>
                <li className="flex items-start">
                  <span className="text-glow-purple mr-2">•</span>
                  3rd Place - CTF at Nandha College Symposium
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;