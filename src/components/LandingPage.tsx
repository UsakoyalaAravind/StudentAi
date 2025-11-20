import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Brain, MessageSquare, ClipboardList, Users, Zap, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";

const features = [
  {
    icon: BookOpen,
    title: "AI Summarization",
    description: "Transform lengthy documents into concise, structured summaries with advanced AI technology."
  },
  {
    icon: ClipboardList,
    title: "Smart Task Manager",
    description: "Organize your studies with intelligent task prioritization and deadline management."
  },
  {
    icon: MessageSquare,
    title: "AI Study Assistant",
    description: "Get instant answers to academic questions across all subjects with our intelligent chatbot."
  },
  {
    icon: Brain,
    title: "Quiz Generator",
    description: "Auto-generate practice quizzes from your study materials to test your knowledge."
  },
  {
    icon: Users,
    title: "Peer Collaboration",
    description: "Share resources and collaborate with fellow students in a supportive learning environment."
  },
  {
    icon: Zap,
    title: "Progress Analytics",
    description: "Track your learning journey with detailed insights and performance metrics."
  }
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Computer Science Student",
    content: "This platform revolutionized my study routine. The AI summaries save me hours every week!",
    rating: 5
  },
  {
    name: "Marcus Rodriguez",
    role: "Engineering Student", 
    content: "The quiz generator helped me prepare for exams more effectively than any other tool.",
    rating: 5
  },
  {
    name: "Emily Johnson",
    role: "Biology Major",
    content: "I love how the AI chatbot explains complex concepts in ways I can actually understand.",
    rating: 5
  }
];

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold ">
              StudyAI
            </h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-smooth">Features</a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-smooth">Reviews</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-smooth">About</a>
          </nav>
          <div className="flex items-center space-x-3">
            <Link to="/signin">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link to="/signup">
              <Button variant="hero">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 gradient-primary text-primary-foreground border-0">
            🚀 AI-Powered Learning Platform
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Study Smarter with AI
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up">
            Transform your learning experience with AI-powered summarization, smart task management, 
            and personalized study assistance. Join thousands of students achieving academic excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
            <Link to="/signup">
              <Button variant="hero" size="lg" className="min-w-[200px]">
                Start Learning Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="min-w-[200px]">
              Watch Demo
            </Button>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-glow animate-scale-in">
            <img 
              src={heroBanner} 
              alt="Students using AI-powered learning platform"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Powerful Features for
               Modern Learning
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to enhance your academic performance and streamline your study workflow.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-glow transition-smooth transform hover:scale-105 gradient-card border-0">
                <CardHeader>
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Loved by Students Worldwide
            </h2>
            <p className="text-xl text-muted-foreground">
              See what our users have to say about their learning transformation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card hover:shadow-soft transition-smooth gradient-card border-0">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 gradient-hero">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have already boosted their academic performance with StudyAI.
          </p>
          <Link to="/signup">
            <Button variant="outline" size="lg" className="bg-background text-foreground hover:bg-background/90 min-w-[200px]">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-12 px-4 border-t">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold">StudyAI</h3>
              </div>
              <p className="text-muted-foreground">
                Empowering students with AI-driven learning tools for academic excellence.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-smooth">AI Summarization</a></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">Task Manager</a></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">Study Assistant</a></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">Quiz Generator</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/about" className="hover:text-foreground transition-smooth">About</Link></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">Contact</a></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-smooth">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">Community</a></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 mt-8 text-center text-muted-foreground">
            <p>&copy; 2024 StudyAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};