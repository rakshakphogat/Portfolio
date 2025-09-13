import Navbar from "../../components/Navbar";
import About from "../../components/About-optimized";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main>
        <About />
      </main>
      <Footer />
    </div>
  );
}
