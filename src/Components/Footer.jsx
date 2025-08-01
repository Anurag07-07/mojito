import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          <div className="flex flex-col items-center md:items-start">
            <img src="/images/logo.png" alt="Velvet Pour Logo" className="h-12 mb-4" />
            <p className="text-sm text-gray-400">
              Velvet Pour - Where every sip tells a story.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="hover:text-lime-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-lime-400">
                  About
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-lime-400">
                  Menu
                </a>
              </li>
              <li>
                <a href="#cocktails" className="hover:text-lime-400">
                  Cocktails
                </a>
              </li>
              <li>
                <a href="#art" className="hover:text-lime-400">
                  The Art
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media & Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4">Connect with Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="/images/instagram.png" alt="Facebook" className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="/images/twitter.png" alt="Twitter" className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/images/facebook.png" alt="Instagram" className="h-6 w-6" />
              </a>
            </div>
            <p className="text-sm">
              <a href="mailto:contact@velvetpour.com" className="hover:text-lime-400">
                contact@velvetpour.com
              </a>
            </p>
            <p className="text-sm">
              <a href="tel:+1234567890" className="hover:text-lime-400">
                +1 (234) 567-890
              </a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Velvet Pour. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;