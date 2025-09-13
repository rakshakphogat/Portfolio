import Navbar from "../../components/Navbar";
import Skills from "../../components/Skills-optimized";
import Footer from "../../components/Footer";

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main>
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
