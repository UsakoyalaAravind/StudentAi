import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  ClipboardList, 
  MessageSquare, 
  Brain, 
  Users, 
  BarChart3,
  Calendar,
  TrendingUp,
  CheckCircle,
  Clock,
  ArrowRight,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

const quickStats = [
  {
    title: "Tasks Due Today",
    value: "3",
    description: "2 assignments, 1 quiz",
    icon: Clock,
    color: "text-accent",
    bgColor: "gradient-accent"
  },
  {
    title: "Summaries Created",
    value: "12",
    description: "This week",
    icon: BookOpen,
    color: "text-primary",
    bgColor: "gradient-primary"
  },
  {
    title: "Quizzes Completed",
    value: "8",
    description: "Average score: 92%",
    icon: Brain,
    color: "text-secondary",
    bgColor: "gradient-secondary"
  },
  {
    title: "Study Streak",
    value: "7 days",
    description: "Keep it up!",
    icon: TrendingUp,
    color: "text-primary",
    bgColor: "gradient-primary"
  }
];

const quickActions = [
  {
    title: "AI Summarizer",
    description: "Upload documents for instant AI summaries",
    icon: BookOpen,
    href: "/summarizer",
    color: "primary"
  },
  {
    title: "Task Manager",
    description: "Organize and track your assignments",
    icon: ClipboardList,
    href: "/tasks",
    color: "secondary"
  },
  {
    title: "Study Assistant",
    description: "Get help with academic questions",
    icon: MessageSquare,
    href: "/chatbot",
    color: "accent"
  },
  {
    title: "Quiz Generator",
    description: "Create practice tests from your notes",
    icon: Brain,
    href: "/quiz",
    color: "primary"
  }
];

const recentActivity = [
  {
    action: "Completed quiz",
    subject: "Linear Algebra",
    score: "94%",
    time: "2 hours ago",
    icon: CheckCircle,
    color: "text-secondary"
  },
  {
    action: "Created summary",
    subject: "Organic Chemistry Ch. 5",
    time: "4 hours ago",
    icon: BookOpen,
    color: "text-primary"
  },
  {
    action: "Added task",
    subject: "Physics Lab Report",
    time: "6 hours ago",
    icon: ClipboardList,
    color: "text-accent"
  },
  {
    action: "Used Study Assistant",
    subject: "Calculus help",
    time: "Yesterday",
    icon: MessageSquare,
    color: "text-primary"
  }
];

export const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold bg-clip-text ">
              StudyAI
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="gradient-secondary text-secondary-foreground border-0">
              <Zap className="h-3 w-3 mr-1" />
              Pro Plan
            </Badge>
            <Button variant="ghost" size="sm">
              Profile
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Welcome back, <span className="bg-clip-text ">User!</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Ready to continue your learning journey? Here's what's happening today.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => (
            <Card key={index} className="shadow-card hover:shadow-soft transition-smooth gradient-card border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                    <stat.icon className={`h-6 w-6 text-primary-foreground`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {quickActions.map((action, index) => (
                <Link key={index} to={action.href}>
                  <Card className="shadow-card hover:shadow-glow transition-smooth transform hover:scale-105 gradient-card border-0 h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className={`p-3 rounded-lg gradient-${action.color}`}>
                          <action.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <ArrowRight className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <CardTitle className="text-lg">{action.title}</CardTitle>
                      <CardDescription>{action.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
            <Card className="shadow-card gradient-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5" />
                  <span>Activity Feed</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-smooth">
                    <div className={`p-2 rounded-lg gradient-primary`}>
                      <activity.icon className={`h-4 w-4 text-primary-foreground`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">
                        {activity.action}
                      </p>
                      <p className="text-sm text-muted-foreground truncate">
                        {activity.subject}
                      </p>
                      {activity.score && (
                        <Badge variant="outline" className="text-xs gradient-secondary text-secondary-foreground border-0">
                          {activity.score}
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Progress Section */}
        <div className="mt-8">
          <Card className="shadow-card gradient-hero border-0">
            <CardContent className="p-8">
              <div className="flex items-center justify-between text-primary-foreground">
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    You're doing great! 🎉
                  </h3>
                  <p className="text-primary-foreground/90 mb-4">
                    You've completed 85% of your weekly learning goals. Keep up the momentum!
                  </p>
                  <Link to="/analytics">
                    <Button variant="outline" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90">
                      View Detailed Analytics
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="hidden md:block">
                  <BarChart3 className="h-16 w-16 text-primary-foreground/20" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};