import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Samples } from './components/Samples';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { TemplateGallery, Template } from './components/TemplateGallery';
import { TemplateCustomization, CustomizationData } from './components/TemplateCustomization';
import { TemplatePreview } from './components/TemplatePreview';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { Toaster } from './components/ui/sonner';
import { motion, AnimatePresence } from 'motion/react';

type ViewType = 'home' | 'templates' | 'customize' | 'preview';

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
    y: 20,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -20,
    transition: {
      duration: 0.3,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

const slideVariants = {
  initial: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  }),
};

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [customizationData, setCustomizationData] = useState<CustomizationData | null>(null);
  const [direction, setDirection] = useState(0);

  const handleServiceClick = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setDirection(1);
    setCurrentView('templates');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTemplateSelect = (template: Template) => {
    setSelectedTemplate(template);
    setDirection(1);
    setCurrentView('customize');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePreview = (data: CustomizationData) => {
    setCustomizationData(data);
    setDirection(1);
    setCurrentView('preview');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setDirection(-1);
    setCurrentView('home');
    setSelectedService('');
    setSelectedTemplate(null);
    setCustomizationData(null);
  };

  const handleBackToTemplates = () => {
    setDirection(-1);
    setCurrentView('templates');
    setSelectedTemplate(null);
    setCustomizationData(null);
  };

  const handleEditCustomization = () => {
    setDirection(-1);
    setCurrentView('customize');
  };

  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            {currentView === 'home' && (
              <motion.div
                key="home"
                custom={direction}
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Navigation />
                <Hero />
                <Services onServiceClick={handleServiceClick} />
                <Samples />
                <Gallery />
                <About />
                <Contact />
                <Footer />
              </motion.div>
            )}

            {currentView === 'templates' && (
              <motion.div
                key="templates"
                custom={direction}
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <TemplateGallery
                  serviceType={selectedService}
                  onBack={handleBackToHome}
                  onSelectTemplate={handleTemplateSelect}
                />
              </motion.div>
            )}

            {currentView === 'customize' && selectedTemplate && (
              <motion.div
                key="customize"
                custom={direction}
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <TemplateCustomization
                  template={selectedTemplate}
                  onBack={handleBackToTemplates}
                  onPreview={handlePreview}
                />
              </motion.div>
            )}

            {currentView === 'preview' && selectedTemplate && customizationData && (
              <motion.div
                key="preview"
                custom={direction}
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <TemplatePreview
                  template={selectedTemplate}
                  customizationData={customizationData}
                  onBack={handleBackToHome}
                  onEdit={handleEditCustomization}
                  onClose={handleBackToHome}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <Toaster />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}