import React from 'react';
import { FaInstagram, FaXTwitter, FaGithub, FaLinkedin } from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0D061F] to-[#2b2734] rounded-xl border-t text-gray-300 py-6 w-full">
      <div className="container mx-auto px-12 flex flex-col md:flex-row justify-between items-center">
        <div className='flex justify-between items-center gap-2'>
            <p className="text-sm">
                © 2025 Motion Art Clone, Inc. All rights reserved. 
            </p>
            <p className="text-lg font-serif">
               - By NV
            </p>
        </div>
        <div className="flex space-x-12 mr-10">
          {/* <a href="https://www.facebook.com/naveenva.danthuluri/" target='_blank' aria-label="Facebook" className="hover:text-white hover:scale-105">
            <FaFacebookF />
          </a> */}
          <a href="https://www.instagram.com/nv.2762__/" target='_blank' aria-label="Instagram" className="hover:text-white hover:scale-105">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Twitter/X" target='_blank' className="hover:text-white hover:scale-105">
            <FaXTwitter />
          </a>
          <a href="https://www.linkedin.com/in/danthuluri-naveen-varma-6766a6344/" target='_blank' aria-label="GitHub" className="hover:text-white hover:scale-105">
            <FaLinkedin />
          </a>
          <a href="https://github.com/NaveenV-27" target='_blank' aria-label="GitHub" className="hover:text-white hover:scale-105">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
