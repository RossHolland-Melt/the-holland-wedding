import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import EngagementPhoto from "@/components/EngagementPhoto";
import Story from "@/components/Story";
import TheDay from "@/components/TheDay";
import RsvpForm from "@/components/RsvpForm";
import Gifts from "@/components/Gifts";
import Accommodation from "@/components/Accommodation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="page">
      <Nav />
      <main>
        <Hero />
        <EngagementPhoto />
        <Story />
        <TheDay />
        <RsvpForm />
        <Gifts />
        <Accommodation />
      </main>
      <Footer />
    </div>
  );
}
