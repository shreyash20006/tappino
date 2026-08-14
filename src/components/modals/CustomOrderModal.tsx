import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Check, Flame, Snowflake, MessageCircle, Copy } from 'lucide-react';
import type { Product } from '../../types';
import { brandConfig } from '../../config/brand';
import { BrandStrokes } from '../ui/BrandStrokes';

interface CustomOrderModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CustomOrderModal: React.FC<CustomOrderModalProps> = ({
  product,
  isOpen,
  onClose,
}) => {
  const [selectedSweetness, setSelectedSweetness] = useState<string>('');
  const [selectedIce, setSelectedIce] = useState<string>('');
  const [selectedMilk, setSelectedMilk] = useState<string>('');
  const [extraShot, setExtraShot] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);
  const [copied, setCopied] = useState<boolean>(false);

  // Set defaults when product changes
  React.useEffect(() => {
    if (product) {
      setSelectedSweetness(product.customization.sweetnessOptions[0] || 'Standard');
      setSelectedIce(product.customization.iceOptions[0] || 'Standard');
      setSelectedMilk(product.customization.milkOptions?.[0] || 'Standard Milk');
      setExtraShot(false);
      setQuantity(1);
      setCopied(false);
    }
  }, [product]);

  if (!product) return null;

  const orderSummaryText = `Hey Tappino! ❤️ I want to order from your website:
• Item: ${quantity}x ${product.name}
• Sweetness: ${selectedSweetness}
${product.temperature.includes('Iced') || product.temperature.includes('Cold') ? `• Ice: ${selectedIce}\n` : ''}• Milk: ${selectedMilk}
${extraShot ? '• Add-on: +1 Extra Espresso Shot\n' : ''}📍 Location for Pickup / Nagpur Area: IT Park, Nagpur

Please let me know when it's ready! 🧋✨`;

  const encodedDmText = encodeURIComponent(orderSummaryText);
  const instagramDmUrl = `${brandConfig.instagram.url}?text=${encodedDmText}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedDmText}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(orderSummaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-espresso-950/70 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl border border-maroon-800/15 bg-white p-6 sm:p-8 text-espresso-900 shadow-2xl backdrop-blur-xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-5 top-5 rounded-full p-2 text-espresso-700 transition-colors hover:bg-cream-100 hover:text-maroon-800"
              aria-label="Close modal"
              data-cursor="hover"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header Product Info */}
            <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center pb-6 border-b border-maroon-800/10">
              <img
                src={product.image}
                alt={product.name}
                className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl object-cover border border-maroon-800/15 shadow-warm-sm"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-maroon-800/10 px-2.5 py-0.5 text-[11px] font-bold text-maroon-800 uppercase tracking-wider">
                    {product.badge || product.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-espresso-700 font-medium">
                    {product.temperature.includes('Iced') ? (
                      <Snowflake className="h-3.5 w-3.5 text-tappinoBrown-500" />
                    ) : (
                      <Flame className="h-3.5 w-3.5 text-maroon-700" />
                    )}
                    {product.temperature}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-maroon-800 mt-1">
                  {product.name}
                </h3>
                <p className="text-tappinoBrown-600 font-mono text-sm font-bold">
                  {product.price}
                </p>
              </div>
            </div>

            {/* Customization Options */}
            <div className="mt-6 space-y-5 max-h-[50vh] overflow-y-auto pr-1">
              {/* Sweetness */}
              {product.customization.sweetnessOptions.length > 0 && (
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <BrandStrokes size="sm" color="#8B5A3C" />
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-tappinoBrown-600">
                      Sweetness Level
                    </label>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {product.customization.sweetnessOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setSelectedSweetness(opt)}
                        className={`rounded-xl border px-3 py-2 text-xs font-semibold transition-all ${
                          selectedSweetness === opt
                            ? 'border-maroon-800 bg-maroon-800 text-cream-50 shadow-maroon-sm'
                            : 'border-maroon-800/15 bg-cream-50 text-espresso-800 hover:border-maroon-800/40 hover:bg-cream-100'
                        }`}
                        data-cursor="hover"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Ice Level (if cold) */}
              {product.customization.iceOptions.length > 0 && (
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-tappinoBrown-600 mb-2">
                    Ice & Chill Intensity
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {product.customization.iceOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setSelectedIce(opt)}
                        className={`rounded-xl border px-3 py-2 text-xs font-semibold transition-all ${
                          selectedIce === opt
                            ? 'border-maroon-800 bg-maroon-800 text-cream-50 shadow-maroon-sm'
                            : 'border-maroon-800/15 bg-cream-50 text-espresso-800 hover:border-maroon-800/40 hover:bg-cream-100'
                        }`}
                        data-cursor="hover"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Milk Option */}
              {product.customization.milkOptions && product.customization.milkOptions.length > 0 && (
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-tappinoBrown-600 mb-2">
                    Milk Selection
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {product.customization.milkOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setSelectedMilk(opt)}
                        className={`rounded-xl border px-3 py-2 text-xs font-semibold transition-all ${
                          selectedMilk === opt
                            ? 'border-maroon-800 bg-maroon-800 text-cream-50 shadow-maroon-sm'
                            : 'border-maroon-800/15 bg-cream-50 text-espresso-800 hover:border-maroon-800/40 hover:bg-cream-100'
                        }`}
                        data-cursor="hover"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Extra Shot & Quantity */}
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center pt-2">
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={extraShot}
                    onChange={(e) => setExtraShot(e.target.checked)}
                    className="h-4 w-4 rounded border-maroon-800/30 text-maroon-800 focus:ring-maroon-800"
                  />
                  <span className="text-sm font-semibold text-espresso-800">
                    Add Extra Espresso Shot (+₹15) ☕
                  </span>
                </label>

                <div className="flex items-center gap-3 bg-cream-100 border border-maroon-800/15 rounded-xl px-3 py-1.5 shadow-inner">
                  <span className="text-xs font-mono uppercase text-tappinoBrown-600 font-bold">Qty:</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-6 w-6 rounded-lg bg-white text-espresso-900 flex items-center justify-center font-bold hover:bg-cream-200 border border-maroon-800/10 shadow-sm"
                  >
                    -
                  </button>
                  <span className="font-mono font-bold text-sm w-4 text-center text-maroon-800">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-6 w-6 rounded-lg bg-white text-espresso-900 flex items-center justify-center font-bold hover:bg-cream-200 border border-maroon-800/10 shadow-sm"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Actions & Instant DM Links */}
            <div className="mt-8 pt-6 border-t border-maroon-800/10 flex flex-col sm:flex-row gap-3 items-center justify-between">
              <button
                onClick={handleCopy}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-maroon-800/20 bg-cream-50 px-4 py-3 text-xs font-mono font-bold text-espresso-800 hover:bg-cream-100 transition-colors shadow-sm"
                data-cursor="hover"
              >
                {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4 text-maroon-800" />}
                <span>{copied ? 'Copied Order Summary!' : 'Copy Order Text'}</span>
              </button>

              <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-2">
                <a
                  href={instagramDmUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-maroon-800 hover:bg-maroon-900 px-6 py-3 text-sm font-bold text-cream-50 shadow-maroon-sm hover:scale-[1.02] transition-all"
                  data-cursor="hover"
                >
                  <Send className="h-4 w-4 text-cream-100" />
                  Order on Instagram DM
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-600/30 bg-emerald-50 px-4 py-3 text-xs font-bold text-emerald-800 hover:bg-emerald-100 transition-colors shadow-sm"
                  data-cursor="hover"
                >
                  <MessageCircle className="h-4 w-4 text-emerald-600" />
                  WhatsApp
                </a>
              </div>
            </div>

            <p className="mt-3 text-center text-[11px] text-espresso-600 font-medium">
              *Your customized selection will open directly in Instagram DM @officialtappino for instant confirmation.
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
