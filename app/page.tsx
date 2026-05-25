import {
  ContactSection,
  FeaturedProjectsSection,
  HeroSection,
  HomeFooter,
  SkillsOverviewSection,
} from "@/app/_components";

export default function Home() {
  return (
    <div className="min-h-screen  pb-14">
      <main className="space-y-20 md:space-y-24">
        <HeroSection />
        <FeaturedProjectsSection />
        <SkillsOverviewSection />

        <ContactSection />
        <HomeFooter />
      </main>
    </div>
  );
}
