import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construct WhatsApp message
    const message = `Halo, saya tertarik untuk membuat website!

*Nama:* ${formData.name}
*Email:* ${formData.email}
*No. WhatsApp:* ${formData.phone}
*Jenis Website:* ${formData.projectType}
*Budget:* ${formData.budget}
*Pesan:* ${formData.message}`;

    const whatsappNumber = "6285600803744"; // Replace with actual number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Pesan Dikirim!",
      description:
        "Anda akan diarahkan ke WhatsApp untuk melanjutkan konsultasi.",
    });

    setIsSubmitting(false);

    // Reset form data setelah submit
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      budget: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Telepon",
      value: "+62 856-0080-3744",
      href: "https://wa.me/6285600803744",
    },
    {
      icon: Mail,
      label: "Email",
      value: "support@webcraft.id",
      href: "mailto:hello@webcraft.id",
    },
    {
      icon: MapPin,
      label: "Lokasi",
      value: "Pekalongan, Indonesia",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
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
            Hubungi Kami
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Siap Memulai <span className="gradient-text">Proyek Anda?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Konsultasikan kebutuhan website Anda secara gratis. Tim kami siap
            membantu mewujudkan website impian Anda.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-gradient-to-br from-primary to-primary-glow rounded-2xl p-6 lg:p-8 text-primary-foreground">
              <h3 className="text-xl font-bold mb-4">Konsultasi Gratis</h3>
              <p className="text-primary-foreground/80 mb-6">
                Hubungi kami sekarang untuk diskusi kebutuhan website Anda.
                Tidak ada biaya untuk konsultasi awal.
              </p>
              <Button
                variant="heroOutline"
                size="lg"
                className="w-full group"
                onClick={() =>
                  window.open("https://wa.me/6285600803744", "_blank")
                }
              >
                <MessageCircle className="w-5 h-5" />
                Chat via WhatsApp
              </Button>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      {item.label}
                    </div>
                    <div className="font-medium text-foreground">
                      {item.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-6 lg:p-8 border border-border space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Nama Lengkap *
                  </label>
                  <Input
                    name="name"
                    placeholder="Nama Anda"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Email *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    No. WhatsApp *
                  </label>
                  <Input
                    name="phone"
                    placeholder="08123456789"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Jenis Website
                  </label>
                  <Select
                    value={formData.projectType}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, projectType: value }))
                    }
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Pilih jenis website" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="company-profile">
                        Company Profile
                      </SelectItem>
                      <SelectItem value="ecommerce">
                        Toko Online / E-Commerce
                      </SelectItem>
                      <SelectItem value="landing-page">Landing Page</SelectItem>
                      <SelectItem value="web-app">Web Application</SelectItem>
                      <SelectItem value="redesign">Redesign Website</SelectItem>
                      <SelectItem value="other">Lainnya</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Estimasi Budget
                </label>
                <Select
                  value={formData.budget}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, budget: value }))
                  }
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Pilih range budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="800-1jt">Rp 800 - 1 juta</SelectItem>
                    <SelectItem value="1-2jt">Rp 1 - 2 Juta</SelectItem>
                    <SelectItem value="2-5jt">Rp 2 - 5 Juta</SelectItem>
                    <SelectItem value=">5jt">Lebih dari Rp 5 Juta</SelectItem>
                    <SelectItem value="discuss">Diskusikan Nanti</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Detail Proyek
                </label>
                <Textarea
                  name="message"
                  placeholder="Ceritakan tentang proyek website yang Anda butuhkan..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="xl"
                className="w-full group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Mengirim..."
                ) : (
                  <>
                    Kirim ke Admin
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Dengan mengirim form ini, Anda akan diarahkan ke WhatsApp untuk
                konsultasi lebih lanjut
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
