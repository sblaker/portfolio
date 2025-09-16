import HeroSection from './components/HeroSection';
import BioSection from './components/BioSection';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8 md:px-8 md:py-12 text-white">
      <div className="space-y-8">
        <HeroSection />
        <BioSection />

        <div className="text-center pt-8">
          <Link 
            href="/portfolio" 
            className="bg-[#00C2E8] text-black font-bold py-3 px-8 rounded-full text-lg hover:bg-cyan-400 transition-colors duration-300 shadow-lg shadow-cyan-500/20"
          >
            View My Projects
          </Link>
        </div>
      </div>
    </main>
  );
}