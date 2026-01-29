import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Cybersecurity Tools",
    skills: ["Burp Suite", "Metasploit", "Nmap", "Wireshark", "OWASP ZAP", "Kali Linux"],
  },
  {
    category: "Programming Languages",
    skills: ["Python", "Java", "TypeScript", "C++","Bash"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "Node.js", "Flask"],
  },
  {
    category: "Security Domains",
    skills: ["Web App Security", "Network Security", "Penetration Testing", "Cryptography", "Reverse Engineering", "Malware Analysis"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Docker", "CI/CD"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 bg-gradient-to-r from-glow-cyan via-glow-purple to-glow-magenta bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-glow-cyan to-glow-magenta rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-bold font-orbitron text-secondary mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 glass-card border-primary/30 hover:border-primary hover:neon-glow-cyan transition-all duration-300 cursor-pointer"
                  >
                    <span className="text-foreground font-medium">{skill}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
