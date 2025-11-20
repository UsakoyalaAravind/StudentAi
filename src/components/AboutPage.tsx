import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Target, Users, Lightbulb, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              StudyAI
            </h1>
          </Link>
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

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            About <span className="gradient-primary bg-clip-text text-transparent">StudyAI</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're on a mission to revolutionize education through artificial intelligence, 
            making learning more accessible, efficient, and personalized for students worldwide.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Our <span className="gradient-secondary bg-clip-text text-transparent">Mission</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              StudyAI was created to address the challenges modern students face in managing 
              their academic workload. We believe that artificial intelligence should augment 
              human learning, not replace it.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our platform combines cutting-edge AI technology with intuitive design to create 
              tools that help students study smarter, manage their time better, and achieve 
              their academic goals with confidence.
            </p>
          </div>
          <Card className="shadow-glow gradient-card border-0">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To empower every student with AI-driven tools that make learning 
                  more effective, engaging, and accessible to all.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Makes StudyAI <span className="gradient-accent bg-clip-text text-transparent">Special</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-card hover:shadow-soft transition-smooth gradient-card border-0">
              <CardHeader className="text-center">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>AI-Powered Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Advanced machine learning algorithms that understand your learning patterns 
                  and adapt to your individual needs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-soft transition-smooth gradient-card border-0">
              <CardHeader className="text-center">
                <div className="w-12 h-12 gradient-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-secondary-foreground" />
                </div>
                <CardTitle>Collaborative Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Connect with peers, share resources, and learn together in a 
                  supportive community environment.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-soft transition-smooth gradient-card border-0">
              <CardHeader className="text-center">
                <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Personalized Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Tailored recommendations and insights based on your unique 
                  learning style and academic goals.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats Section */}
        <div className="gradient-hero rounded-2xl p-8 mb-16 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-8">
            StudyAI by the Numbers
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary-foreground mb-2">10,000+</div>
              <div className="text-primary-foreground/90">Active Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-foreground mb-2">50,000+</div>
              <div className="text-primary-foreground/90">Documents Summarized</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-foreground mb-2">95%</div>
              <div className="text-primary-foreground/90">Student Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-foreground mb-2">24/7</div>
              <div className="text-primary-foreground/90">AI Support Available</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already using StudyAI to achieve 
            their academic goals and unlock their full potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button variant="hero" size="lg" className="min-w-[200px]">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" size="lg" className="min-w-[200px]">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};