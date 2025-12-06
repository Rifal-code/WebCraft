import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const floatingElements = [
    { icon: Globe, delay: 0, x: "10%", y: "20%" },
    { icon: Zap, delay: 0.5, x: "85%", y: "30%" },
    { icon: Sparkles, delay: 1, x: "15%", y: "70%" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_hsla(220,80%,50%,0.15)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,_hsla(260,80%,55%,0.15)_0%,_transparent_50%)]" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsla(0,0%,100%,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsla(0,0%,100%,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating Elements */}
      {floatingElements.map((item, index) => (
        <motion.div
          key={index}
          className="absolute hidden lg:block"
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ delay: item.delay + 0.5, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, delay: item.delay }}
            className="w-12 h-12 rounded-2xl bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center"
          >
            <item.icon className="w-6 h-6 text-primary-glow" />
          </motion.div>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary-glow mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">
              Jasa Pembuatan Website Profesional
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6"
          >
            Wujudkan{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-glow via-accent to-primary-glow">
              Website Impian
            </span>{" "}
            Bisnis Anda
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Kami membantu bisnis, UMKM, dan personal brand Anda memiliki website
            profesional yang modern, cepat, dan responsif dengan harga
            terjangkau.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              variant="hero"
              size="xl"
              onClick={() => handleScroll("#contact")}
              className="group"
            >
              Buat Website Sekarang
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() => handleScroll("#portfolio")}
            >
              Lihat Portfolio
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 sm:gap-8 mt-16 max-w-xl mx-auto"
          >
            {[
              { value: "100+", label: "Proyek Selesai" },
              { value: "50+", label: "Klien Puas" },
              { value: "5+", label: "Tahun Pengalaman" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-glow">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-primary-foreground/60 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;