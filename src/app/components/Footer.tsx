import { Printer, Facebook, Instagram, Twitter, Linkedin, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  const socialLinks = [
    { icon: Facebook, label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: Instagram, label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: Twitter, label: 'Twitter', color: 'hover:bg-blue-400' },
    { icon: Linkedin, label: 'LinkedIn', color: 'hover:bg-blue-700' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-gray-300 py-12 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <Printer className="h-6 w-6 text-white" />
              </div>
              <span className="text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                PrintShop Pro
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner for all printing needs. Quality, speed, and excellence in every project.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              {['Wedding Cards', 'Visiting Cards', 'Posters', 'Flex Printing', 'Brochures'].map((service, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5, color: '#ffffff' }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              {['About Us', 'Portfolio', 'Pricing', 'FAQ', 'Contact'].map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5, color: '#ffffff' }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-white mb-4">Connect With Us</h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href="#"
                    className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center ${social.color} transition-all duration-300 border border-white/10`}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
              <p className="text-sm text-gray-400 mb-2">Subscribe to Newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-white/10 border border-white/20 rounded px-3 py-1.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <motion.button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-1.5 rounded text-sm hover:from-blue-700 hover:to-purple-700 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="pt-8 border-t border-white/10 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="flex items-center justify-center gap-2 flex-wrap">
            <span>&copy; 2025 PrintShop Pro. All rights reserved.</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-500 fill-current" /> for quality printing
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
