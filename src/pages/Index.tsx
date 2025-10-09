import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArtworkGrid } from "@/components/ArtworkGrid";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
const tabs = [
  {
    value: "home",
    label: "Gallery",
    content: <ArtworkGrid />,
  },
  {
    value: "artist",
    label: "Artist",
    content: <AboutSection />,
  },
  {
    value: "contact",
    label: "Contact",
    content: <ContactSection />,
  },
] as const;

type TabValue = (typeof tabs)[number]["value"];

const Index = () => {
  return (
    <>
      <main className="min-h-screen bg-background flex flex-col">
        <div className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
          <div className="container mx-auto px-8 py-4">
            <Tabs defaultValue={tabs[0].value as TabValue} className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
                {tabs.map((tab) => (
                  <TabsTrigger key={tab.value} value={tab.value}>
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              {tabs.map((tab) => (
                <TabsContent key={tab.value} value={tab.value} className="mt-0">
                  {tab.content}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Index;
