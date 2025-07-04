import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  color: string;
}

const ProjectCube = () => {
  const [currentFace, setCurrentFace] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React and Flask, featuring user authentication, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      technologies: ["React", "Flask", "PostgreSQL", "Stripe"],
      liveUrl: "https://demo-ecommerce.netlify.app",
      githubUrl: "https://github.com/yourusername/ecommerce",
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      liveUrl: "https://task-manager-demo.netlify.app",
      githubUrl: "https://github.com/yourusername/task-manager",
      color: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and historical weather data visualization.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
      technologies: ["React", "Python", "OpenWeather API", "Chart.js"],
      liveUrl: "https://weather-dash-demo.netlify.app",
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      color: "from-orange-500 to-red-600"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A modern portfolio website showcasing projects, skills, and experience with smooth animations and responsive design.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Three.js"],
      liveUrl: "https://portfolio-demo.netlify.app",
      githubUrl: "https://github.com/yourusername/portfolio",
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 5,
      title: "Social Media App",
      description: "A social media platform with user profiles, posts, comments, and real-time messaging functionality.",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=300&fit=crop",
      technologies: ["React", "Express", "MongoDB", "Socket.io"],
      liveUrl: "https://social-app-demo.netlify.app",
      githubUrl: "https://github.com/yourusername/social-app",
      color: "from-cyan-500 to-blue-600"
    },
    {
      id: 6,
      title: "Data Analytics Tool",
      description: "A comprehensive data analytics dashboard with interactive charts, data visualization, and export capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      technologies: ["React", "D3.js", "Python", "Pandas"],
      liveUrl: "https://analytics-demo.netlify.app",
      githubUrl: "https://github.com/yourusername/analytics-tool",
      color: "from-indigo-500 to-purple-600"
    }
  ];

  useEffect(() => {
    if (isAutoRotating) {
      const interval = setInterval(() => {
        setCurrentFace((prev) => (prev + 1) % 6);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoRotating]);

  const rotateCube = (direction: 'next' | 'prev') => {
    setIsAutoRotating(false);
    if (direction === 'next') {
      setCurrentFace((prev) => (prev + 1) % 6);
    } else {
      setCurrentFace((prev) => (prev - 1 + 6) % 6);
    }
    
    // Resume auto-rotation after 10 seconds
    setTimeout(() => setIsAutoRotating(true), 10000);
  };

  const getRotation = () => {
    const rotations = [
      'rotateY(0deg)',
      'rotateY(-90deg)',
      'rotateY(-180deg)',
      'rotateY(-270deg)',
      'rotateX(-90deg)',
      'rotateX(90deg)'
    ];
    return rotations[currentFace];
  };

  const currentProject = projects[currentFace];

  return (
    <section id="projects" className="py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore my latest work through this interactive 3D showcase. Click the arrows or swipe to rotate the cube and discover different projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Cube */}
          <div className="flex justify-center">
            <div className="cube-container glow-pulse">
              <div 
                className="cube"
                style={{ transform: getRotation() }}
              >
                {projects.map((project, index) => (
                  <div 
                    key={project.id}
                    className={`cube-face cube-face-${
                      ['front', 'right', 'back', 'left', 'top', 'bottom'][index]
                    } bg-gradient-to-br ${project.color} p-6 flex flex-col justify-center items-center text-white`}
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-32 object-cover rounded-lg mb-4 opacity-90"
                    />
                    <h3 className="text-xl font-bold text-center mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {project.technologies.slice(0, 2).map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-white/20 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Rotation Controls */}
              <div className="absolute -left-16 top-1/2 transform -translate-y-1/2">
                <button
                  onClick={() => rotateCube('prev')}
                  className="p-3 bg-card border border-border rounded-full hover:bg-muted transition-colors shadow-lg"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              </div>
              <div className="absolute -right-16 top-1/2 transform -translate-y-1/2">
                <button
                  onClick={() => rotateCube('next')}
                  className="p-3 bg-card border border-border rounded-full hover:bg-muted transition-colors shadow-lg"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="card-glow">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${currentProject.color}`}></div>
              <h3 className="text-2xl font-bold">{currentProject.title}</h3>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {currentProject.description}
            </p>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {currentProject.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={currentProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero flex items-center justify-center"
              >
                <ExternalLink className="mr-2 w-4 h-4" />
                Live Demo
              </a>
              <a
                href={currentProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost flex items-center justify-center"
              >
                <Github className="mr-2 w-4 h-4" />
                View Code
              </a>
            </div>

            {/* Project Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentFace(index);
                    setIsAutoRotating(false);
                    setTimeout(() => setIsAutoRotating(true), 10000);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentFace ? 'bg-primary' : 'bg-muted hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCube;