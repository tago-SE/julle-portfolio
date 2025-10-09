import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/30 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-8 py-12 md:px-16 lg:px-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:contact@julianredaelli.com" className="hover:text-foreground transition-colors">
                  contact@julianredaelli.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+1234567890" className="hover:text-foreground transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Milan / Berlin</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Connect</h3>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                size="icon"
                className="border-primary/50 hover:bg-primary/20"
                asChild
              >
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                className="border-primary/50 hover:bg-primary/20"
                asChild
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* About */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Julian Redaelli</h3>
            <p className="text-sm text-muted-foreground">
              Designer & Visual Artist creating provocative imagery that challenges conventions 
              while maintaining an unmistakable sense of style.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Julian Redaelli. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
