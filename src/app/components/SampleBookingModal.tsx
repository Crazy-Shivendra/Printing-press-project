import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useCart } from '../context/CartContext';
import { Sample } from './Samples';
import { ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';

interface SampleBookingModalProps {
  sample: Sample;
  isOpen: boolean;
  onClose: () => void;
}

export function SampleBookingModal({ sample, isOpen, onClose }: SampleBookingModalProps) {
  const { addToCart } = useCart();
  const [formData, setFormData] = useState({
    // Customer Details
    name: '',
    email: '',
    phone: '',
    // Customization Options
    paperType: '',
    size: '',
    finishing: '',
    quantity: '',
    customText: '',
    specialInstructions: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error('Please fill in all customer details');
      return;
    }

    // Add to cart
    addToCart({
      id: sample.id,
      name: sample.name,
      category: sample.category,
      image: sample.image,
      quantity: 1,
      customization: {
        paperType: formData.paperType,
        size: formData.size,
        finishing: formData.finishing,
        quantity: formData.quantity,
        customText: formData.customText,
        specialInstructions: formData.specialInstructions,
      },
      customerDetails: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      },
    });

    toast.success('Sample added to cart!');
    
    // Reset form and close modal
    setFormData({
      name: '',
      email: '',
      phone: '',
      paperType: '',
      size: '',
      finishing: '',
      quantity: '',
      customText: '',
      specialInstructions: '',
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Book Sample - {sample.name}</DialogTitle>
          <DialogDescription>
            Fill in your details and customization preferences for this sample
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Customer Details Section */}
          <div className="space-y-4">
            <h3 className="border-b pb-2">Customer Details</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="+1 (555) 123-4567"
                required
              />
            </div>
          </div>

          {/* Customization Options Section */}
          <div className="space-y-4">
            <h3 className="border-b pb-2">Customization Options</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="paperType">Paper Type</Label>
                <Select value={formData.paperType} onValueChange={(value) => handleInputChange('paperType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select paper type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="matte">Matte</SelectItem>
                    <SelectItem value="glossy">Glossy</SelectItem>
                    <SelectItem value="premium">Premium Cardstock</SelectItem>
                    <SelectItem value="textured">Textured</SelectItem>
                    <SelectItem value="recycled">Recycled</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="size">Size</Label>
                <Select value={formData.size} onValueChange={(value) => handleInputChange('size', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard (3.5" x 2")</SelectItem>
                    <SelectItem value="square">Square (2.5" x 2.5")</SelectItem>
                    <SelectItem value="large">Large (4" x 3")</SelectItem>
                    <SelectItem value="custom">Custom Size</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="finishing">Finishing</Label>
                <Select value={formData.finishing} onValueChange={(value) => handleInputChange('finishing', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select finishing" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard</SelectItem>
                    <SelectItem value="laminated">Laminated</SelectItem>
                    <SelectItem value="embossed">Embossed</SelectItem>
                    <SelectItem value="foil">Gold/Silver Foil</SelectItem>
                    <SelectItem value="spot-uv">Spot UV</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity Needed</Label>
                <Select value={formData.quantity} onValueChange={(value) => handleInputChange('quantity', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select quantity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="50">50 pieces</SelectItem>
                    <SelectItem value="100">100 pieces</SelectItem>
                    <SelectItem value="250">250 pieces</SelectItem>
                    <SelectItem value="500">500 pieces</SelectItem>
                    <SelectItem value="1000">1000+ pieces</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="customText">Custom Text/Content</Label>
              <Textarea
                id="customText"
                value={formData.customText}
                onChange={(e) => handleInputChange('customText', e.target.value)}
                placeholder="Enter any custom text you want on the sample (e.g., names, dates, messages)"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="specialInstructions">Special Instructions</Label>
              <Textarea
                id="specialInstructions"
                value={formData.specialInstructions}
                onChange={(e) => handleInputChange('specialInstructions', e.target.value)}
                placeholder="Any additional requirements or special instructions"
                rows={3}
              />
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
