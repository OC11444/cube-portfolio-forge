import { useState, useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'design';
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  const skills: Skill[] = [
    // Frontend
    { name: 'React', level: 95, icon: '⚛️', category: 'frontend' },
    { name: 'TypeScript', level: 90, icon: '🔷', category: 'frontend' },
    { name: 'JavaScript', level: 95, icon: '🟨', category: 'frontend' },
    { name: 'HTML/CSS', level: 95, icon: '🎨', category: 'frontend' },
    { name: 'Tailwind CSS', level: 90, icon: '💨', category: 'frontend' },
    { name: 'Next.js', level: 85, icon: '▲', category: 'frontend' },
    
    // Backend
    { name: 'Flask', level: 90, icon: '🌶️', category: 'backend' },
    { name: 'Python', level: 90, icon: '🐍', category: 'backend' },
    { name: 'Node.js', level: 85, icon: '🟢', category: 'backend' },
    { name: 'PostgreSQL', level: 80, icon: '🗄️', category: 'backend' },
    { name: 'MongoDB', level: 75, icon: '🍃', category: 'backend' },
    { name: 'REST APIs', level: 90, icon: '🔗', category: 'backend' },
    
    // Tools
    { name: 'Git', level: 90, icon: '📚', category: 'tools' },
    { name: 'Docker', level: 80, icon: '🐳', category: 'tools' },
    { name: 'AWS', level: 75, icon: '☁️', category: 'tools' },
    { name: 'Webpack', level: 75, icon: '📦', category: 'tools' },
    { name: 'Jest', level: 85, icon: '🧪', category: 'tools' },
    { name: 'VS Code', level: 95, icon: '💻', category: 'tools' },
    
    // Design
    { name: 'Figma', level: 80, icon: '🎨', category: 'design' },
    { name: 'UI/UX', level: 85, icon: '✨', category: 'design' },
    { name: 'Responsive Design', level: 95, icon: '📱', category: 'design' },
    { name: 'Adobe XD', level: 70, icon: '🎭', category: 'design' }
  ];

  const categories = {
    frontend: { title: 'Frontend', color: 'from-blue-500 to-cyan-500' },
    backend: { title: 'Backend', color: 'from-green-500 to-emerald-500' },
    tools: { title: 'Tools & DevOps', color: 'from-orange-500 to-red-500' },
    design: { title: 'Design', color: 'from-purple-500 to-pink-500' }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skills with staggered delay
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedSkills(prev => new Set([...prev, skill.name]));
            }, index * 100);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getSkillsByCategory = (category: keyof typeof categories) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across various technologies and tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(categories).map(([categoryKey, categoryInfo]) => (
            <div key={categoryKey} className="card-glow">
              <div className="flex items-center mb-6">
                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${categoryInfo.color} mr-3`}></div>
                <h3 className="text-xl font-semibold">{categoryInfo.title}</h3>
              </div>

              <div className="space-y-4">
                {getSkillsByCategory(categoryKey as keyof typeof categories).map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium text-sm">{skill.name}</span>
                      </div>
                      <span className="text-xs text-muted-foreground font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-2 bg-gradient-to-r ${categoryInfo.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: animatedSkills.has(skill.name) ? `${skill.level}%` : '0%',
                          transitionDelay: `${skills.indexOf(skill) * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Overview */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="card-glass">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div className="card-glass">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects Built</div>
            </div>
            <div className="card-glass">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="card-glass">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Dedication</div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Certifications & Learning</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="card-glass text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h4 className="font-semibold mb-2">React Developer Certification</h4>
              <p className="text-sm text-muted-foreground">Meta (Facebook) - 2023</p>
            </div>
            <div className="card-glass text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h4 className="font-semibold mb-2">Full-Stack Web Development</h4>
              <p className="text-sm text-muted-foreground">FreeCodeCamp - 2022</p>
            </div>
            <div className="card-glass text-center">
              <div className="text-4xl mb-4">☁️</div>
              <h4 className="font-semibold mb-2">AWS Cloud Practitioner</h4>
              <p className="text-sm text-muted-foreground">Amazon Web Services - 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;