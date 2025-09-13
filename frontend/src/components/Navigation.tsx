import { useState } from "react";
import { Brain, Menu, X, User, BookOpen, Trophy, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/clerk-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSignedIn } = useAuth(); // Check if user is logged in
  const navItems = [
    { name: "Courses", href: "/courses", icon: BookOpen, protected: false },
    { name: "Progress", href: "/progress", icon: Trophy, protected: true },
    { name: "Profile", href: "/profile", icon: User, protected: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-purple">Skilled Learners</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isProtected = item.protected && !isSignedIn;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 hover:text-black transition-colors",
                    isProtected && "pointer-events-none opacity-50"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </a>
              );
            })}
            <a
              href="/settings"
              className={cn(
                "flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 hover:text-black transition-colors",
                !isSignedIn && "pointer-events-none opacity-50"
              )}
            >
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
            </a>
            <a href="/auth">
              <Button variant="hero" size="sm">
                {isSignedIn ? "Dashboard" : "Get Started"}
              </Button>
            </a>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isProtected = item.protected && !isSignedIn;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:text-black transition-colors rounded-md hover:bg-gray-100",
                      isProtected && "pointer-events-none opacity-50"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </a>
                );
              })}
              <div className="flex gap-2 pt-2">
                <a
                  href="/settings"
                  className={cn(
                    "flex-1",
                    !isSignedIn && "pointer-events-none opacity-50"
                  )}
                >
                  <Button variant="ghost" size="sm" className="w-full">
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </Button>
                </a>
                <a href="/auth" className="flex-1">
                  <Button variant="hero" size="sm" className="w-full">
                    {isSignedIn ? "Dashboard" : "Get Started"}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;