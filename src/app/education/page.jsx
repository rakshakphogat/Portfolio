import Navbar from "../../components/Navbar";
import Education from "../../components/Education-optimized";
import Footer from "../../components/Footer";

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main>
        <Education />
      </main>
      <Footer />
    </div>
  );
}
