import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import art1 from '@/assets/art-1.jpg';
import art2 from '@/assets/art-2.jpg';
import art3 from '@/assets/art-3.jpg';

const artworks = [
  { id: 1, image: art1, title: 'Reflection of Fire', year: '2024' },
  { id: 2, image: art2, title: 'Ethereal Valley', year: '2024' },
  { id: 3, image: art3, title: 'Color Grid Dreams', year: '2024' },
];

export const ArtCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % artworks.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + artworks.length) % artworks.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      {/* Artwork Display */}
      <div className="relative h-full w-full flex items-center justify-center p-8 md:p-16">
        {artworks.map((artwork, index) => (
          <div
            key={artwork.id}
            className={`absolute transition-all duration-700 ease-in-out ${
              index === currentIndex
                ? 'opacity-100 scale-100'
                : index === (currentIndex - 1 + artworks.length) % artworks.length
                ? 'opacity-0 scale-95 -translate-x-full'
                : 'opacity-0 scale-95 translate-x-full'
            }`}
          >
            <div className="relative max-h-[70vh] max-w-[90vw] md:max-w-[80vw] bg-card p-4 md:p-8 rounded-lg shadow-2xl">
              <img
                src={artwork.image}
                alt={artwork.title}
                className="max-h-[60vh] w-auto object-contain rounded"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Artwork Info */}
      <div className="absolute bottom-20 left-0 right-0 z-10 px-8 md:px-16">
        <div className="animate-fade-in text-shadow">
          <h2 className="mb-2 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            {artworks[currentIndex].title}
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            {artworks[currentIndex].year}
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        disabled={isAnimating}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-card/50 p-3 backdrop-blur-sm transition-all hover:bg-card/80 hover:scale-110 disabled:opacity-50 md:left-8"
        aria-label="Previous artwork"
      >
        <ChevronLeft className="h-6 w-6 text-foreground" />
      </button>
      <button
        onClick={nextSlide}
        disabled={isAnimating}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-card/50 p-3 backdrop-blur-sm transition-all hover:bg-card/80 hover:scale-110 disabled:opacity-50 md:right-8"
        aria-label="Next artwork"
      >
        <ChevronRight className="h-6 w-6 text-foreground" />
      </button>

      {/* Progress Indicators */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {artworks.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentIndex(index);
                setTimeout(() => setIsAnimating(false), 600);
              }
            }}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === currentIndex
                ? 'w-12 bg-primary'
                : 'w-6 bg-muted hover:bg-muted-foreground'
            }`}
            aria-label={`Go to artwork ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
