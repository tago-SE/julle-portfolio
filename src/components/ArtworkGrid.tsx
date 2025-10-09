import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import coinflip from '@/assets/coinflip2.jpg';
import flowers from '@/assets/flowers.jpg';
import coverall from '@/assets/coverall.jpg';
import cutout from '@/assets/cutout.jpg';
import cutout2 from '@/assets/cutout2.png';
import inout from '@/assets/inoutdocumentation.jpg';

const artworks = [
  { 
    id: 1, 
    image: coinflip, 
    title: 'Coinflip', 
    year: '2024',
    caption: 'Line art exploration on vibrant green, raw gestural marks creating organic forms and botanical chaos.'
  },
  { 
    id: 2, 
    image: flowers, 
    title: 'Dark Blooms', 
    year: '2024',
    caption: 'Flowers emerging from darkness, a study in contrast and textural abstraction with hints of color breaking through shadow.'
  },
  { 
    id: 3, 
    image: coverall, 
    title: 'Distorted Grid', 
    year: '2024',
    caption: 'Checkerboard pattern disrupted and warped, exploring visual glitches and the breakdown of order into surreal chaos.'
  },
  { 
    id: 4, 
    image: cutout, 
    title: 'Space is the Place', 
    year: '2024',
    caption: 'Magazine collage mixing typography, found objects, and geometric forms. A punk zine aesthetic celebrating DIY culture.'
  },
  { 
    id: 5, 
    image: cutout2, 
    title: 'Pussel', 
    year: '2024',
    caption: 'Playful collage combining nostalgia, pop imagery, and scribbled notes. A meditation on memory and visual fragments.'
  },
  { 
    id: 6, 
    image: inout, 
    title: 'In/Out Documentation', 
    year: '2024',
    caption: 'Red and blue line drawings facing each other, exploring duality and the relationship between inside and outside perspectives.'
  },
];

export const ArtworkGrid = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<typeof artworks[0] | null>(null);

  return (
    <>
      <section className="min-h-screen w-full px-8 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 animate-fade-in">
            <h1 className="mb-4 text-5xl font-black tracking-tighter text-foreground md:text-7xl lg:text-8xl">
              GALLERY
            </h1>
            <div className="h-2 w-32 bg-gradient-to-r from-primary via-secondary to-accent" />
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {artworks.map((artwork) => (
              <div
                key={artwork.id}
                onClick={() => setSelectedArtwork(artwork)}
                className="group cursor-pointer animate-fade-in"
              >
                <div className="relative overflow-hidden rounded-sm bg-card border-2 border-border transition-all duration-200 hover:border-primary hover:glow-red group-hover:scale-[1.02]">
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:saturate-150"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="text-xs font-bold text-accent uppercase tracking-wider">
                        Click to view
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border-t-2 border-border">
                    <h3 className="text-lg font-black uppercase tracking-tight text-foreground mb-1">
                      {artwork.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-mono">{artwork.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedArtwork} onOpenChange={() => setSelectedArtwork(null)}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto border-2 border-primary bg-background">
          {selectedArtwork && (
            <>
              <DialogHeader>
                <DialogTitle className="text-4xl font-black uppercase tracking-tighter text-foreground">
                  {selectedArtwork.title}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="rounded-sm overflow-hidden bg-card border-2 border-border">
                  <img
                    src={selectedArtwork.image}
                    alt={selectedArtwork.title}
                    className="w-full h-auto object-contain max-h-[60vh]"
                  />
                </div>
                <div className="space-y-4 border-l-4 border-primary pl-4">
                  <p className="text-sm font-mono text-accent uppercase tracking-wider">
                    {selectedArtwork.year}
                  </p>
                  <p className="text-base leading-relaxed text-foreground">
                    {selectedArtwork.caption}
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
