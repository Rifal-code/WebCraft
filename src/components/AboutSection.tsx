import { motion } from "framer-motion";
import {
  Zap,
  Palette,
  RefreshCw,
  Headphones,
  MessageSquare,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Pengerjaan Cepat",
    description:
      "Website siap dalam 7-14 hari kerja. Kami menghargai waktu Anda dan berkomitmen menyelesaikan proyek tepat waktu.",
  },
  {
    icon: Palette,
    title: "Desain Premium",
    description:
      "Desain modern, clean, dan profesional yang disesuaikan dengan identitas brand bisnis Anda.",
  },
  {
    icon: RefreshCw,
    title: "Revisi Fleksibel",
    description:
      "Kami memberikan kesempatan revisi hingga Anda benar-benar puas dengan hasil akhirnya.",
  },
  {
    icon: Headphones,
    title: "Support 24/7",
    description:
      "Tim support kami siap membantu Anda kapan saja. Respon cepat untuk setiap pertanyaan dan kendala.",
  },
  {
    icon: MessageSquare,
    title: "Konsultasi Gratis",
    description:
      "Diskusikan kebutuhan website Anda secara gratis sebelum memutuskan untuk menggunakan jasa kami.",
  },
  {
    icon: Shield,
    title: "Garansi Website",
    description:
      "Garansi maintenance dan perbaikan bug selama masa support. Website Anda aman bersama kami.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Mengapa Memilih Kami?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Partner Terpercaya untuk{" "}
              <span className="gradient-text">Website Anda</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Dengan pengalaman lebih dari 5 tahun di industri pembuatan
              website, kami telah membantu ratusan bisnis membangun presence
              online yang kuat. Kami tidak hanya membuat website, tapi juga
              membangun fondasi digital untuk kesuksesan bisnis Anda.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "100+", label: "Proyek Selesai" },
                { value: "98%", label: "Klien Puas" },
                { value: "24/7", label: "Support Ready" },
                { value: "5+", label: "Tahun Pengalaman" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-xl p-4 border border-border"
                >
                  <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-xl p-5 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;