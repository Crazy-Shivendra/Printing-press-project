import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowLeft, Check, Sparkles, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export interface Template {
  id: string;
  name: string;
  category: string;
  image: string;
  price: number;
  popular?: boolean;
  tags: string[];
}

interface TemplateGalleryProps {
  serviceType: string;
  onBack: () => void;
  onSelectTemplate: (template: Template) => void;
}

const templates: Record<string, Template[]> = {
  'Wedding Cards': [
    {
      id: 'wed-1',
      name: 'Royal Elegance',
      category: 'Wedding Cards',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      price: 3.5,
      popular: true,
      tags: ['elegant', 'gold', 'premium'],
    },
    {
      id: 'wed-2',
      name: 'Floral Dreams',
      category: 'Wedding Cards',
      image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      price: 2.5,
      popular: true,
      tags: ['floral', 'romantic', 'pastel'],
    },
    {
      id: 'wed-3',
      name: 'Modern Minimalist',
      category: 'Wedding Cards',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      price: 2.0,
      tags: ['minimal', 'modern', 'clean'],
    },
    {
      id: 'wed-4',
      name: 'Traditional Ethnic',
      category: 'Wedding Cards',
      image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      price: 3.0,
      tags: ['ethnic', 'traditional', 'colorful'],
    },
    {
      id: 'wed-5',
      name: 'Vintage Romance',
      category: 'Wedding Cards',
      image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      price: 2.8,
      tags: ['vintage', 'classic', 'romantic'],
    },
    {
      id: 'wed-6',
      name: 'Luxury Gold',
      category: 'Wedding Cards',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      price: 4.0,
      popular: true,
      tags: ['luxury', 'gold', 'premium'],
    },
  ],
  'Visiting Cards': [
    {
      id: 'vc-1',
      name: 'Corporate Blue',
      category: 'Visiting Cards',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      price: 0.5,
      popular: true,
      tags: ['corporate', 'professional', 'blue'],
    },
    {
      id: 'vc-2',
      name: 'Creative Minimal',
      category: 'Visiting Cards',
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      price: 0.6,
      tags: ['minimal', 'creative', 'modern'],
    },
    {
      id: 'vc-3',
      name: 'Bold Black',
      category: 'Visiting Cards',
      image: 'https://images.unsplash.com/photo-1591280063444-d3c514eb6e13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      price: 0.7,
      popular: true,
      tags: ['bold', 'elegant', 'black'],
    },
    {
      id: 'vc-4',
      name: 'Gradient Modern',
      category: 'Visiting Cards',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      price: 0.8,
      tags: ['gradient', 'modern', 'colorful'],
    },
  ],
  'Posters': [
    {
      id: 'pos-1',
      name: 'Event Spectacular',
      category: 'Posters',
      image: 'https://images.unsplash.com/photo-1594122230689-45899d9e6f69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      price: 15,
      popular: true,
      tags: ['event', 'vibrant', 'colorful'],
    },
    {
      id: 'pos-2',
      name: 'Music Festival',
      category: 'Posters',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      price: 18,
      tags: ['music', 'festival', 'artistic'],
    },
    {
      id: 'pos-3',
      name: 'Corporate Event',
      category: 'Posters',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      price: 20,
      tags: ['corporate', 'professional', 'clean'],
    },
    {
      id: 'pos-4',
      name: 'Product Launch',
      category: 'Posters',
      image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      price: 22,
      popular: true,
      tags: ['product', 'modern', 'sleek'],
    },
  ],
  'Flex Printing': [
    {
      id: 'flex-1',
      name: 'Outdoor Banner',
      category: 'Flex Printing',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      price: 25,
      popular: true,
      tags: ['outdoor', 'durable', 'large'],
    },
    {
      id: 'flex-2',
      name: 'Shop Signage',
      category: 'Flex Printing',
      image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      price: 30,
      tags: ['signage', 'retail', 'vibrant'],
    },
    {
      id: 'flex-3',
      name: 'Event Backdrop',
      category: 'Flex Printing',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      price: 35,
      popular: true,
      tags: ['backdrop', 'event', 'large-format'],
    },
  ],
  'Brochures': [
    {
      id: 'bro-1',
      name: 'Tri-Fold Classic',
      category: 'Brochures',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      price: 1.5,
      popular: true,
      tags: ['tri-fold', 'classic', 'informative'],
    },
    {
      id: 'bro-2',
      name: 'Modern Catalog',
      category: 'Brochures',
      image: 'https://images.unsplash.com/photo-1568667256549-094345857637?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      price: 2.0,
      tags: ['catalog', 'modern', 'multi-page'],
    },
  ],
  'Custom Printing': [
    {
      id: 'cus-1',
      name: 'Custom Design',
      category: 'Custom Printing',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      price: 50,
      popular: true,
      tags: ['custom', 'unique', 'personalized'],
    },
  ],
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2
    }
  }
};

const item = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.85,
    rotateX: -10,
  },
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6
    }
  }
};

export function TemplateGallery({ serviceType, onBack, onSelectTemplate }: TemplateGalleryProps) {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [hoveredTemplate, setHoveredTemplate] = useState<string | null>(null);
  const serviceTemplates = templates[serviceType] || [];

  const handleSelectTemplate = (template: Template) => {
    setSelectedTemplate(template.id);
    setTimeout(() => {
      onSelectTemplate(template);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 -left-40 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 -right-40 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, -30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-400/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="ghost"
              onClick={onBack}
              className="mb-6 hover:bg-white/80 backdrop-blur-sm group border border-gray-200/50"
            >
              <motion.div
                animate={{ x: [0, -4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
              </motion.div>
              Back to Services
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-xl"
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-200/30 rounded-full px-4 py-2 mb-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="text-sm text-gray-700">Premium Templates</span>
            </motion.div>
            
            <h1 className="mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              {serviceType} Templates
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Choose from our curated collection of professional templates
            </p>

            {/* Stats */}
            <motion.div 
              className="flex gap-8 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5 text-white fill-white" />
                </div>
                <div>
                  <p className="text-2xl text-gray-900">{serviceTemplates.length}</p>
                  <p className="text-sm text-gray-500">Templates</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-2xl text-gray-900">100%</p>
                  <p className="text-sm text-gray-500">Customizable</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Templates Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {serviceTemplates.map((template, index) => (
            <motion.div
              key={template.id}
              variants={item}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              onHoverStart={() => setHoveredTemplate(template.id)}
              onHoverEnd={() => setHoveredTemplate(null)}
            >
              <Card
                className={`group cursor-pointer hover:shadow-2xl transition-all duration-500 overflow-hidden relative border-0 bg-white/80 backdrop-blur-sm ${
                  selectedTemplate === template.id ? 'ring-4 ring-blue-500 ring-offset-2' : ''
                }`}
                onClick={() => handleSelectTemplate(template)}
              >
                {/* Popular Badge */}
                {template.popular && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                  >
                    <Badge className="absolute top-4 right-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 border-0 shadow-lg">
                      <Star className="w-3 h-3 mr-1 fill-white" />
                      Popular
                    </Badge>
                  </motion.div>
                )}

                {/* Selected Indicator */}
                {selectedTemplate === template.id && (
                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="absolute top-4 left-4 z-10 w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-xl"
                  >
                    <Check className="h-6 w-6 text-white" />
                  </motion.div>
                )}

                {/* Image Container */}
                <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <motion.div
                    animate={{
                      scale: hoveredTemplate === template.id ? 1.15 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full"
                  >
                    <ImageWithFallback
                      src={template.image}
                      alt={template.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  {/* Gradient Overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredTemplate === template.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Sparkle Effects on Hover */}
                  {hoveredTemplate === template.id && (
                    <>
                      <motion.div
                        className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-white rounded-full"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                      />
                      <motion.div
                        className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white rounded-full"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                      />
                    </>
                  )}
                </div>

                <CardContent className="p-6">
                  <motion.h3 
                    className="mb-3 group-hover:text-blue-600 transition-colors"
                    animate={{
                      x: hoveredTemplate === template.id ? 5 : 0
                    }}
                  >
                    {template.name}
                  </motion.h3>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {template.tags.map((tag, tagIndex) => (
                      <motion.div
                        key={tag}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.1 + tagIndex * 0.05 + 0.3 }}
                      >
                        <Badge variant="secondary" className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-100">
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <motion.p 
                      className="text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                      animate={{
                        scale: hoveredTemplate === template.id ? 1.05 : 1
                      }}
                    >
                      ${template.price.toFixed(2)}
                    </motion.p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/30 hover:shadow-xl"
                      >
                        Select
                        <motion.span
                          animate={{ x: hoveredTemplate === template.id ? [0, 3, 0] : 0 }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="ml-1"
                        >
                          →
                        </motion.span>
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {serviceTemplates.length === 0 && (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-12 inline-block border border-white/40">
              <Sparkles className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-500 text-lg">
                Templates coming soon for {serviceType}
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
