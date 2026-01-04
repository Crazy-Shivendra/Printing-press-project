import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from './ui/sheet';
import { Button } from './ui/button';
import { useCart } from '../context/CartContext';
import { Trash2, ShoppingBag } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ScrollArea } from './ui/scroll-area';
import { Separator } from './ui/separator';
import { toast } from 'sonner';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { items, removeFromCart, clearCart } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error('Your cart is empty');
      return;
    }
    
    toast.success('Request submitted! We will contact you shortly to confirm your order.');
    clearCart();
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Your Cart ({items.length})
          </SheetTitle>
          <SheetDescription>
            Review your selected samples and customizations
          </SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center">
            <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
            <h3 className="mb-2">Your cart is empty</h3>
            <p className="text-gray-500 mb-6">Add some samples to get started</p>
            <Button onClick={onClose}>Browse Samples</Button>
          </div>
        ) : (
          <>
            <ScrollArea className="h-[calc(100vh-250px)] mt-6">
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="border rounded-lg p-4">
                    <div className="flex gap-4">
                      <div className="w-20 h-20 flex-shrink-0 rounded overflow-hidden">
                        <ImageWithFallback
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h4 className="line-clamp-1">{item.name}</h4>
                            <p className="text-sm text-gray-500">{item.category}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              removeFromCart(item.id);
                              toast.success('Item removed from cart');
                            }}
                          >
                            <Trash2 className="h-4 w-4 text-red-600" />
                          </Button>
                        </div>

                        <Separator className="my-2" />

                        {/* Customer Details */}
                        {item.customerDetails && (
                          <div className="text-sm space-y-1 mb-2">
                            <p><span className="text-gray-600">Name:</span> {item.customerDetails.name}</p>
                            <p><span className="text-gray-600">Email:</span> {item.customerDetails.email}</p>
                            <p><span className="text-gray-600">Phone:</span> {item.customerDetails.phone}</p>
                          </div>
                        )}

                        {/* Customization Details */}
                        {item.customization && (
                          <div className="text-sm space-y-1">
                            {item.customization.paperType && (
                              <p><span className="text-gray-600">Paper:</span> {item.customization.paperType}</p>
                            )}
                            {item.customization.size && (
                              <p><span className="text-gray-600">Size:</span> {item.customization.size}</p>
                            )}
                            {item.customization.finishing && (
                              <p><span className="text-gray-600">Finishing:</span> {item.customization.finishing}</p>
                            )}
                            {item.customization.quantity && (
                              <p><span className="text-gray-600">Quantity:</span> {item.customization.quantity}</p>
                            )}
                            {item.customization.customText && (
                              <p><span className="text-gray-600">Custom Text:</span> {item.customization.customText}</p>
                            )}
                            {item.customization.specialInstructions && (
                              <p><span className="text-gray-600">Instructions:</span> {item.customization.specialInstructions}</p>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t">
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    clearCart();
                    toast.success('Cart cleared');
                  }}
                >
                  Clear Cart
                </Button>
                <Button className="w-full" onClick={handleCheckout}>
                  Submit Request ({items.length} {items.length === 1 ? 'item' : 'items'})
                </Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
