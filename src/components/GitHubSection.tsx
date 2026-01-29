import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Star, GitFork, Code, Users, Eye } from "lucide-react";

const stats = [
  { label: "Repositories", value: "30+", icon: Code },
  { label: "Stars Earned", value: "15+", icon: Star },
  { label: "Forks", value: "10+", icon: GitFork },
  { label: "Followers", value: "15+", icon: Users },
];

const featuredRepos = [
  {
    name: "SOC-ToolKit-Yuki-v1",
    description: "Client-side IOC investigation dashboard accelerating SOC workflows with one-click OSINT lookups",
    stars: 0,
    language: "TypeScript",
    url: "https://github.com/yukeshwaran-N/SOC-ToolKit-Yuki-v1"
  },
  {
    name: "modus-nexus",
    description: "Advanced Case Management Dashboard for Thoothukudi Cyber Police with AI-powered analysis",
    stars: 8,
    language: "Python",
    url: "https://github.com/yukeshwaran-N/modus-nexus"
  },
  {
    name: "Multi-Factor-Authentication-Project-via-QR",
    description: "Secure QR-based Multi-Factor Authentication System with biometric verification",
    stars: 3,
    language: "Flutter",
    url: "https://github.com/yukeshwaran-N/Multi-Factor-Authentication-Project-via-QR"
  },
  {
    name: "achieve-your-moments-tracker",
    description: "Comprehensive goal and achievement tracking application with progress analytics",
    stars: 2,
    language: "React",
    url: "https://github.com/yukeshwaran-N/achieve-your-moments-tracker"
  },
  {
    name: "WildGuard-Smart-Wildlife-Monitoring-System",
    description: "IoT-based solution to minimize human-animal conflicts with real-time tracking",
    stars: 2,
    language: "IoT",
    url: "https://github.com/yukeshwaran-N/WildGuard-Smart-Wildlife-Monitoring-System"
  },
  {
    name: "EmergencyInfoQR",
    description: "Web app for instant medical data access during emergencies via QR codes",
    stars: 1,
    language: "JavaScript",
    url: "https://github.com/yukeshwaran-N/EmergencyInfoQR"
  }
];

const GitHubSection = () => {
  return (
    <section id="github" className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 bg-gradient-to-r from-glow-cyan via-glow-purple to-glow-magenta bg-clip-text text-transparent">
            Open Source Contributions
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-glow-cyan to-glow-magenta rounded-full" />
          <p className="text-foreground/70 max-w-2xl mx-auto mt-4">
            Building innovative cybersecurity tools and solutions that make digital systems more secure and accessible
          </p>
        </motion.div>

        {/* GitHub Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 text-center hover:neon-glow-cyan transition-all duration-300 group"
              >
                <div className="relative">
                  <Icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl font-bold font-orbitron text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Featured Repositories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold font-orbitron text-center mb-8 bg-gradient-to-r from-glow-cyan to-glow-purple bg-clip-text text-transparent">
            Featured Projects
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRepos.map((repo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 hover:neon-glow-mixed transition-all duration-300 group h-full flex flex-col"
              >
                <div className="flex-1">
                  {/* Repository Header */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold font-orbitron text-foreground flex-1">
                      {repo.name}
                    </h3>
                    <div className="flex items-center gap-1 text-accent ml-2">
                      <Star className="w-4 h-4" />
                      <span className="text-sm font-medium">{repo.stars}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/70 text-sm mb-4 line-clamp-3">
                    {repo.description}
                  </p>

                  {/* Language & Tech Stack */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2 py-1 bg-primary/10 border border-primary/30 rounded-full text-primary text-xs font-medium">
                      {repo.language}
                    </span>
                  </div>
                </div>

                {/* View Button */}
                <Button
                  variant="neon"
                  size="sm"
                  className="w-full group"
                  asChild
                >
                  <a href={repo.url} target="_blank" rel="noopener noreferrer">
                    <Eye className="mr-2 h-4 w-4" />
                    View Repository
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button
            variant="neonSecondary"
            size="lg"
            asChild
          >
            <a href="https://github.com/yukeshwaran-N" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Repositories
            </a>
          </Button>

          {/* GitHub Profile Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 glass-card p-6 max-w-md mx-auto"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <img
                src="https://github.com/yukeshwaran-N.png"
                alt="Yukeshwaran N GitHub"
                className="w-16 h-16 rounded-full border-2 border-glow-cyan"
              />
              <div className="text-left">
                <h4 className="font-bold font-orbitron text-foreground">yukeshwaran-N</h4>
                <p className="text-sm text-muted-foreground">Cybersecurity Researcher</p>
              </div>
            </div>
            <p className="text-sm text-foreground/70 text-center">
              Building secure systems and contributing to open source cybersecurity projects
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubSection;