import { Code, Database, Palette, Rocket } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Creating responsive, interactive user interfaces with React, TypeScript, and modern CSS frameworks."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development", 
      description: "Building robust server-side applications with Flask, Node.js, and database management systems."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Designing intuitive user experiences with attention to accessibility and user-centered design principles."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Optimizing applications for speed, SEO, and scalability using modern development practices."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">About Me</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate full-stack developer with over 3 years of experience crafting digital solutions 
                that make a difference. My journey started with a curiosity about how websites work, and it has 
                evolved into a love for creating seamless user experiences and robust backend systems.
              </p>
              <p>
                I specialize in modern web technologies, with a particular focus on React for frontend development 
                and Flask for backend services. I believe in writing clean, maintainable code and following best 
                practices that ensure scalability and performance.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community. I'm always excited to take on new challenges and 
                collaborate on innovative projects.
              </p>
            </div>

            <div className="mt-8">
              <a 
                href="#contact"
                className="btn-hero"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Let's Work Together
              </a>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="card-glass group hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">Experience Journey</h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                <div className="flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <div className="card-glass">
                      <h4 className="font-semibold text-lg">Senior Full-Stack Developer</h4>
                      <p className="text-primary">Tech Innovations Inc.</p>
                      <p className="text-sm text-muted-foreground">2022 - Present</p>
                      <p className="mt-2 text-muted-foreground">
                        Leading development of enterprise web applications using React and microservices architecture.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                  <div className="flex-1 pl-8"></div>
                </div>

                <div className="flex items-center">
                  <div className="flex-1 pr-8"></div>
                  <div className="relative flex items-center justify-center w-4 h-4 bg-secondary rounded-full border-4 border-background z-10"></div>
                  <div className="flex-1 text-left pl-8">
                    <div className="card-glass">
                      <h4 className="font-semibold text-lg">Frontend Developer</h4>
                      <p className="text-primary">Digital Solutions Ltd.</p>
                      <p className="text-sm text-muted-foreground">2021 - 2022</p>
                      <p className="mt-2 text-muted-foreground">
                        Developed responsive web applications and improved user experience across multiple platforms.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <div className="card-glass">
                      <h4 className="font-semibold text-lg">Junior Developer</h4>
                      <p className="text-primary">StartUp Ventures</p>
                      <p className="text-sm text-muted-foreground">2020 - 2021</p>
                      <p className="mt-2 text-muted-foreground">
                        Started my professional journey building web applications and learning modern development practices.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center w-4 h-4 bg-accent rounded-full border-4 border-background z-10"></div>
                  <div className="flex-1 pl-8"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;