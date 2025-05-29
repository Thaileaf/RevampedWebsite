// components/ProjectCards.jsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProjectData {
    id: number
    title: string,
    technologies: string,
    description: string,
    gradient?: string,
    backgroundImage?: string,
    overlay?: string,
    githubUrl?: string,
    liveUrl?: string,
    blogUrl?: string,
}

interface ProjectCardProps {
    projects: ProjectData[];
}

const ProjectCards = ({ projects } : ProjectCardProps) => {
    return (
        <div className="w-full h-full overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-screen">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 1 + (index * 0.2), duration: 0.6}}
                        // className="bg-white overflow-hidden hover:scale-105 transition-transform duration-300"
                        // onClick={() => project.onClick && project.onClick()}
                    >
                        <div className={`h-48 ${project.gradient} flex items-center justify-center relative`}>
                            {project.backgroundImage && (
                                <div className="absolute inset-0">
                                    <Image
                                        src={project.backgroundImage}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                    {/*{project.overlay && (*/}
                                    {/*    <div className={`absolute inset-0 ${project.overlay}`}></div>*/}
                                    {/*)}*/}
                                </div>
                            )}
                        </div>

                        <div className="p-4 bg-white text-black">
                            <h3 className="font-semibold mb-1">{project.title}</h3>
                            <p className="text-sm text-gray-600">{project.technologies}</p>
                            {project.description && (
                                <p className="text-sm text-gray-500 mt-2">{project.description}</p>
                            )}

                            {/* Individual Project Links */}
                            {(project.githubUrl || project.blogUrl || project.liveUrl) && (
                                <div className="flex gap-2 mt-3">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="flex items-center gap-1 px-3 py-1.5 bg-gray-900 text-white text-xs rounded hover:bg-gray-800 transition-colors duration-300"
                                        >
                                            <svg
                                                className="w-3 h-3"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                                            </svg>
                                            <span>Code</span>
                                        </a>
                                    )}

                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition-colors duration-300"
                                        >
                                            <svg
                                                className="w-3 h-3"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                                            </svg>
                                            <span>Live</span>
                                        </a>
                                    )}

                                    {project.blogUrl && (
                                        <a
                                            href={project.blogUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="flex items-center gap-1 px-3 py-1.5 bg-green-600 text-white text-xs rounded hover:bg-green-700 transition-colors duration-300"
                                        >
                                            <svg
                                                className="w-3 h-3"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                                            </svg>
                                            <span>Blog</span>
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ProjectCards;