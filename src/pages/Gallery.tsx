import { useState, useMemo } from 'react';
import { Heart, ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Parallax } from '../components/Parallax';
import { remoteImages, GalleryImage } from '../data/galleryData';

export function Gallery() {
  const images = useMemo(() => {
    // Load local images from src/assets/gallery
    const localImageModules = import.meta.glob('../assets/gallery/*.{png,jpg,jpeg,svg,webp}', { eager: true });
    
    const localImages: GalleryImage[] = Object.values(localImageModules).map((module: any, index) => ({
      src: module.default,
      alt: `Gallery Image ${index + 1}`,
      // Assign random speeds between -10 and -25 for parallax effect
      speed: -10 - Math.floor(Math.random() * 15)
    }));

    return [...remoteImages, ...localImages];
  }, []);

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openModal = (index: number) => setSelectedImageIndex(index);
  const closeModal = () => setSelectedImageIndex(null);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-300" />
            <span className="font-serif text-xl">Ifesinachi & Chioma</span>
          </div>
          <a href="/" className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="font-serif text-5xl md:text-6xl text-gray-900 mb-6">Our Gallery</h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Capturing the beautiful moments of our journey together. Each picture tells a story of love, laughter, and happiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {images.map((image, index) => (
              <div key={index} className={`relative ${index % 2 === 0 ? 'md:mt-12' : ''}`}>
                <Parallax speed={image.speed} className="relative z-10">
                  <div 
                    className="group relative overflow-hidden rounded-2xl shadow-xl aspect-[3/4] cursor-pointer"
                    onClick={() => openModal(index)}
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </Parallax>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button 
            onClick={closeModal}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"
          >
            <X className="w-8 h-8" />
          </button>

          <button 
            onClick={prevImage}
            className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors p-2 z-50"
          >
            <ChevronLeft className="w-8 h-8 md:w-12 md:h-12" />
          </button>

          <div 
            className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={images[selectedImageIndex].src} 
              alt={images[selectedImageIndex].alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>

          <button 
            onClick={nextImage}
            className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors p-2 z-50"
          >
            <ChevronRight className="w-8 h-8 md:w-12 md:h-12" />
          </button>
        </div>
      )}
    </div>
  );
}
