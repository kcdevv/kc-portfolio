
import React from 'react';
import ContactForm from '@/components/ContactForm';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-primary" size={20} />,
      label: "Email",
      value: "krishnachaitanya@example.com",
      link: "mailto:krishnachaitanya@example.com"
    },
    {
      icon: <Phone className="text-primary" size={20} />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="text-primary" size={20} />,
      label: "Location",
      value: "San Francisco, CA",
      link: null
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={20} />,
      url: "https://github.com/"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      url: "https://linkedin.com/"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 bg-accent rounded-full text-sm font-medium text-primary mb-4 animate-fade-in">
            Get In Touch
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Contact Me
          </h1>
          <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Have a project in mind or want to chat? Send me a message!
          </p>
        </div>
        
        <div className="grid md:grid-cols-12 gap-8 max-w-6xl mx-auto">
          <div className="md:col-span-5 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="glass-card rounded-xl p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-5 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">{item.label}</p>
                      {item.link ? (
                        <a 
                          href={item.link}
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div>
                <h4 className="text-sm text-muted-foreground mb-3">Follow me on</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-accent hover:bg-accent/70 flex items-center justify-center transition-colors"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-7 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
