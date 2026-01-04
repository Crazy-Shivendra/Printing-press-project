import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowLeft, ShoppingCart, Download, Edit } from 'lucide-react';
import { motion } from 'motion/react';
import { Template } from './TemplateGallery';
import { CustomizationData } from './TemplateCustomization';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

interface TemplatePreviewProps {
  template: Template;
  customizationData: CustomizationData;
  onBack: () => void;
  onEdit: () => void;
  onClose: () => void;
}

export function TemplatePreview({
  template,
  customizationData,
  onBack,
  onEdit,
  onClose,
}: TemplatePreviewProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const totalPrice = template.price * (customizationData.quantity || 1);
    
    addToCart({
      id: `${template.id}-${Date.now()}`,
      name: template.name,
      category: template.category,
      price: totalPrice,
      quantity: customizationData.quantity || 1,
      image: template.image,
      customization: customizationData,
    });

    toast.success('Added to cart successfully!');
    onClose();
  };

  const renderPreviewContent = () => {
    switch (template.category) {
      case 'Wedding Cards':
        return (
          <div className="text-center space-y-8 p-12">
            <div className="space-y-2">
              <p className="text-sm text-gray-500 uppercase tracking-widest">You Are Invited To The Wedding Of</p>
              <h2 className="text-5xl font-serif bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                {customizationData.brideName || 'Bride Name'}
              </h2>
              <p className="text-3xl text-gray-400">&</p>
              <h2 className="text-5xl font-serif bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {customizationData.groomName || 'Groom Name'}
              </h2>
            </div>

            <div className="space-y-1">
              <p className="text-lg text-gray-700">
                {customizationData.weddingDate ? new Date(customizationData.weddingDate).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                }) : 'Wedding Date'}
              </p>
              <p className="text-lg text-gray-700">{customizationData.venue || 'Venue Name'}</p>
            </div>

            {customizationData.message && (
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-gray-600 italic">{customizationData.message}</p>
              </div>
            )}
          </div>
        );

      case 'Visiting Cards':
        return (
          <div className="space-y-6 p-8">
            <div>
              <h2 className="text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {customizationData.fullName || 'Your Name'}
              </h2>
              <p className="text-lg text-gray-600">{customizationData.jobTitle || 'Job Title'}</p>
            </div>

            <div className="space-y-2 text-gray-700">
              <p className="font-semibold text-xl">{customizationData.company || 'Company Name'}</p>
              <div className="space-y-1 text-sm">
                <p>{customizationData.phone || '+1 (555) 123-4567'}</p>
                <p>{customizationData.email || 'email@example.com'}</p>
                {customizationData.website && <p>{customizationData.website}</p>}
                {customizationData.address && <p>{customizationData.address}</p>}
              </div>
            </div>
          </div>
        );

      case 'Posters':
        return (
          <div className="space-y-8 p-12 text-center">
            <div>
              <h2 className="text-5xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                {customizationData.eventName || 'Event Name'}
              </h2>
              <p className="text-xl text-gray-600">{customizationData.description || 'Event description goes here'}</p>
            </div>

            <div className="space-y-2 text-lg text-gray-700">
              <p>
                <span className="font-semibold">Date:</span>{' '}
                {customizationData.eventDate ? new Date(customizationData.eventDate).toLocaleDateString() : 'Event Date'}
              </p>
              <p>
                <span className="font-semibold">Time:</span> {customizationData.eventTime || 'Event Time'}
              </p>
              <p>
                <span className="font-semibold">Venue:</span> {customizationData.eventVenue || 'Venue Location'}
              </p>
            </div>
          </div>
        );

      case 'Flex Printing':
        return (
          <div className="space-y-8 p-12 text-center">
            <h2 className="text-6xl bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              {customizationData.businessName || 'Business Name'}
            </h2>
            <p className="text-2xl text-gray-700">{customizationData.tagline || 'Your Tagline Here'}</p>
            <div className="mt-8 text-lg text-gray-600 whitespace-pre-line">
              {customizationData.contactInfo || 'Contact Information'}
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-8 p-12">
            <h2 className="text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Custom Design Preview
            </h2>
            <p className="text-gray-600">{customizationData.description || 'Your custom design description'}</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" onClick={onBack} className="mb-4 hover:bg-blue-50">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-2 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Preview Your Design
            </h1>
            <p className="text-xl text-gray-600">
              Review your customized {template.name} before adding to cart
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Preview Card */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="overflow-hidden shadow-2xl">
              <CardContent className="p-0">
                {/* Template Background */}
                <div
                  className="relative min-h-[600px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${template.image})` }}
                >
                  <div className="absolute inset-0 bg-white/95 backdrop-blur-sm">
                    {renderPreviewContent()}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-4 flex gap-4">
              <Button
                variant="outline"
                size="lg"
                onClick={onEdit}
                className="flex-1"
              >
                <Edit className="mr-2 h-5 w-5" />
                Edit Details
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex-1"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Preview
              </Button>
            </div>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="sticky top-24">
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="mb-4">Order Summary</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Template</span>
                      <span className="font-semibold">{template.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Category</span>
                      <Badge variant="secondary">{template.category}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Paper Type</span>
                      <span className="capitalize">{customizationData.paperType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Finishing</span>
                      <span className="capitalize">{customizationData.finishing}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Quantity</span>
                      <span>{customizationData.quantity}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Unit Price</span>
                    <span>${template.price.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Quantity</span>
                    <span>× {customizationData.quantity}</span>
                  </div>
                  <div className="flex justify-between text-lg pt-3 border-t">
                    <span className="font-semibold">Total</span>
                    <span className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      ${((template.price || 0) * (customizationData.quantity || 1)).toFixed(2)}
                    </span>
                  </div>
                </div>

                {customizationData.specialInstructions && (
                  <div className="pt-6 border-t">
                    <p className="text-sm text-gray-600 mb-2">Special Instructions:</p>
                    <p className="text-sm bg-gray-50 p-3 rounded-lg">
                      {customizationData.specialInstructions}
                    </p>
                  </div>
                )}

                <Button
                  onClick={handleAddToCart}
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  You can review and modify your order in the cart
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
