import Navbar from "../../components/Navbar";
import Projects from "../../components/Projects-optimized";
import Footer from "../../components/Footer";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main>
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
