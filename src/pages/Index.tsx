import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import SkillsSection from "@/components/SkillsSection";
import GitHubSection from "@/components/GitHubSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <EducationSection />
      <SkillsSection />
      <AchievementsSection />
      <ProjectsSection />
      <GitHubSection />
      <ContactSection />
    </div>
  );
};

export default Index;
