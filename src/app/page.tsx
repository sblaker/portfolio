import HeroSection from "./components/HeroSection";
import ContentCard from "./components/ContentCard";
import BioSection from "./components/BioSection";
import {
  IoBriefcaseOutline,
  IoLogoLinkedin,
  IoLogoGithub,
  IoDocumentTextOutline,
} from "react-icons/io5";
import Link from "next/link";


export default function Home() {
  return (
    <div className="text-gray-300 font-sans p-6">
      <div className="container mx-auto relative z-10">
        <main className="mt-10">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/3">
              <HeroSection />
              <div id="bio" className="mt-8">
                <BioSection />
              </div>
            </div>
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* ... codice precedente */}
                <Link href="/portfolio" passHref>
                  <ContentCard
                    title="Portfolio"
                    description="I miei progetti"
                    icon={<IoBriefcaseOutline
                      size={48}
                      className="text-[#00C2E8]" />} id={undefined}                  />
                </Link>
                {/* ... codice successivo */}
                <ContentCard
                  id="cv"
                  title="Curriculum Vitae"
                  description="Download my CV"
                  icon={
                    <div className="flex space-x-4">
                      <a href="/cv-antonino-trifiro.pdf" download>
                        <IoDocumentTextOutline
                          size={48}
                          className="text-[#00C2E8]"
                        />
                      </a>
                    </div>
                  }
                />
                <ContentCard
                  id="links"
                  title="Links"
                  description="Connect with me"
                  icon={
                    <div className="flex space-x-4">
                      <a
                        href="https://www.linkedin.com/in/antonino-trifir%C3%B2-078869213/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IoLogoLinkedin size={48} className="text-[#00C2E8]" />
                      </a>
                      <a
                        href="https://github.com/sblaker"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IoLogoGithub size={48} className="text-[#00C2E8]" />
                      </a>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
