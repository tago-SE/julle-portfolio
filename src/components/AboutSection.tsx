import { Palette, Sparkles, Heart, ExternalLink } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/julian-profile.jpg';

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

        {/* Profile Section */}
        <div className="mb-16 flex flex-col items-center gap-8 animate-fade-in md:flex-row md:items-start">
          <Avatar className="h-48 w-48 border-4 border-primary/50 shadow-[0_0_30px_rgba(var(--primary),0.3)]">
            <AvatarImage src={profileImage} alt="Julian Redaelli" />
            <AvatarFallback>JR</AvatarFallback>
          </Avatar>
          <div className="flex-1 text-center md:text-left">
            <h3 className="mb-2 text-4xl font-bold text-foreground">Julian Redaelli</h3>
            <p className="mb-4 text-xl text-primary">Designer & Visual Artist</p>
            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
              <Button 
                variant="outline" 
                size="sm" 
                className="border-primary/50 hover:bg-primary/20"
                asChild
              >
                <a href="https://www.imdb.com/name/nm14190793/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  IMDB
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="border-primary/50 hover:bg-primary/20"
                asChild
              >
                <a href="http://nischmanagement.se/julian-redaelli" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Model Portfolio
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
          {/* Main Bio */}
          <div className="space-y-6 animate-slide-up">
            <p className="text-lg leading-relaxed text-foreground md:text-xl">
              Julian Redaelli is a multidisciplinary designer and visual artist whose work seamlessly blends 
              the raw energy of punk aesthetics with refined contemporary design principles. Based between 
              Milan and Berlin, Julian creates provocative imagery that challenges conventional beauty standards 
              while maintaining an unmistakable sense of style and sophistication.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              With a background spanning fashion design, photography, and digital art, Julian's portfolio 
              defies categorization. Each piece serves as a visual manifesto—bold, unapologetic, and 
              deeply personal. His work has been featured in underground galleries and mainstream publications 
              alike, bridging the gap between counterculture and high art.
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
