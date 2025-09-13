import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import Course from "./pages/Course";
import Quiz from "./pages/Quiz";
import Progress from "./pages/Progress";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();
// Get your publishable key from the Clerk Dashboard
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Add your Clerk Publishable Key to the .env file");
}

const App = () => (
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/:id" element={<Course />} />
            <Route path="/quiz/:id" element={<Quiz />} />
            <Route
              path="/progress"
              element={
                <SignedIn>
                  <Progress />
                </SignedIn>
              }
            />
            <Route
              path="/profile"
              element={
                <SignedIn>
                  <Profile />
                </SignedIn>
              }
            />
            <Route path="/auth" element={<Auth />} />
            <Route
              path="/settings"
              element={
                <SignedIn>
                  <Settings />
                </SignedIn>
              }
            />
            <Route
              path="*"
              element={
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              }
            />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ClerkProvider>
);

export default App;