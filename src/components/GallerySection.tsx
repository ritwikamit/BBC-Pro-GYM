import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/gym';
import { X, ZoomIn } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = ['ALL', 'EQUIPMENT', 'TRAINING', 'INTERIOR'];

  const filteredItems = activeCategory === 'ALL'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="relative py-20 sm:py-24 lg:py-28 bg-transparent border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Header and Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full glass-card border-white/15 text-xs font-mono uppercase tracking-[0.18em] text-[#ffd000] mb-4">
              <span>VISUAL AMBIENCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
              Inside BBC Pro Gym
            </h2>
          </div>

          {/* Filter Pills - Native horizontal swipe on smartphone, wrapped on tablet/desktop */}
          <div className="flex items-center gap-2 font-mono overflow-x-auto no-scrollbar py-1 -mx-5 px-5 sm:mx-0 sm:px-0 sm:flex-wrap shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs uppercase tracking-[0.16em] px-4 py-2.5 rounded-full transition-all duration-300 shrink-0 min-h-[40px] ${
                  activeCategory === cat
                    ? 'glass-btn-funky shadow-lg'
                    : 'glass-btn hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] glass-card border-white/10 cursor-pointer hover:border-[#ffd000]/60 transition-all duration-300 shadow-xl hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/30 to-transparent opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#ffd000] block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-display font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-2xl glass-panel flex items-center justify-center text-white">
                    <ZoomIn className="w-5 h-5 text-[#ffd000]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-[#000000]/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-3xl overflow-hidden glass-panel border-white/20 p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full glass-btn text-white hover:text-[#ffd000]"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full max-h-[75vh] object-cover rounded-2xl"
            />

            <div className="p-4 sm:p-6 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#ffd000]">
                  {selectedImage.category}
                </span>
                <h3 className="text-xl font-display font-bold text-white mt-1">
                  {selectedImage.title}
                </h3>
              </div>
              <span className="text-xs font-mono text-white/50">
                BBC Pro Gym Aurangabad
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
