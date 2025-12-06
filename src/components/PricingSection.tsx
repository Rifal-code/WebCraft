import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    name: "Basic",
    description: "Cocok untuk bisnis kecil & personal branding",
    price: "800",
    period: "ribu",
    popular: false,
    features: [
      "1-4 Halaman",
      "Desain Responsif",
      "Domain + Hosting 1 Tahun",
      "SSL Certificate",
      "Basic SEO",
      "Revisi 2x",
      "Support 1 Bulan",
      "Integrasi media sosial & Google Maps",
    ],
  },
  {
    name: "Standard",
    description: "Paling populer untuk UMKM & startup",
    price: "1.5",
    period: "juta",
    popular: true,
    features: [
      "5-8 Halaman",
      "Desain Custom Premium",
      "Domain + Hosting 1 Tahun",
      "SSL Certificate",
      "Advanced SEO",
      "Revisi 4x",
      "Support 3 Bulan",
      "Integrasi WhatsApp",
      "Google Analytics",
    ],
  },
  {
    name: "Premium",
    description: "Untuk bisnis yang butuh fitur lengkap",
    price: "5",
    period: "juta+",
    popular: false,
    features: [
      "10+ Halaman",
      "Desain Exclusive",
      "Domain + Hosting 1 Tahun",
      "SSL Certificate",
      "Full SEO Optimization",
      "Unlimited Revisi",
      "Support 6 Bulan",
      "Admin Dashboard",
      "Payment Gateway",
      "E-Commerce Features",
    ],
  },
];

const PricingSection = () => {
  const handleScroll = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-background">
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
            Paket Harga
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Pilih Paket yang{" "}
            <span className="gradient-text">Sesuai Kebutuhan</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Harga transparan tanpa biaya tersembunyi. Konsultasi gratis untuk
            menentukan paket terbaik
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-card rounded-2xl p-6 lg:p-8 border ${
                plan.popular
                  ? "border-primary shadow-xl scale-105"
                  : "border-border"
              } transition-all duration-300 hover:shadow-xl`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground text-sm font-medium shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    Paling Populer
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm text-muted-foreground">Rp</span>
                  <span className="text-4xl lg:text-5xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.popular
                          ? "bg-primary/20 text-primary"
                          : "bg-accent/20 text-accent"
                      }`}
                    >
                      <Check className="w-3 h-3" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant={plan.popular ? "hero" : "outline"}
                size="lg"
                className="w-full"
                onClick={handleScroll}
              >
                Pilih {plan.name}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          * Harga dapat disesuaikan berdasarkan kompleksitas dan fitur tambahan.
          Hubungi kami untuk penawaran khusus.
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
