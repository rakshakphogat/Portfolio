import Navbar from "../../components/Navbar";
import Contact from "../../components/Contact-optimized";
import Footer from "../../components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
