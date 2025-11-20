import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "@/components/LandingPage";
import { SignInPage } from "@/components/auth/SignInPage";
import { SignUpPage } from "@/components/auth/SignUpPage";
import { Dashboard } from "@/components/Dashboard";
import { AboutPage } from "@/components/AboutPage";
import { ChatbotPage } from "@/components/ChatbotPage";
import { SummarizerPage } from "@/components/SummarizerPage";
import { TaskManagerPage } from "@/components/TaskManagerPage";
import { QuizGeneratorPage } from "@/components/QuizGeneratorPage";
import { AnalyticsPage } from "@/components/AnalyticsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/summarizer" element={<SummarizerPage />} />
          <Route path="/tasks" element={<TaskManagerPage />} />
          <Route path="/quiz" element={<QuizGeneratorPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
