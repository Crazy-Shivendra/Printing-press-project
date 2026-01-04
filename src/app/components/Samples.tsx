import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SampleBookingModal } from './SampleBookingModal';
import { Eye, Star } from 'lucide-react';
import { motion } from 'motion/react';

export interface Sample {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  price: string;
  rating: number;
  popular?: boolean;
}

const samples: Sample[] = [
  {
    id: '1',
    name: 'Elegant Wedding Card',
    category: 'Wedding Cards',
    description: 'Premium quality wedding invitation with gold foiling and embossed details',
    image: 'https://images.unsplash.com/photo-1627618999952-6d9ea355d679?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwaW52aXRhdGlvbiUyMGNhcmRzfGVufDF8fHx8MTc2NjA4MDMxNnww&ixlib=rb-4.1.0&q=80&w=1080',
    price: 'From $2.50/card',
    rating: 4.9,
    popular: true,
  },
  {
    id: '2',
    name: 'Professional Business Card',
    category: 'Visiting Cards',
    description: 'High-quality business cards with matte or glossy finish',
    image: 'https://images.unsplash.com/photo-1579642984744-4dd0fe83c38c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNhcmRzJTIwcHJpbnRpbmd8ZW58MXx8fHwxNzY2MDQ0NjYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    price: 'From $0.50/card',
    rating: 4.8,
    popular: true,
  },
  {
    id: '3',
    name: 'Vibrant Event Poster',
    category: 'Posters',
    description: 'Eye-catching posters in various sizes, perfect for events and promotions',
    image: 'https://images.unsplash.com/photo-1744057847940-85b1a5c09229?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3N0ZXIlMjBkZXNpZ24lMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjYwNDAwNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    price: 'From $15/poster',
    rating: 4.7,
  },
  {
    id: '4',
    name: 'Large Format Flex Banner',
    category: 'Flex Printing',
    description: 'Durable outdoor banners for advertising and events',
    image: 'https://images.unsplash.com/photo-1656784095237-3fcb8f5971b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmludGluZyUyMHByZXNzJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzY2MDgwMzE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    price: 'From $25/sq ft',
    rating: 4.9,
  },
];

export function Samples() {
  const [selectedSample, setSelectedSample] = useState<Sample | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookSample = (sample: Sample) => {
    setSelectedSample(sample);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="samples" className="py-20 bg-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full blur-3xl opacity-20"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.3, 0.2],
              x: [0, -30, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-pink-200 to-purple-200 rounded-full blur-3xl opacity-20"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.2, 0.3],
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              className="inline-block px-4 py-1.5 mb-4 text-sm bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              Popular Choices
            </motion.span>
            <motion.h2 
              className="mb-4 bg-gradient-to-r from-gray-900 via-purple-800 to-pink-800 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Browse Our Samples
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Explore our sample products and request customized samples for your needs
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {samples.map((sample, index) => (
              <motion.div
                key={sample.id}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg h-full bg-white">
                  <div className="relative h-48 overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.6 }}
                    >
                      <ImageWithFallback
                        src={sample.image}
                        alt={sample.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Popular badge */}
                    {sample.popular && (
                      <motion.div 
                        className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1 shadow-lg"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                      >
                        <Star className="h-3 w-3 fill-current" />
                        Popular
                      </motion.div>
                    )}
                    
                    {/* Category badge */}
                    <motion.div 
                      className="absolute top-3 right-3"
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs shadow-md">
                        {sample.category}
                      </span>
                    </motion.div>

                    {/* Quick view button */}
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                    >
                      <Button
                        size="sm"
                        className="bg-white text-gray-900 hover:bg-gray-100 shadow-xl"
                        onClick={() => handleBookSample(sample)}
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        Quick View
                      </Button>
                    </motion.div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{sample.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="line-clamp-1 group-hover:text-blue-600 transition-colors">
                      {sample.name}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {sample.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="mb-4">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {sample.price}
                      </span>
                    </div>
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                      <Button 
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300" 
                        onClick={() => handleBookSample(sample)}
                      >
                        Book Sample
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedSample && (
        <SampleBookingModal
          sample={selectedSample}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedSample(null);
          }}
        />
      )}
    </>
  );
}