import Link from "next/link";
import Image from "next/image";
import { IoLogoGithub } from "react-icons/io5";
import { myProjects, Project } from "../../../data/projects";
import type { Metadata } from "next";

// ✅ Tipi centralizzati
interface ProjectPageProps {
  params: {
    slug: string;
  };
}

// ✅ Generazione delle rotte statiche
export async function generateStaticParams(): Promise<ProjectPageProps["params"][]> {
  return myProjects.map((project) => ({
    slug: project.slug,
  }));
}

// ✅ Metadata dinamico
export async function generateMetadata(
  { params }: ProjectPageProps
): Promise<Metadata> {
  const project = myProjects.find((p) => p.slug === params.slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `Project | ${project.title}`,
    description: project.description,
  };
}

// ✅ Pagina principale
export default function ProjectDetailsPage({ params }: ProjectPageProps) {
  const { slug } = params;
  const project: Project | undefined = myProjects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-transparent text-white flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-4">Project not found</h1>
        <p className="text-gray-400 mb-8">
          The project you are looking for does not exist.
        </p>
        <Link href="/portfolio" className="text-[#00C2E8] hover:underline">
          ← Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent text-white p-8">
      <header className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold">{project.title}</h1>
          {project.githubUrl && project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository link"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <IoLogoGithub size={32} />
            </a>
          )}
        </div>
        <Link
          href="/portfolio"
          className="text-[#00C2E8] hover:text-cyan-400 transition-colors duration-300"
        >
          ← Back to Portfolio
        </Link>
      </header>

      <div className="bg-[#1C1C1C] p-8 rounded-3xl shadow-lg">
        {project.imageUrl && (
          <div className="relative w-full h-80 mb-6 rounded-xl overflow-hidden">
            <Image
              src={project.imageUrl}
              alt={`Project image: ${project.title}`}
              fill
              className="object-cover rounded-xl"
            />
          </div>
        )}

        <p className="text-gray-400 mb-6">{project.fullDescription}</p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Technologies used:</h3>
        <div className="flex flex-wrap gap-2 text-sm text-gray-500 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-gray-700 text-gray-300 text-xs rounded-full px
