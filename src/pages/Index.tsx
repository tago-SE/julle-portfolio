import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArtworkGrid } from '@/components/ArtworkGrid';
import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
const Index = () => {
  return <main className="min-h-screen bg-background flex flex-col">
      <div className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-8 py-4">
          <Tabs defaultValue="home" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="home">Gallery
            </TabsTrigger>
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
            </TabsList>
            
            <TabsContent value="home" className="mt-0">
              <ArtworkGrid />
            </TabsContent>
            
            <TabsContent value="about" className="mt-0">
              <AboutSection />
            </TabsContent>
            
            <TabsContent value="contact" className="mt-0">
              <ContactSection />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </main>;
};
export default Index;