import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Brain, User, Mail, Lock, GraduationCap, BookOpen, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate registration
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Welcome to StudyAI!",
        description: "Your account has been created successfully.",
      });
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center gradient-hero p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 text-primary-foreground hover:text-primary-foreground/90 transition-smooth">
            <Brain className="h-8 w-8" />
            <h1 className="text-2xl font-bold">StudyAI</h1>
          </Link>
        </div>

        {/* Sign Up Card */}
        <Card className="shadow-glow border-0 gradient-card">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Join StudyAI</CardTitle>
            <CardDescription>
              Create your account and start your AI-powered learning journey
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignUp} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Full Name</span>
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  className="transition-smooth focus:shadow-soft"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>Email</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="transition-smooth focus:shadow-soft"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role" className="flex items-center space-x-2">
                  <GraduationCap className="h-4 w-4" />
                  <span>I am a</span>
                </Label>
                <Select value={formData.role} onValueChange={(value) => handleInputChange("role", value)}>
                  <SelectTrigger className="transition-smooth focus:shadow-soft">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">
                      <div className="flex items-center space-x-2">
                        <BookOpen className="h-4 w-4" />
                        <span>Student</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="teacher">
                      <div className="flex items-center space-x-2">
                        <GraduationCap className="h-4 w-4" />
                        <span>Teacher</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="flex items-center space-x-2">
                  <Lock className="h-4 w-4" />
                  <span>Password</span>
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  required
                  className="transition-smooth focus:shadow-soft"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="flex items-center space-x-2">
                  <Lock className="h-4 w-4" />
                  <span>Confirm Password</span>
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                  required
                  className="transition-smooth focus:shadow-soft"
                />
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                className="w-full" 
                disabled={isLoading}
              >
                {isLoading ? "Creating Account..." : "Create Account"}
                {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-muted-foreground">
                Already have an account?{" "}
                <Link to="/signin" className="text-primary hover:underline font-medium">
                  Sign in here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};