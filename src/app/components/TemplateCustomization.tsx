import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowLeft, Eye } from 'lucide-react';
import { motion } from 'motion/react';
import { Template } from './TemplateGallery';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

export interface CustomizationData {
  // Wedding Cards
  brideName?: string;
  groomName?: string;
  weddingDate?: string;
  venue?: string;
  message?: string;
  
  // Visiting Cards
  fullName?: string;
  jobTitle?: string;
  company?: string;
  phone?: string;
  email?: string;
  website?: string;
  address?: string;
  
  // Posters
  eventName?: string;
  eventDate?: string;
  eventTime?: string;
  eventVenue?: string;
  description?: string;
  
  // Flex Printing
  businessName?: string;
  tagline?: string;
  contactInfo?: string;
  
  // Common
  paperType?: string;
  size?: string;
  finishing?: string;
  quantity?: number;
  specialInstructions?: string;
}

interface TemplateCustomizationProps {
  template: Template;
  onBack: () => void;
  onPreview: (data: CustomizationData) => void;
}

export function TemplateCustomization({ template, onBack, onPreview }: TemplateCustomizationProps) {
  const [formData, setFormData] = useState<CustomizationData>({
    paperType: 'standard',
    size: 'standard',
    finishing: 'matte',
    quantity: 100,
  });

  const handleInputChange = (field: keyof CustomizationData, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePreview = () => {
    onPreview(formData);
  };

  const renderFormFields = () => {
    switch (template.category) {
      case 'Wedding Cards':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="brideName">Bride's Name *</Label>
                <Input
                  id="brideName"
                  placeholder="Enter bride's name"
                  value={formData.brideName || ''}
                  onChange={(e) => handleInputChange('brideName', e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="groomName">Groom's Name *</Label>
                <Input
                  id="groomName"
                  placeholder="Enter groom's name"
                  value={formData.groomName || ''}
                  onChange={(e) => handleInputChange('groomName', e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="weddingDate">Wedding Date *</Label>
                <Input
                  id="weddingDate"
                  type="date"
                  value={formData.weddingDate || ''}
                  onChange={(e) => handleInputChange('weddingDate', e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="venue">Venue *</Label>
                <Input
                  id="venue"
                  placeholder="Enter venue name"
                  value={formData.venue || ''}
                  onChange={(e) => handleInputChange('venue', e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Special Message (Optional)</Label>
              <Textarea
                id="message"
                placeholder="Add a personal message..."
                value={formData.message || ''}
                onChange={(e) => handleInputChange('message', e.target.value)}
                rows={3}
              />
            </div>
          </>
        );

      case 'Visiting Cards':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName || ''}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="jobTitle">Job Title *</Label>
                <Input
                  id="jobTitle"
                  placeholder="Your position"
                  value={formData.jobTitle || ''}
                  onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company Name *</Label>
              <Input
                id="company"
                placeholder="Enter company name"
                value={formData.company || ''}
                onChange={(e) => handleInputChange('company', e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone *</Label>
                <Input
                  id="phone"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone || ''}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email || ''}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="website">Website (Optional)</Label>
                <Input
                  id="website"
                  placeholder="www.example.com"
                  value={formData.website || ''}
                  onChange={(e) => handleInputChange('website', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address (Optional)</Label>
                <Input
                  id="address"
                  placeholder="City, Country"
                  value={formData.address || ''}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                />
              </div>
            </div>
          </>
        );

      case 'Posters':
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="eventName">Event Name *</Label>
              <Input
                id="eventName"
                placeholder="Enter event name"
                value={formData.eventName || ''}
                onChange={(e) => handleInputChange('eventName', e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="eventDate">Event Date *</Label>
                <Input
                  id="eventDate"
                  type="date"
                  value={formData.eventDate || ''}
                  onChange={(e) => handleInputChange('eventDate', e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="eventTime">Event Time *</Label>
                <Input
                  id="eventTime"
                  type="time"
                  value={formData.eventTime || ''}
                  onChange={(e) => handleInputChange('eventTime', e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="eventVenue">Venue *</Label>
                <Input
                  id="eventVenue"
                  placeholder="Venue location"
                  value={formData.eventVenue || ''}
                  onChange={(e) => handleInputChange('eventVenue', e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Event Description *</Label>
              <Textarea
                id="description"
                placeholder="Describe your event..."
                value={formData.description || ''}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows={4}
                required
              />
            </div>
          </>
        );

      case 'Flex Printing':
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="businessName">Business Name *</Label>
              <Input
                id="businessName"
                placeholder="Enter business name"
                value={formData.businessName || ''}
                onChange={(e) => handleInputChange('businessName', e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tagline">Tagline *</Label>
              <Input
                id="tagline"
                placeholder="Your catchy tagline"
                value={formData.tagline || ''}
                onChange={(e) => handleInputChange('tagline', e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactInfo">Contact Information *</Label>
              <Textarea
                id="contactInfo"
                placeholder="Phone, email, website, address..."
                value={formData.contactInfo || ''}
                onChange={(e) => handleInputChange('contactInfo', e.target.value)}
                rows={3}
                required
              />
            </div>
          </>
        );

      default:
        return (
          <div className="space-y-2">
            <Label htmlFor="description">Project Description *</Label>
            <Textarea
              id="description"
              placeholder="Describe your requirements..."
              value={formData.description || ''}
              onChange={(e) => handleInputChange('description', e.target.value)}
              rows={4}
              required
            />
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
            Back to Templates
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-2 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Customize Your Design
            </h1>
            <p className="text-xl text-gray-600">
              Fill in the details below to personalize your {template.name}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Customization Details</span>
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 border-0">
                    {template.name}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Dynamic Form Fields */}
                {renderFormFields()}

                {/* Common Options */}
                <div className="pt-6 border-t">
                  <h3 className="mb-4">Printing Options</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="paperType">Paper Type</Label>
                      <Select
                        value={formData.paperType}
                        onValueChange={(value) => handleInputChange('paperType', value)}
                      >
                        <SelectTrigger id="paperType">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">Standard</SelectItem>
                          <SelectItem value="premium">Premium</SelectItem>
                          <SelectItem value="glossy">Glossy</SelectItem>
                          <SelectItem value="textured">Textured</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="finishing">Finishing</Label>
                      <Select
                        value={formData.finishing}
                        onValueChange={(value) => handleInputChange('finishing', value)}
                      >
                        <SelectTrigger id="finishing">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="matte">Matte</SelectItem>
                          <SelectItem value="glossy">Glossy</SelectItem>
                          <SelectItem value="laminated">Laminated</SelectItem>
                          <SelectItem value="embossed">Embossed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="quantity">Quantity</Label>
                      <Input
                        id="quantity"
                        type="number"
                        min="1"
                        value={formData.quantity}
                        onChange={(e) => handleInputChange('quantity', parseInt(e.target.value))}
                      />
                    </div>
                  </div>

                  <div className="space-y-2 mt-4">
                    <Label htmlFor="specialInstructions">Special Instructions (Optional)</Label>
                    <Textarea
                      id="specialInstructions"
                      placeholder="Any special requirements or notes..."
                      value={formData.specialInstructions || ''}
                      onChange={(e) => handleInputChange('specialInstructions', e.target.value)}
                      rows={3}
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-6 space-y-3">
                  <Button
                    onClick={handlePreview}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
                    size="lg"
                  >
                    <Eye className="mr-2 h-5 w-5" />
                    Preview & Continue
                  </Button>
                  <p className="text-sm text-gray-500 text-center">
                    You'll be able to review and edit before adding to cart
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Preview Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Template Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src={template.image}
                    alt={template.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="mb-1">{template.name}</h3>
                    <p className="text-sm opacity-90">{template.category}</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700 mb-2">
                    <span className="font-semibold">Base Price:</span> ${template.price} per unit
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Estimated Total:</span> $
                    {(template.price * (formData.quantity || 1)).toFixed(2)}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
