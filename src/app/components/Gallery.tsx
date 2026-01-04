import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { useState, useRef } from 'react';

const galleryItems = [
  {
    image: 'https://images.unsplash.com/photo-1627618999952-6d9ea355d679?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwaW52aXRhdGlvbiUyMGNhcmRzfGVufDF8fHx8MTc2NjA4MDMxNnww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Wedding Cards',
    category: 'Invitations',
    color: 'from-pink-500 to-rose-500',
  },
  {
    image: 'https://images.unsplash.com/photo-1579642984744-4dd0fe83c38c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNhcmRzJTIwcHJpbnRpbmd8ZW58MXx8fHwxNzY2MDQ0NjYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Business Cards',
    category: 'Corporate',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    image: 'https://images.unsplash.com/photo-1744057847940-85b1a5c09229?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3N0ZXIlMjBkZXNpZ24lMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjYwNDAwNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Event Posters',
    category: 'Marketing',
    color: 'from-purple-500 to-indigo-500',
  },
];

export function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  return (
    <section ref={sectionRef} id="gallery" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration with parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"
          style={{ y: y1 }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"
          style={{ y: y2 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          style={{ opacity, scale }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            className="inline-block px-4 py-1.5 mb-4 text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            Portfolio
          </motion.span>
          <motion.h2 
            className="mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Our Featured Work
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Explore our portfolio of quality printing projects that showcase our excellence
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                delay: index * 0.15,
                duration: 0.7,
                type: "spring",
                stiffness: 80,
                damping: 15
              }}
              whileHover={{ y: -15, rotateY: 5, transition: { duration: 0.4 } }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              style={{ perspective: 1000 }}
            >
              <motion.div 
                className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative h-80 overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      scale: hoveredIndex === index ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Colored gradient on hover */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} mix-blend-overlay`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 0.4 : 0 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Category badge */}
                  <motion.div 
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-lg"
                    initial={{ x: 30, opacity: 0, rotate: 10 }}
                    whileInView={{ x: 0, opacity: 1, rotate: 0 }}
                    transition={{ delay: index * 0.15 + 0.4, type: "spring" }}
                  >
                    <span className={`text-sm bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                      {item.category}
                    </span>
                  </motion.div>

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ 
                        y: hoveredIndex === index ? 0 : 20,
                        opacity: hoveredIndex === index ? 1 : 0 
                      }}
                      transition={{ duration: 0.3 }}
                      className="mb-4"
                    >
                      <div className="flex items-center gap-2 text-white/90 mb-2">
                        <Sparkles className="h-4 w-4" />
                        <span className="text-sm">Premium Quality</span>
                      </div>
                    </motion.div>
                    
                    <div className="text-white">
                      <motion.h3 
                        className="text-white mb-2"
                        animate={{
                          y: hoveredIndex === index ? -8 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.title}
                      </motion.h3>
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                        transition={{ duration: 0.4 }}
                        className={`h-1 w-20 bg-gradient-to-r ${item.color} rounded-full origin-left`}
                      />
                    </div>
                  </div>

                  {/* Sparkle effect on hover */}
                  {hoveredIndex === index && (
                    <>
                      <motion.div
                        className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-white rounded-full"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                      />
                      <motion.div
                        className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white rounded-full"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 }}
                      />
                    </>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}