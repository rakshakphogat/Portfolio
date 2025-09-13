"use client";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero-optimized';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
