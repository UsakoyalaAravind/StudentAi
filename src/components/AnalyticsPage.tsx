import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart3, 
  TrendingUp, 
  Target, 
  Calendar,
  Brain,
  Clock,
  Trophy,
  BookOpen,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from "recharts";

const weeklyProgress = [
  { day: 'Mon', quizzes: 2, tasks: 5, study: 3.5 },
  { day: 'Tue', quizzes: 3, tasks: 4, study: 4.2 },
  { day: 'Wed', quizzes: 1, tasks: 6, study: 2.8 },
  { day: 'Thu', quizzes: 4, tasks: 3, study: 5.1 },
  { day: 'Fri', quizzes: 2, tasks: 7, study: 3.9 },
  { day: 'Sat', quizzes: 3, tasks: 2, study: 4.5 },
  { day: 'Sun', quizzes: 1, tasks: 1, study: 2.2 }
];

const performanceData = [
  { month: 'Jan', math: 85, science: 78, history: 92, english: 88 },
  { month: 'Feb', math: 88, science: 82, history: 89, english: 91 },
  { month: 'Mar', math: 92, science: 85, history: 94, english: 89 },
  { month: 'Apr', math: 89, science: 88, history: 96, english: 93 },
  { month: 'May', math: 94, science: 91, history: 98, english: 95 }
];

const subjectDistribution = [
  { name: 'Mathematics', value: 30, color: '#8B5CF6' },
  { name: 'Science', value: 25, color: '#06B6D4' },
  { name: 'History', value: 20, color: '#10B981' },
  { name: 'English', value: 15, color: '#F59E0B' },
  { name: 'Other', value: 10, color: '#EF4444' }
];

const studyStreak = [
  { date: '2024-12-01', hours: 2.5 },
  { date: '2024-12-02', hours: 3.2 },
  { date: '2024-12-03', hours: 4.1 },
  { date: '2024-12-04', hours: 2.8 },
  { date: '2024-12-05', hours: 3.7 },
  { date: '2024-12-06', hours: 4.5 },
  { date: '2024-12-07', hours: 3.1 },
  { date: '2024-12-08', hours: 4.2 },
  { date: '2024-12-09', hours: 3.8 },
  { date: '2024-12-10', hours: 4.6 }
];

export const AnalyticsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/dashboard" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold bg-clip-text">
                StudyAI
              </h1>
            </Link>
            <div className="h-8 w-px bg-border" />
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-semibold">Analytics Dashboard</h2>
            </div>
          </div>
          <Button variant="outline" asChild>
            <Link to="/dashboard">Back to Dashboard</Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card gradient-primary border-0">
            <CardContent className="p-6 text-primary-foreground">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium opacity-90">Total Study Hours</p>
                  <p className="text-3xl font-bold">2</p>
                  <p className="text-sm opacity-75">This month</p>
                </div>
                <Clock className="h-8 w-8 opacity-80" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card gradient-secondary border-0">
            <CardContent className="p-6 text-secondary-foreground">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium opacity-90">Quizzes Completed</p>
                  <p className="text-3xl font-bold">4</p>
                  <p className="text-sm opacity-75">Average: 91%</p>
                </div>
                <Trophy className="h-8 w-8 opacity-80" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card gradient-accent border-0">
            <CardContent className="p-6 text-accent-foreground">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium opacity-90">Tasks Completed</p>
                  <p className="text-3xl font-bold">15</p>
                  <p className="text-sm opacity-75">98% completion rate</p>
                </div>
                <CheckCircle className="h-8 w-8 opacity-80" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card gradient-hero border-0">
            <CardContent className="p-6 text-primary-foreground">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium opacity-90">Study Streak</p>
                  <p className="text-3xl font-bold">5</p>
                  <p className="text-sm opacity-75">Days in a row</p>
                </div>
                <TrendingUp className="h-8 w-8 opacity-80" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="subjects">Subjects</TabsTrigger>
            <TabsTrigger value="goals">Goals</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Weekly Activity */}
              <Card className="shadow-card gradient-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Weekly Activity</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={weeklyProgress}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Area 
                        type="monotone" 
                        dataKey="study" 
                        stackId="1" 
                        stroke="#8B5CF6" 
                        fill="#8B5CF6" 
                        fillOpacity={0.6}
                        name="Study Hours"
                      />
                      <Area 
                        type="monotone" 
                        dataKey="quizzes" 
                        stackId="2" 
                        stroke="#06B6D4" 
                        fill="#06B6D4" 
                        fillOpacity={0.6}
                        name="Quizzes"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Study Streak */}
              <Card className="shadow-card gradient-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5" />
                    <span>Daily Study Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={studyStreak}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis 
                        dataKey="date" 
                        tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      />
                      <YAxis />
                      <Tooltip 
                        labelFormatter={(value) => new Date(value).toLocaleDateString()}
                        formatter={(value) => [`${value} hours`, 'Study Time']}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="hours" 
                        stroke="#10B981" 
                        strokeWidth={3}
                        dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, stroke: '#10B981', strokeWidth: 2 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Recent Achievements */}
            <Card className="shadow-card gradient-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5" />
                  <span>Recent Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3 p-4 rounded-lg bg-muted/50">
                    <div className="p-2 rounded-lg gradient-primary">
                      <Target className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Perfect Week</p>
                      <p className="text-sm text-muted-foreground">7 days study streak</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 rounded-lg bg-muted/50">
                    <div className="p-2 rounded-lg gradient-secondary">
                      <BookOpen className="h-5 w-5 text-secondary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Quiz Master</p>
                      <p className="text-sm text-muted-foreground">5 perfect scores</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 rounded-lg bg-muted/50">
                    <div className="p-2 rounded-lg gradient-accent">
                      <CheckCircle className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Task Champion</p>
                      <p className="text-sm text-muted-foreground">100% completion rate</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <Card className="shadow-card gradient-card border-0">
              <CardHeader>
                <CardTitle>Subject Performance Over Time</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[60, 100]} />
                    <Tooltip formatter={(value) => [`${value}%`, 'Score']} />
                    <Legend />
                    <Line type="monotone" dataKey="math" stroke="#8B5CF6" strokeWidth={2} name="Mathematics" />
                    <Line type="monotone" dataKey="science" stroke="#06B6D4" strokeWidth={2} name="Science" />
                    <Line type="monotone" dataKey="history" stroke="#10B981" strokeWidth={2} name="History" />
                    <Line type="monotone" dataKey="english" stroke="#F59E0B" strokeWidth={2} name="English" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="subjects" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="shadow-card gradient-card border-0">
                <CardHeader>
                  <CardTitle>Subject Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={subjectDistribution}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {subjectDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="shadow-card gradient-card border-0">
                <CardHeader>
                  <CardTitle>Subject Performance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { subject: 'Mathematics', score: 94, progress: 94 },
                    { subject: 'Science', score: 91, progress: 91 },
                    { subject: 'History', score: 98, progress: 98 },
                    { subject: 'English', score: 95, progress: 95 }
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{item.subject}</span>
                        <Badge variant="outline">{item.score}%</Badge>
                      </div>
                      <Progress value={item.progress} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="goals" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-card gradient-card border-0">
                <CardHeader>
                  <CardTitle>Weekly Goals</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>Study 25 hours</span>
                      <Badge variant="outline">21/25</Badge>
                    </div>
                    <Progress value={84} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>Complete 10 quizzes</span>
                      <Badge variant="outline">8/10</Badge>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>Finish 15 tasks</span>
                      <Badge variant="outline" className="gradient-primary text-primary-foreground border-0">15/15</Badge>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card gradient-card border-0">
                <CardHeader>
                  <CardTitle>Monthly Targets</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>Maintain 90% avg score</span>
                      <Badge variant="outline" className="gradient-secondary text-secondary-foreground border-0">91%</Badge>
                    </div>
                    <Progress value={91} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>Study 100 hours</span>
                      <Badge variant="outline">127/100</Badge>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>20-day study streak</span>
                      <Badge variant="outline">12/20</Badge>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};