import { Palette, Sparkles, Heart } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section className="min-h-screen w-full px-8 py-24 md:px-16 lg:px-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 animate-fade-in">
          <h2 className="mb-4 text-5xl font-bold tracking-tight text-foreground md:text-7xl">
            About the Artist
          </h2>
          <div className="h-1 w-24 bg-primary" />
        </div>

        {/* Content Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
          {/* Main Bio */}
          <div className="space-y-6 animate-slide-up">
            <p className="text-lg leading-relaxed text-foreground md:text-xl">
              Welcome to my creative sanctuary. I'm a contemporary artist exploring the intersection 
              of emotion, color, and form. Each piece is a journey through landscapes both real and imagined, 
              inviting viewers to discover their own narratives within the canvas.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              My work draws inspiration from the natural world, urban environments, and the intangible 
              spaces between memory and dreams. Through bold compositions and vibrant palettes, I seek 
              to create moments of contemplation and wonder.
            </p>
          </div>

          {/* Artistic Philosophy */}
          <div className="space-y-8">
            <div className="group animate-slide-up rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/50">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-3">
                  <Palette className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Creative Process</h3>
              </div>
              <p className="text-muted-foreground">
                Every piece begins with intuition, evolving through layers of experimentation 
                and discovery. I embrace the unexpected, allowing the artwork to guide its own creation.
              </p>
            </div>

            <div className="group animate-slide-up rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/50" style={{ animationDelay: '0.1s' }}>
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-3">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Inspiration</h3>
              </div>
              <p className="text-muted-foreground">
                Drawing from nature's rhythms, urban energy, and the quiet spaces in between, 
                I create works that resonate with both vibrancy and serenity.
              </p>
            </div>

            <div className="group animate-slide-up rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/50" style={{ animationDelay: '0.2s' }}>
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-3">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Mission</h3>
              </div>
              <p className="text-muted-foreground">
                To create art that transcends the visual, touching the emotional and spiritual, 
                offering spaces for reflection, imagination, and personal connection.
              </p>
            </div>
          </div>
        </div>

        {/* Exhibition Notice */}
        <div className="mt-16 animate-fade-in rounded-xl border border-primary/30 bg-primary/5 p-8 text-center backdrop-blur-sm">
          <p className="text-lg text-foreground">
            Interested in commissioning work or discussing exhibitions?
          </p>
          <p className="mt-2 text-xl font-semibold text-primary">
            Let's create something extraordinary together.
          </p>
        </div>
      </div>
    </section>
  );
};
