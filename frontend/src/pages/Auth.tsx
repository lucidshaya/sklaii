import { SignIn, SignUp } from "@clerk/clerk-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-100/50 rounded-full blur-3xl" />
      </div>
      <div className="relative w-full max-w-md">
        <Button
          variant="ghost"
          size="sm"
          className="mb-6 text-black hover:text-gray-700"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="h-4 w-4 mr-2 text-black" />
          Back to Home
        </Button>
        <div className="mb-4 text-center">
          <Button
            variant="link"
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-blue-600 hover:text-blue-700"
          >
            {isSignUp ? "Already have an account? Sign in" : "Don't have an account? Sign up"}
          </Button>
        </div>
        {isSignUp ? (
          <SignUp
            appearance={{
              elements: {
                card: "bg-gray-50 border-gray-200 shadow-sm",
                headerTitle: "text-2xl font-bold text-black",
                headerSubtitle: "text-base mt-2 text-gray-600",
                formButtonPrimary: "bg-blue-600 text-white hover:bg-blue-700 rounded-md py-2",
                socialButtonsBlockButton: "border border-gray-300 bg-white hover:bg-gray-50 rounded-md py-2 flex items-center justify-center gap-2",
                formFieldInput: "border-gray-300 bg-white text-black rounded-md pl-10 pr-10",
              },
            }}
            fallbackRedirectUrl="/courses"
          />
        ) : (
          <SignIn
            appearance={{
              elements: {
                card: "bg-gray-50 border-gray-200 shadow-sm",
                headerTitle: "text-2xl font-bold text-black",
                headerSubtitle: "text-base mt-2 text-gray-600",
                formButtonPrimary: "bg-blue-600 text-white hover:bg-blue-700 rounded-md py-2",
                socialButtonsBlockButton: "border border-gray-300 bg-white hover:bg-gray-50 rounded-md py-2 flex items-center justify-center gap-2",
                formFieldInput: "border-gray-300 bg-white text-black rounded-md pl-10 pr-10",
              },
            }}
            fallbackRedirectUrl="/courses"
          />
        )}
      </div>
    </div>
  );
};

export default Auth;