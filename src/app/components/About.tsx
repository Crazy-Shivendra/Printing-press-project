import { CheckCircle2, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const features = [
  'High-Quality Materials',
  'Fast Turnaround Time',
  'Competitive Pricing',
  'Expert Design Assistance',
  'Custom Solutions',
  'Eco-Friendly Options',
];

function AnimatedCounter({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const duration = 2000;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;
      
      if (progress < 1) {
        setCount(Math.floor(end * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end]);

  return <span>{count}{suffix}</span>;
}

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decorations */}
      <motion.div 
        className="absolute top-10 right-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-10 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -80, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
          >
            <motion.span 
              className="inline-block px-4 py-1.5 mb-4 text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              Why Choose Us
            </motion.span>
            <motion.h2 
              className="mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Excellence in Every Print
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              With years of experience in the printing industry, we've built a reputation for 
              delivering exceptional quality and service. Our state-of-the-art equipment and 
              skilled team ensure that every project exceeds expectations.
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-3 group"
                  initial={{ opacity: 0, x: -30, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.08,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  >
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                  </motion.div>
                  <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="grid grid-cols-3 gap-8 pt-8 border-t"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="text-center">
                <div className="mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center justify-center gap-1">
                  <AnimatedCounter end={10} suffix="+" />
                </div>
                <p className="text-gray-600 text-sm">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center justify-center gap-1">
                  <AnimatedCounter end={5000} suffix="+" />
                </div>
                <p className="text-gray-600 text-sm">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center justify-center gap-1">
                  <AnimatedCounter end={50} suffix="k+" />
                </div>
                <p className="text-gray-600 text-sm">Projects Done</p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 80, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
          >
            <motion.div 
              className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.02, rotateY: -2 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated background pattern */}
              <motion.div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
                animate={{
                  backgroundPosition: ['0px 0px', '20px 20px'],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              <div className="relative z-10">
                <motion.div
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4"
                  whileHover={{ scale: 1.05 }}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm">Special Offer</span>
                </motion.div>
                
                <motion.h3 
                  className="mb-4 text-white"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  Get a Free Quote
                </motion.h3>
                <motion.p 
                  className="mb-6 text-blue-100"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  Tell us about your printing needs and we'll provide a competitive quote within 24 hours.
                </motion.p>
                
                <ul className="space-y-3">
                  {[
                    'No obligation quotation',
                    'Free design consultation',
                    'Sample prints available'
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                    >
                      <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  className="mt-6 pt-6 border-t border-white/20"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 }}
                >
                  <p className="text-sm text-blue-100 mb-2">Limited Time Offer</p>
                  <p className="text-2xl">20% OFF</p>
                  <p className="text-sm text-blue-100">on your first order</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}