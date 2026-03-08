import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import SectionPage from "./pages/SectionPage";
import SearchPage from "./pages/SearchPage";
import QuizPage from "./pages/QuizPage";
import CommunityPage from "./pages/CommunityPage";
import ToolsGuidePage from "./pages/ToolsGuidePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/:section" element={<SectionPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/tools-guide" element={<ToolsGuidePage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
