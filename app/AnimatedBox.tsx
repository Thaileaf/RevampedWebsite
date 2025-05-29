'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCards from "@/app/ProjectCards";
import {projectsData} from "@/app/projectsData";

// data/projects.js
// export const projectsData = [
//     {
//         id: 1,
//         title: "Quick Draw Game",
//         technologies: "HTML5 Canvas • JavaScript • WebGL",
//         description: "Interactive drawing game with time constraints and real-time scoring",
//         gradient: "bg-gradient-to-br from-yellow-100 to-yellow-200",
//         backgroundImage: "/images/projects/quick-draw-preview.png",
//         overlay: "bg-black bg-opacity-20",
//         githubUrl: "https://github.com/yourusername/quick-draw-game",
//         liveUrl: "https://quick-draw-game.vercel.app",
//         blogUrl: "https://yourblog.dev/building-quick-draw-game",
//         onClick: () => {
//             window.open("https://quick-draw-game.vercel.app", "_blank");
//         }
//     },
//     {
//         id: 2,
//         title: "Flight Booking System",
//         technologies: "React • Node.js • MongoDB • Stripe",
//         description: "Complete airline booking platform with payment integration",
//         gradient: "bg-gradient-to-br from-teal-400 to-teal-500",
//         backgroundImage: "/images/projects/flight-booking-preview.png",
//         overlay: "bg-blue bg-opacity-10",
//         githubUrl: "https://github.com/yourusername/flight-booking-system",
//         liveUrl: "https://flight-booking-system.netlify.app",
//         blogUrl: "https://yourblog.dev/flight-booking-architecture",
//         onClick: () => {
//             window.open("https://flight-booking-system.netlify.app", "_blank");
//         }
//     },
//     {
//         id: 3,
//         title: "Task Management App",
//         technologies: "Vue.js • Express • PostgreSQL • Socket.io",
//         description: "Collaborative project management tool with real-time updates",
//         gradient: "bg-gradient-to-br from-gray-600 to-gray-700",
//         backgroundImage: "/images/projects/task-management-bg.png",
//         overlay: "bg-black bg-opacity-50",
//         githubUrl: "https://github.com/yourusername/task-management-app",
//         liveUrl: "https://taskmaster-pro.herokuapp.com",
//         blogUrl: "https://yourblog.dev/real-time-collaboration-vue",
//         onClick: () => {
//             window.open("https://taskmaster-pro.herokuapp.com", "_blank");
//         }
//     },
//     {
//         id: 4,
//         title: "Portfolio Website",
//         technologies: "Next.js • Tailwind • Framer Motion • MDX",
//         description: "Personal portfolio and blog with dynamic content management",
//         gradient: "bg-gradient-to-br from-purple-200 to-pink-200",
//         backgroundImage: "/images/projects/portfolio-preview.png",
//         githubUrl: "https://github.com/yourusername/portfolio-website",
//         liveUrl: "https://yourname-portfolio.vercel.app",
//         blogUrl: "https://yourblog.dev/building-my-portfolio",
//         onClick: () => {
//             window.open("https://yourname-portfolio.vercel.app", "_blank");
//         }
//     },
//     {
//         id: 5,
//         title: "E-commerce Dashboard",
//         technologies: "React • Firebase • Chart.js • Stripe API",
//         description: "Admin dashboard for managing online store with analytics",
//         gradient: "bg-gradient-to-br from-orange-300 to-red-400",
//         backgroundImage: "/images/projects/ecommerce-dashboard.png",
//         overlay: "bg-black bg-opacity-30",
//         githubUrl: "https://github.com/yourusername/ecommerce-dashboard",
//         liveUrl: "https://ecommerce-admin-dash.vercel.app",
//         // Note: This project doesn't have a blog post, so no blogUrl
//         onClick: () => {
//             window.open("https://ecommerce-admin-dash.vercel.app", "_blank");
//         }
//     },
//     {
//         id: 6,
//         title: "Weather Forecast App",
//         technologies: "React Native • OpenWeather API • Redux",
//         description: "Cross-platform mobile app with location-based weather forecasts",
//         gradient: "bg-gradient-to-br from-sky-300 to-blue-500",
//         backgroundImage: "/images/projects/weather-app.png",
//         overlay: "bg-white bg-opacity-20",
//         githubUrl: "https://github.com/yourusername/weather-forecast-app",
//         // Note: This is a mobile app, so no live URL
//         blogUrl: "https://yourblog.dev/react-native-weather-app",
//         onClick: () => {
//             window.open("https://github.com/yourusername/weather-forecast-app", "_blank");
//         }
//     }
// ];

// Example of different URL combinations:
// - Project 1: Has all three (GitHub + Live + Blog)
// - Project 2: Has all three
// - Project 3: Has all three
// - Project 4: Has all three
// - Project 5: Has GitHub + Live (no blog post)
// - Project 6: Has GitHub + Blog (mobile app, no live demo)

// Alternative simplified structure if you prefer minimal data
export const simpleProjectsData = [
    {
        id: 1,
        title: "Quick Draw Game",
        technologies: "HTML5 Canvas • JavaScript • WebGL",
        image: "/images/projects/quick-draw.png",
        gradient: "bg-gradient-to-br from-yellow-100 to-yellow-200"
    },
    {
        id: 2,
        title: "Flight Booking System",
        technologies: "React • Node.js • MongoDB",
        image: "/images/projects/flight-booking.png",
        gradient: "bg-gradient-to-br from-teal-400 to-teal-500"
    },
    {
        id: 3,
        title: "Task Management App",
        technologies: "Vue.js • Express • PostgreSQL",
        image: "/images/projects/task-management.png",
        gradient: "bg-gradient-to-br from-gray-600 to-gray-700"
    },
    {
        id: 4,
        title: "Portfolio Website",
        technologies: "Next.js • Tailwind • Framer Motion",
        image: "/images/projects/portfolio.png",
        gradient: "bg-gradient-to-br from-purple-200 to-pink-200"
    }
];





const AnimatedBox = () => {
    const [showContent, setShowContent] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [animationState, setAnimationState] = useState('expanding');
    const [pendingSection, setPendingSection] = useState('');
    const [showEmailPopup, setShowEmailPopup] = useState(false);
    const [copied, setCopied] = useState(false);

    const email = 'tnl2012@nyu.edu';

    useEffect(() => {
        if (animationState === 'expanding') {
            const timer = setTimeout(() => {
                setShowContent(true);
                setAnimationState('expanded');
            }, 1400);
            return () => clearTimeout(timer);
        }
    }, [animationState]);

    const handleSectionClick = (section) => {
        if (activeSection === section) {
            setActiveSection('');
            return;
        }

        if (section === 'projects') {
            setShowContent(false);
            setAnimationState('reversing');
            setPendingSection(section);

            setTimeout(() => {
                setAnimationState('reversed');
                setActiveSection(section);
                setShowContent(true);
            }, 1200);
        } else {
            setActiveSection(section);
        }
    };

    const handleBackToMain = () => {
        if (animationState === 'reversed') {
            setShowContent(false);
            setActiveSection('');
            setPendingSection('');
            setAnimationState('backToMain');
            setTimeout(() => {
                setShowContent(true);
                setAnimationState('expanded');
            }, 600);
        }
    };

    const handleEmailClick = () => {
        setShowEmailPopup(true);
    };

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy email:', err);
        }
    };

    const boxVariants = {
        initial: {
            width: 0,
            height: 0,
            y: 0,
        },
        backToMain: {
            width: "100%",
            height: "80%",
            y: 0,
            transition: {
                height: {
                    duration: .8,
                    ease: "easeOut"
                },
                y: {
                    duration: 0.1,
                    ease: "easeOut"
                }
            }
        },
        expanding: {
            width: "100%",
            height: "80%",
            y: 0,
            transition: {
                width: {
                    duration: 1,
                    ease: "easeOut"
                },
                height: {
                    duration: .8,
                    delay: 1.4,
                    ease: "easeOut"
                },
                y: {
                    duration: 0.1,
                    ease: "easeOut"
                }
            }
        },
        expanded: {
            width: "100%",
            height: "80%",
            y: 0,
        },
        reversing: {
            width: "100%",
            height: 0,
            y: "-40vh",
            transition: {
                height: {
                    duration: 1.2,
                    ease: "easeInOut"
                },
                y: {
                    duration: 1.2,
                    ease: "easeInOut"
                }
            }
        },
        reversed: {
            width: "100%",
            height: "100vh",
            y: "0",
            transition: {
                width: {
                    duration: .8,
                    ease: "easeOut"
                },
                height: {
                    duration: .8,
                    ease: "easeInOut"
                },
                y: {
                    duration: .8,
                    ease: "easeInOut"
                }
            }
        }
    };

    const getContentForState = () => {
        if (animationState === 'reversed' && activeSection === 'projects') {
            return (
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: .2}}
                    className="h-screen text-white flex flex-col"
                >
                    <div className="flex items-center justify-between p-6 border-b border-gray-800">
                        <motion.button
                            initial={{opacity: 0, x: -20}}
                            animate={{opacity: 1, x: 0}}
                            transition={{delay: 0.3}}
                            onClick={handleBackToMain}
                            className="text-white cursor-pointer hover:text-gray-300 transition-colors duration-200 flex items-center gap-2"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </motion.button>

                        <motion.h1
                            initial={{y: -20, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{delay: 0.5}}
                            className="text-3xl font-light"
                        >
                            Projects and Skills
                        </motion.h1>

                    </div>

                    <div className="container h-0 flex-1 mx-auto px-0 py-4">
                        <ProjectCards projects={projectsData}/>
                    </div>
                </motion.div>
            );
        }

        if (animationState === 'expanded') {
            return (
                <motion.div
                    initial={{opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: .2 }}
                    className="h-full p-8 text-white flex flex-col"
                >
                    <motion.div
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="mb-8"
                    >
                        <h1 className="text-4xl font-light mb-2">Thaison Le - Software Developer</h1>
                    </motion.div>

                    <motion.div
                        initial={{x: -30, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{delay: 0.8, duration: 0.8}}
                        className="flex flex-col gap-2 mb-8"
                    >
                        <button
                            onClick={() => handleSectionClick('projects')}
                            className="text-left px-4 py-2 border border-white hover:bg-white hover:text-black transition-colors duration-200 w-fit"
                        >
                            Projects and Skills
                        </button>
                        <a
                            href="/resume.pdf"
                            download="Thaison_Le_Resume.pdf"
                            className="text-left px-4 py-2 border border-white hover:bg-white hover:text-black transition-colors duration-200 w-fit"
                        >
                            Resume
                        </a>
                        <a
                            href={"https://blog.lethaison.com/"}
                            target={"_blank"}
                            className="text-left px-4 py-2 border border-white hover:bg-white hover:text-black transition-colors duration-200 w-fit"
                        >
                            My Blog
                        </a>
                        <button
                            onClick={() => handleSectionClick('about')}
                            className="text-left px-4 py-2 border border-white hover:bg-white hover:text-black transition-colors duration-200 w-fit"
                        >
                            About me
                        </button>
                    </motion.div>

                    <div className="flex-1 overflow-y-auto">
                        <AnimatePresence>
                            {activeSection === 'about' && (
                                <motion.div
                                    initial={{opacity: 0, y: 20}}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="space-y-4"
                                >
                                    <h2 className="text-2xl font-light mb-4">About Me</h2>
                                    <div className="text-gray-300 space-y-4">
                                        <p>
                                            I'm a software engineer with hands-on experience in full-stack development,
                                            cloud infrastructure, and systems administration. I specialize in building
                                            scalable web applications using modern technologies like React, Next.js, Node,
                                            and AWS cloud services.
                                        </p>
                                        <p>
                                            I'm passionate about cloud technologies, Linux, SRE practices, and building
                                            reliable systems.
                                        </p>
                                        <div className="mt-6">
                                            <h3 className="text-lg mb-2">Education</h3>
                                            <p>Bachelor of Science in Computer Science</p>
                                            <p className="text-gray-400">New York University, 2024</p>
                                        </div>
                                        {/*<div className="mt-4">*/}
                                        {/*    <h3 className="text-lg mb-2">Certifications</h3>*/}
                                        {/*    <p className="text-gray-400">AWS Certified Cloud Practitioner (2025)</p>*/}
                                        {/*</div>*/}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <motion.div
                        initial={{y: 30, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{delay: 1.2, duration: 0.8}}
                        className="flex gap-4 mt-8"
                    >
                        <a href="https://github.com/Thaileaf"
                           className="text-white hover:text-gray-300 transition-colors duration-200">
                            <svg role="img" viewBox="0 0 24 24" width="32" height="32" fill="currentColor"
                                 xmlns="http://www.w3.org/2000/svg">
                                <title>GitHub</title>
                                <path
                                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/thaison-le/"
                           className="text-white hover:text-gray-300 transition-colors duration-200">
                        <svg role="img" viewBox="0 0 24 24" width="32" height="32" fill="currentColor"
                                 xmlns="http://www.w3.org/2000/svg">
                                <title>LinkedIn</title>
                                <path
                                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                        <button
                            onClick={handleEmailClick}
                            className="text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer"
                        >
                            <svg role="img" viewBox="0 0 24 24" width="32" height="32" fill="currentColor"
                                 xmlns="http://www.w3.org/2000/svg">
                                <title>Gmail</title>
                                <path
                                    d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                            </svg>
                        </button>
                    </motion.div>
                </motion.div>
            );
        }

        return null;
    };

    return (
        <div className="flex items-center justify-start min-h-screen w-full h-full bg-black relative">
            <motion.div
                variants={boxVariants}
                initial="initial"
                animate={animationState}
                style={{
                    border: '1.5px solid white',
                    borderRadius: '2px',
                    transformOrigin: 'left center'
                }}
                className="relative overflow-hidden"
            >
                <AnimatePresence>
                    {showContent && getContentForState()}
                </AnimatePresence>
            </motion.div>

            {/* Email Popup */}
            <AnimatePresence>
                {showEmailPopup && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black bg-opacity-50 z-50"
                            onClick={() => setShowEmailPopup(false)}
                        />

                        {/* Popup */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black border border-white rounded-lg p-6 shadow-xl z-50 min-w-80"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-white">Contact Me</h3>
                                <button
                                    onClick={() => setShowEmailPopup(false)}
                                    className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>
                            </div>

                            <div className="mb-4">
                                <div
                                    className="bg-black p-3 rounded border font-mono text-sm flex justify-between items-center">
                                    <a href={`mailto:${email}`}>
                                        {email}
                                    </a>
                                    <button
                                        onClick={() => handleCopyEmail()}
                                        className="ml-2 hover:opacity-70 transition-opacity cursor-pointer"
                                    >
                                        {copied ? "copied!" : "copy"}
                                    </button>
                                </div>
                            </div>

                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AnimatedBox;