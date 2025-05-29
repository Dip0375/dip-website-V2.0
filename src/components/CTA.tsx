"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { sanityClient } from "@/lib/sanity";

const CTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { name, email, subject, message } = formData;

      // Validate email manually (optional)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        toast({
          title: "Invalid Email",
          description: "Please enter a valid email address.",
          variant: "destructive",
        });
        return;
      }

      // Send form data to Sanity
      await sanityClient.create({
        _type: "contact",
        name,
        email,
        subject,
        message,
        createdAt: new Date().toISOString(),
      });

      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. We'll get back to you soon.",
      });

      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Sanity submission error:", error);
      toast({
        title: "Submission Failed",
        description:
          "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    }
  };
  
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0 cyber-grid"></div>
      <div className="container px-6 md:px-10 max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Secure Your Digital Assets
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Ready to enhance your organization's security posture? Whether you
            need a comprehensive security assessment, implementation assistance,
            or strategic guidance, I'm here to help.
          </p>

          <div className="p-6 md:p-8 rounded-lg border border-cyber-accent/30 bg-cyber-accent/5 text-center">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-muted-foreground mb-6">
              Contact me to discuss how we can work together to secure your
              organization against evolving threats.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6 text-base">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 flex flex-col">
                  <Label
                    htmlFor="name"
                    className="text-slate-200 font-medium text-left"
                  >
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-emerald-400 focus:ring-emerald-400"
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-2 flex flex-col">
                  <Label
                    htmlFor="email"
                    className="text-slate-200 font-medium text-left"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-emerald-400 focus:ring-emerald-400"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div className="space-y-2 flex flex-col">
                <Label
                  htmlFor="subject"
                  className="text-slate-200 font-medium text-left"
                >
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-emerald-400 focus:ring-emerald-400"
                  placeholder="Security consultation inquiry"
                />
              </div>

              <div className="space-y-2 flex flex-col">
                <Label
                  htmlFor="message"
                  className="text-slate-200 font-medium text-left"
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-emerald-400 focus:ring-emerald-400 resize-none"
                  placeholder="Tell me about your security needs, current challenges, or specific areas where you'd like assistance..."
                />
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  className="bg-cyber-accent text-cyber-dark font-medium hover:bg-cyber-accent/90 transition-colors py-4 h-11 px-8 rounded-lg duration-200 transform shadow-lg"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
