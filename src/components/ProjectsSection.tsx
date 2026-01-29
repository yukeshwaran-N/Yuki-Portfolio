import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Shield, QrCode, Target, Cpu } from "lucide-react";

const projects = [
  {
    name: "SOC PCAP Analyzer & Incident Automation",
    description: "An automated SOC workflow tool that analyzes PCAP files to identify potential threats using MITRE ATT&CK framework. It generates detailed incident reports and automates ticket creation in Jira, while also sending alerts to Slack channels. Built with Python and integrated with n8n for seamless SOAR capabilities.",
    tech: [
      "Python",
      "tshark",
      "MITRE ATT&CK",
      "n8n (SOAR)",
      "Slack",
      "Jira",
      "PCAP Analysis"
    ],
    github: "https://github.com/yukeshwaran-N/SOC-pcap-analyzer-v1",
    demo: "#",
    icon: Target,
  },
  {
    name: "SOC Analyst Toolkit - IOC Investigation Dashboard",
    description: "A comprehensive SOC analyst tool designed to accelerate IOC investigations. Automatically detects IOC types, generates safe defanged outputs, provides one-click OSINT lookups across threat-intel platforms, and features a cyber-style UI with analyst-friendly workflows. Built for speed, safety, and efficiency in security operations.",
    tech: ["React", "TypeScript", "Security", "OSINT", "Threat Intelligence", "Cybersecurity"],
    github: "https://github.com/yukeshwaran-N/SOC-ToolKit-Yuki-v1",
    demo: "https://soc-toolkit-yuki-v1.vercel.app/",
    icon: Cpu,
  },
  {
    name: "Modus Nexus",
    description: "Advanced Case Management Dashboard for Thoothukudi Cyber Police - A robust multi-language dashboard integrating criminal data management, network analysis, crime visualization, prediction, and AI-driven case summarization.",
    tech: ["Python", "Tkinter", "Data Analysis", "AI", "Network Analysis", "Crime Prediction"],
    github: "https://github.com/yukeshwaran-N/modus-nexus",
    demo: "#",
    icon: Shield,
  },
  {
    name: "SecuQR - Multi-Factor Authentication",
    description: "A Passwordless Multi-Factor Authentication System Using QR Code and Biometric Verification - Developing a secure login system with QR code authentication, biometric verification, and secure document storage.",
    tech: ["Flutter", "Flask", "QR Code", "Biometric", "Authentication", "Security"],
    github: "https://github.com/yukeshwaran-N/Multi-Factor-Authentication-Project-via-QR",
    demo: "#",
    icon: QrCode,
  },

];

const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 bg-gradient-to-r from-glow-cyan via-glow-purple to-glow-magenta bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-glow-cyan to-glow-magenta rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 hover:neon-glow-mixed transition-all duration-300 group h-full flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/30 mr-3">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-orbitron text-foreground">
                    {project.name}
                  </h3>
                </div>

                <p className="text-foreground/70 mb-4 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium bg-accent/10 border border-accent/30 rounded-full text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <Button variant="neon" size="sm" asChild className="flex-1">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button variant="neonSecondary" size="sm" asChild className="flex-1">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Projects Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card p-8 mt-12 text-center"
        >
          <h3 className="text-2xl font-bold font-orbitron mb-4 bg-gradient-to-r from-glow-cyan to-glow-purple bg-clip-text text-transparent">
            Project Highlights & Impact
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-foreground/80">
            <div>
              <h4 className="font-bold text-foreground mb-2">SOC Analyst Toolkit</h4>
              <p>Client-side IOC investigation dashboard accelerating SOC workflows with one-click OSINT lookups</p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">Modus Nexus</h4>
              <p>Built for Thoothukudi Cyber Police to aid cybercrime investigations with AI-powered analysis</p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">SecuQR</h4>
              <p>Best Paper Award at Karpagam Academy of Higher Education for innovative authentication system</p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">EmergencyInfoQR</h4>
              <p>Web app for instant medical data access during emergencies - speeds up life-saving response</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;