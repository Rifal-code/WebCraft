import { motion } from "framer-motion";
import {
  Globe,
  ShoppingCart,
  Rocket,
  Code,
  RefreshCw,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Company Profile",
    description:
      "Website profesional untuk menampilkan profil perusahaan, visi misi, dan layanan bisnis Anda.",
    features: ["Desain Modern", "SEO Friendly", "Mobile Responsive"],
  },
  {
    icon: ShoppingCart,
    title: "Toko Online (E-Commerce)",
    description:
      "Platform e-commerce lengkap dengan sistem pembayaran, keranjang belanja, dan manajemen produk.",
    features: ["Payment Gateway", "Dashboard Admin", "Inventory System"],
  },
  {
    icon: Rocket,
    title: "Landing Page Bisnis",
    description:
      "Landing page konversi tinggi untuk kampanye marketing, promosi produk, atau lead generation.",
    features: ["High Converting", "Fast Loading", "Analytics Ready"],
  },
  {
    icon: Code,
    title: "Web App / Sistem Informasi",
    description:
      "Aplikasi web custom sesuai kebutuhan bisnis seperti sistem manajemen, CRM, atau internal tools.",
    features: ["Custom Features", "Database Integration", "User Management"],
  },
  {
    icon: RefreshCw,
    title: "Redesign Website",
    description:
      "Perbarui tampilan website lama Anda menjadi lebih modern, cepat, dan user-friendly.",
    features: ["Modern UI/UX", "Performance Boost", "Brand Refresh"],
  },
  {
    icon: Wrench,
    title: "Maintenance Website",
    description:
      "Layanan pemeliharaan rutin untuk memastikan website Anda selalu berjalan optimal.",
    features: ["24/7 Monitoring", "Security Updates", "Backup Rutin"],
  },
];

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Layanan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Solusi Website untuk{" "}
            <span className="gradient-text">Setiap Kebutuhan</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Kami menyediakan berbagai layanan pembuatan website yang disesuaikan
            dengan kebutuhan bisnis Anda
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-card rounded-2xl p-6 lg:p-8 border border-border hover:border-primary/30 transition-all duration-300 card-hover"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
