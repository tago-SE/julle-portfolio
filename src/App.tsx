import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Index />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
         
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter> */}
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
