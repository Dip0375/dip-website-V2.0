'use client'

import { Earth, Infinity, Instagram, Linkedin, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cyber-dark border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              {/* <Infinity className="h-5 w-5 text-cyber-accent" /> */}
              <Image width={50} height={50} src='/logo.png' alt="Dipnarayan Nandi" />
              <span className="font-bold text-lg">Infinite</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Professional cybersecurity expert with extensive experience in threat detection, 
              vulnerability assessment, and security architecture.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#skills" className="text-sm text-muted-foreground hover:text-cyber-accent transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/#certifications" className="text-sm text-muted-foreground hover:text-cyber-accent transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="text-sm text-muted-foreground hover:text-cyber-accent transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/#achievements" className="text-sm text-muted-foreground hover:text-cyber-accent transition-colors">
                  Achievements
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-cyber-accent transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cyber-accent" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-muted-foreground">dipnarayan.cse@gmail.com</span>
              </li>
              <li className="text-sm flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cyber-accent" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-muted-foreground">Dantan, WB, IN</span>
              </li>
            </ul>
            
            <div className="mt-6 flex space-x-4">
              <a href="https://github.com/Dip0375" target="_blank" className="text-muted-foreground hover:text-cyber-accent">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/dipnarayan-nandi-95b6a21b3/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="text-muted-foreground hover:text-cyber-accent">
               <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/infinite_cloud.ai?igsh=MXhjajk2Z25xcG45bQ==" target="_blank" className="text-muted-foreground hover:text-cyber-accent">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://medium.com/@dipnarayan.n" target="_blank" className="text-muted-foreground hover:text-cyber-accent">
                <Earth className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-10 border-t border-border pt-6">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {currentYear} CyberPortfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
