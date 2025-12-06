import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const portfolioItems = [
  {
    id: 1,
    title: "TechCorp Company Profile",
    category: "Company Profile",
    description:
      "Website company profile modern untuk perusahaan teknologi dengan animasi interaktif dan desain futuristik.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
  },
  {
    id: 2,
    title: "FashionStore E-Commerce",
    category: "E-Commerce",
    description:
      "Platform toko online fashion dengan fitur cart, wishlist, dan integrasi payment gateway.",
    tech: ["Next.js", "Supabase", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
  },
  {
    id: 3,
    title: "StartupX Landing Page",
    category: "Landing Page",
    description:
      "Landing page high-converting untuk startup fintech dengan fokus pada lead generation.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
  },
  {
    id: 4,
    title: "RestoPOS System",
    category: "Web App",
    description:
      "Sistem POS berbasis web untuk restoran dengan manajemen pesanan dan laporan real-time.",
    tech: ["React", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop",
  },
  {
    id: 5,
    title: "EduLearn Platform",
    category: "Web App",
    description:
      "Platform pembelajaran online dengan fitur video streaming, quiz, dan progress tracking.",
    tech: ["Next.js", "Prisma", "AWS"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop",
  },
  {
    id: 6,
    title: "PropertyHub Listing",
    category: "Company Profile",
    description:
      "Website listing properti dengan fitur pencarian advanced dan virtual tour integration.",
    tech: ["React", "Firebase", "Google Maps API"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
  },
];

const categories = ["Semua", "Company Profile", "E-Commerce", "Landing Page", "Web App"];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [selectedProject, setSelectedProject] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems = activeCategory === "Semua"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory);

  const handleNext = () => {
    if (!selectedProject) return;
    const currentIndex = filteredItems.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedProject(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedProject) return;
    const currentIndex = filteredItems.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedProject(filteredItems[prevIndex]);
  };

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Proyek yang Telah{" "}
            <span className="gradient-text">Kami Selesaikan</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Lihat berbagai proyek website yang telah kami kerjakan untuk klien
            dari berbagai industri
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-muted-foreground hover:bg-secondary border border-border"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(item)}
                className="group cursor-pointer"
              >
                <div className="relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 card-hover">
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <span className="text-primary-foreground font-medium flex items-center gap-2">
                        Lihat Detail
                        <ExternalLink className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-3">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {item.tech.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>

              {/* Image */}
              <div className="aspect-video">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover rounded-t-2xl"
                />
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">
                    Teknologi yang Digunakan
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => {
                    setSelectedProject(null);
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Buat Website Serupa
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;