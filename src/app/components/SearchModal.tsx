import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Input } from './ui/input';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const allProducts = [
  {
    id: '1',
    name: 'Elegant Wedding Card',
    category: 'Wedding Cards',
    image: 'https://images.unsplash.com/photo-1627618999952-6d9ea355d679?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwaW52aXRhdGlvbiUyMGNhcmRzfGVufDF8fHx8MTc2NjA4MDMxNnww&ixlib=rb-4.1.0&q=80&w=1080',
    price: 'From $2.50/card',
    tags: ['wedding', 'invitation', 'elegant', 'premium'],
  },
  {
    id: '2',
    name: 'Professional Business Card',
    category: 'Visiting Cards',
    image: 'https://images.unsplash.com/photo-1579642984744-4dd0fe83c38c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNhcmRzJTIwcHJpbnRpbmd8ZW58MXx8fHwxNzY2MDQ0NjYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    price: 'From $0.50/card',
    tags: ['business', 'corporate', 'professional', 'visiting'],
  },
  {
    id: '3',
    name: 'Vibrant Event Poster',
    category: 'Posters',
    image: 'https://images.unsplash.com/photo-1744057847940-85b1a5c09229?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3N0ZXIlMjBkZXNpZ24lMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjYwNDAwNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    price: 'From $15/poster',
    tags: ['poster', 'event', 'marketing', 'colorful'],
  },
  {
    id: '4',
    name: 'Large Format Flex Banner',
    category: 'Flex Printing',
    image: 'https://images.unsplash.com/photo-1656784095237-3fcb8f5971b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmludGluZyUyMHByZXNzJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzY2MDgwMzE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    price: 'From $25/sq ft',
    tags: ['banner', 'flex', 'outdoor', 'advertising'],
  },
  {
    id: '5',
    name: 'Wedding Invitation Suite',
    category: 'Wedding Cards',
    image: 'https://images.unsplash.com/photo-1627618999952-6d9ea355d679?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwaW52aXRhdGlvbiUyMGNhcmRzfGVufDF8fHx8MTc2NjA4MDMxNnww&ixlib=rb-4.1.0&q=80&w=1080',
    price: 'From $3.00/card',
    tags: ['wedding', 'suite', 'luxury'],
  },
  {
    id: '6',
    name: 'Marketing Brochure',
    category: 'Brochures',
    image: 'https://images.unsplash.com/photo-1579642984744-4dd0fe83c38c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNhcmRzJTIwcHJpbnRpbmd8ZW58MXx8fHwxNzY2MDQ0NjYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    price: 'From $1.50/piece',
    tags: ['brochure', 'marketing', 'catalog'],
  },
];

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = searchQuery.trim()
    ? allProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : allProducts;

  const handleProductClick = (productId: string) => {
    // Navigate to samples section
    const element = document.getElementById('samples');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh] p-0">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle>Search Products</DialogTitle>
          <DialogDescription className="sr-only">
            Search for products including wedding cards, posters, business cards, and more
          </DialogDescription>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search for wedding cards, posters, business cards..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-10 h-12 text-lg border-2 focus:border-blue-500"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        </DialogHeader>

        <div className="px-6 pb-6 overflow-y-auto max-h-[calc(80vh-120px)]">
          {searchQuery && (
            <p className="text-sm text-gray-500 mb-4">
              Found {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''}
            </p>
          )}

          <AnimatePresence mode="wait">
            {filteredProducts.length > 0 ? (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleProductClick(product.id)}
                    className="flex gap-4 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors border border-gray-100 hover:border-blue-200"
                  >
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="line-clamp-1 mb-1">{product.name}</h4>
                      <Badge variant="secondary" className="mb-2 text-xs">
                        {product.category}
                      </Badge>
                      <p className="text-sm text-blue-600">{product.price}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="mb-2 text-gray-900">No results found</h3>
                <p className="text-gray-500">
                  Try searching for "wedding cards", "posters", or "business cards"
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
}