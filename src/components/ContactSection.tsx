import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

// Initialize EmailJS
if (typeof window !== 'undefined') {
  emailjs.init("kzl_FXWWxplrXRy30");
}

const socialLinks = [
  { icon: Mail, label: "Email", href: "mailto:yukeshwaranreva@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/yukeshwaran-n-4b170b247" },
  { icon: Github, label: "GitHub", href: "https://github.com/yukeshwaran-N" },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const generateMessageId = () => {
    return `MSG_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const messageId = generateMessageId();

    try {
      // Validate email
      if (!isValidEmail(formData.email)) {
        toast({
          title: "Invalid Email",
          description: "Please enter a valid email address.",
          variant: "destructive",
        });
        return;
      }

      // Send notification to yourself
      const notificationParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        date_time: new Date().toLocaleString('en-IN', {
          timeZone: 'Asia/Kolkata',
          dateStyle: 'full',
          timeStyle: 'medium'
        }),
        message_id: messageId,
        to_email: 'yukeshwaranreva@gmail.com'
      };

      // Send notification email first
      const notificationResult = await emailjs.send(
        'service_j7e1s7j',
        'template_p08qyym',
        notificationParams,
        'kzl_FXWWxplrXRy30'
      );

      if (notificationResult.text === 'OK') {
        // Try to send auto-reply, but don't fail if it doesn't work
        try {
          const autoReplyParams = {
            from_name: formData.name,
            from_email: formData.email,
            original_message: formData.message,
            message_id: messageId,
            to_email: formData.email,
            reply_to: 'yukeshwaranreva@gmail.com'
          };

          await emailjs.send(
            'service_j7e1s7j',
            'template_vpse2d3',
            autoReplyParams,
            'kzl_FXWWxplrXRy30'
          );

          toast({
            title: "✅ Message Sent Successfully!",
            description: "I've received your message and sent you a confirmation email.",
          });
        } catch (autoReplyError) {
          // Auto-reply failed, but main message was sent
          console.warn('Auto-reply failed:', autoReplyError);
          toast({
            title: "✅ Message Received!",
            description: "I've got your message! (Confirmation email failed to send)",
          });
        }

        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error('Failed to send notification');
      }

    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to Send",
        description: "Please try again or contact me directly at yukeshwaranreva@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 bg-gradient-to-r from-glow-cyan via-glow-purple to-glow-magenta bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-glow-cyan to-glow-magenta rounded-full mb-4" />
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Interested in collaboration or have a project in mind? Let's connect and build something secure together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12 neon-glow-mixed"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name *
              </label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your full name"
                required
                disabled={isLoading}
                className="glass-card border-primary/30 focus:border-primary focus:neon-glow-cyan"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address *
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your.email@example.com"
                required
                disabled={isLoading}
                className="glass-card border-primary/30 focus:border-primary focus:neon-glow-cyan"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message *
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project, collaboration idea, or any inquiry..."
                required
                rows={6}
                disabled={isLoading}
                className="glass-card border-primary/30 focus:border-primary focus:neon-glow-cyan resize-none"
              />
            </div>

            <Button 
              type="submit" 
              variant="neon" 
              size="lg" 
              className="w-full group"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Sending Message...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </>
              )}
            </Button>
          </form>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-center text-muted-foreground mb-4">Or connect with me directly</p>
            <div className="flex justify-center gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 glass-card border-primary/30 hover:border-primary hover:neon-glow-cyan transition-all duration-300 rounded-lg group"
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;