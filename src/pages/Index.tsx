import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";
import business1 from "@/assets/business-1.jpg";
import ecommerce1 from "@/assets/ecommerce-1.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import education1 from "@/assets/education-1.jpg";
import health1 from "@/assets/health-1.jpg";
import travel1 from "@/assets/travel-1.jpg";
import tech1 from "@/assets/tech-1.jpg";
import restaurant1 from "@/assets/restaurant-1.jpg";
import vape1 from "@/assets/vape-1.jpg";
import pet1 from "@/assets/pet-1.jpg";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255, 0, 0, 0.5)";

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const categories = [
    {
      title: "Business / Company Websites",
      projects: [
        { name: "Corporate Solutions Inc", image: business1, desc: "Modern corporate website with dynamic features" },
        { name: "Tech Enterprises", image: business1, desc: "Professional business platform" },
        { name: "Global Trade Co", image: business1, desc: "International business website" },
        { name: "Consulting Firm", image: business1, desc: "Expert consulting services site" },
        { name: "Finance Group", image: business1, desc: "Financial services platform" },
      ],
    },
    {
      title: "eCommerce Websites",
      projects: [
        { name: "Fashion Store", image: ecommerce1, desc: "Trendy online clothing shop" },
        { name: "Electronics Hub", image: ecommerce1, desc: "Tech products marketplace" },
        { name: "Home Decor", image: ecommerce1, desc: "Interior design eCommerce" },
        { name: "Sports Gear", image: ecommerce1, desc: "Athletic equipment store" },
        { name: "Beauty Shop", image: ecommerce1, desc: "Cosmetics online store" },
      ],
    },
    {
      title: "Portfolio Websites",
      projects: [
        { name: "Creative Designer Portfolio", image: portfolio1, desc: "Stunning creative showcase" },
        { name: "Photographer Gallery", image: portfolio1, desc: "Professional photo portfolio" },
        { name: "Artist Showcase", image: portfolio1, desc: "Digital art exhibition site" },
        { name: "Freelancer Hub", image: portfolio1, desc: "Multi-service portfolio" },
        { name: "Developer Portfolio", image: portfolio1, desc: "Tech project showcase" },
      ],
    },
    {
      title: "Educational Websites",
      projects: [
        { name: "Online Learning Academy", image: education1, desc: "Comprehensive e-learning platform" },
        { name: "University Portal", image: education1, desc: "Higher education website" },
        { name: "Coding Bootcamp", image: education1, desc: "Programming training site" },
        { name: "Language School", image: education1, desc: "Language learning platform" },
        { name: "Kids Education", image: education1, desc: "Children's learning website" },
      ],
    },
    {
      title: "Health / Fitness Websites",
      projects: [
        { name: "Fitness Center", image: health1, desc: "Gym and workout platform" },
        { name: "Wellness Clinic", image: health1, desc: "Healthcare services website" },
        { name: "Yoga Studio", image: health1, desc: "Meditation and yoga site" },
        { name: "Nutrition Guide", image: health1, desc: "Diet and nutrition platform" },
        { name: "Personal Trainer", image: health1, desc: "Fitness coaching website" },
      ],
    },
    {
      title: "Travel / Tourism Websites",
      projects: [
        { name: "Vacation Bookings", image: travel1, desc: "Holiday planning platform" },
        { name: "Adventure Tours", image: travel1, desc: "Outdoor excursion website" },
        { name: "Hotel Reservations", image: travel1, desc: "Accommodation booking site" },
        { name: "Travel Agency", image: travel1, desc: "Full-service travel portal" },
        { name: "City Guide", image: travel1, desc: "Tourist destination website" },
      ],
    },
    {
      title: "Technology / Software Websites",
      projects: [
        { name: "SaaS Platform", image: tech1, desc: "Cloud software solution" },
        { name: "App Landing Page", image: tech1, desc: "Mobile app showcase" },
        { name: "Tech Startup", image: tech1, desc: "Innovative tech company site" },
        { name: "Software Agency", image: tech1, desc: "Development services platform" },
        { name: "AI Solutions", image: tech1, desc: "Artificial intelligence website" },
      ],
    },
    {
      title: "Restaurant Websites",
      projects: [
        { name: "Fine Dining", image: restaurant1, desc: "Upscale restaurant website" },
        { name: "Cafe & Bistro", image: restaurant1, desc: "Cozy cafe platform" },
        { name: "Food Delivery", image: restaurant1, desc: "Online ordering system" },
        { name: "Pizza House", image: restaurant1, desc: "Pizzeria website" },
        { name: "Sushi Bar", image: restaurant1, desc: "Japanese restaurant site" },
      ],
    },
    {
      title: "Vape Websites",
      projects: [
        { name: "Vape Shop", image: vape1, desc: "Vaping products store" },
        { name: "E-Liquid Hub", image: vape1, desc: "Vape juice marketplace" },
        { name: "Mod Store", image: vape1, desc: "Vape mods and accessories" },
        { name: "Cloud Chasers", image: vape1, desc: "Premium vape shop" },
        { name: "Vape Lounge", image: vape1, desc: "Vaping community site" },
      ],
    },
    {
      title: "Pet Clinic Websites",
      projects: [
        { name: "Vet Clinic", image: pet1, desc: "Veterinary services website" },
        { name: "Pet Hospital", image: pet1, desc: "Animal healthcare platform" },
        { name: "Pet Grooming", image: pet1, desc: "Pet care and grooming site" },
        { name: "Animal Shelter", image: pet1, desc: "Pet adoption website" },
        { name: "Pet Pharmacy", image: pet1, desc: "Online pet medications" },
      ],
    },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none opacity-30"
        style={{ zIndex: 0 }}
      />

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-morphism shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-orbitron font-bold text-primary glow-text">
            Harmain.dev
          </h1>
          <ul className="hidden md:flex space-x-8">
            <li>
              <a href="#home" className="hover:text-primary transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-primary transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#work" className="hover:text-primary transition-colors">
                Work
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary transition-colors">
                Contact
              </a>
            </li>
          </ul>
          <div className="md:hidden">
            <i className="fas fa-bars text-2xl text-primary"></i>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(255,0,0,0.3), rgba(0,0,0,0.9))",
        }}
      >
        <div className="absolute inset-0 animate-wave opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <div className="mb-8 animate-fade-up opacity-0" style={{ animationDelay: "0.2s" }}>
            <img
              src={profileImage}
              alt="Harmain Ali"
              className="w-48 h-48 rounded-full mx-auto border-4 border-primary glow-border-intense animate-rotate-slow"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-orbitron font-black animate-pop-up opacity-0" style={{ animationDelay: "0.4s" }}>
              <span className="glow-text">👋 Hi, I'm Harmain Ali</span>
            </h2>
            <p className="text-2xl md:text-4xl font-orbitron animate-pop-up opacity-0" style={{ animationDelay: "0.6s" }}>
              A Creative <span className="text-primary glow-text">Website Developer</span>
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0" style={{ animationDelay: "0.8s" }}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-orbitron text-lg px-8 py-6 rounded-xl glow-border animate-glow-pulse"
            >
              <a href="#work">View My Work</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-orbitron text-lg px-8 py-6 rounded-xl transition-all duration-300"
            >
              <a href="#contact">Hire Me</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-orbitron font-black text-center mb-16 glow-text">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <img
                src={profileImage}
                alt="Harmain Ali"
                className="w-64 h-64 rounded-2xl mx-auto transform rotate-3 hover:rotate-6 transition-transform duration-300 border-4 border-primary glow-border"
              />
            </div>

            <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="glass-morphism p-8 rounded-2xl transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-orbitron font-bold mb-4 text-primary">
                  Website Developer & Designer
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm Harmain Ali, a passionate web developer and designer specializing in creating stunning, 
                  modern websites that bring your vision to life. With expertise in cutting-edge technologies 
                  and a keen eye for design, I craft digital experiences that captivate and convert.
                </p>
              </div>

              <div className="glass-morphism p-6 rounded-2xl">
                <h4 className="text-xl font-orbitron font-bold mb-4 text-primary">Skills</h4>
                <div className="flex flex-wrap gap-3">
                  {["HTML", "CSS", "JavaScript", "React", "Firebase", "Tailwind", "Node.js", "TypeScript"].map(
                    (skill, idx) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-primary/20 border border-primary rounded-full text-sm font-medium animate-pop-up opacity-0"
                        style={{ animationDelay: `${0.1 * idx}s` }}
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Work Section */}
      <section id="work" className="relative py-24 px-6 bg-secondary/20">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl font-orbitron font-black text-center mb-4 glow-text">
            My <span className="text-primary">Work</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Explore my diverse portfolio across 10 specialized categories
          </p>

          {categories.map((category, catIdx) => (
            <div key={category.title} className="mb-20 animate-slide-up opacity-0" style={{ animationDelay: `${0.1 * catIdx}s` }}>
              <h3 className="text-3xl font-orbitron font-bold mb-8 text-primary">
                {catIdx + 1}. {category.title}
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.projects.map((project, idx) => (
                  <div
                    key={project.name}
                    className="glass-morphism rounded-2xl overflow-hidden transform hover:scale-105 hover:rotate-1 transition-all duration-300 group cursor-pointer"
                    style={{ animationDelay: `${0.05 * idx}s` }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div className="p-6">
                      <h4 className="text-xl font-orbitron font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.name}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-4">{project.desc}</p>

                      <Button
                        size="sm"
                        className="bg-primary hover:bg-primary/90 text-white font-orbitron w-full glow-border opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        View Demo <i className="fas fa-arrow-right ml-2"></i>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-orbitron font-black mb-8 glow-text">
            Let's Work <span className="text-primary">Together</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Ready to bring your web project to life? Get in touch and let's create something amazing!
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-orbitron text-lg px-8 py-6 rounded-xl glow-border animate-glow-pulse"
            >
              <i className="fas fa-envelope mr-2"></i> Email Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-orbitron text-lg px-8 py-6 rounded-xl"
            >
              <i className="fab fa-github mr-2"></i> GitHub
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-orbitron text-lg px-8 py-6 rounded-xl"
            >
              <i className="fab fa-linkedin mr-2"></i> LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 <span className="text-primary font-orbitron">Harmain.dev</span> — Built by Harmain Ali ❤️
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
