import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Brain, 
  Play, 
  Clock, 
  Trophy,
  CheckCircle,
  XCircle,
  RotateCcw,
  Target
} from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizResult {
  score: number;
  totalQuestions: number;
  timeSpent: number;
  answers: { questionId: string; selectedAnswer: number; correct: boolean }[];
}

const sampleQuestions: Question[] = [
  {
    id: '1',
    question: 'What is the derivative of x²?',
    options: ['x', '2x', 'x²', '2x²'],
    correctAnswer: 1,
    explanation: 'Using the power rule: d/dx(x^n) = n·x^(n-1), so d/dx(x²) = 2x'
  },
  {
    id: '2',
    question: 'Which of the following is a primary color?',
    options: ['Orange', 'Green', 'Red', 'Purple'],
    correctAnswer: 2,
    explanation: 'Red is one of the three primary colors along with blue and yellow'
  },
  {
    id: '3',
    question: 'What is the chemical symbol for Gold?',
    options: ['Go', 'Gd', 'Au', 'Ag'],
    correctAnswer: 2,
    explanation: 'Au comes from the Latin word "aurum" meaning gold'
  }
];

export const QuizGeneratorPage = () => {
  const [currentMode, setCurrentMode] = useState<'generate' | 'quiz' | 'results'>('generate');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: number }>({});
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
  const [timeRemaining, setTimeRemaining] = useState(600); // 10 minutes
  const [content, setContent] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const generateQuiz = async () => {
    if (!content.trim()) {
      toast({
        title: "Error",
        description: "Please enter some content to generate quiz from",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI quiz generation
    setTimeout(() => {
      setQuestions(sampleQuestions);
      setCurrentMode('quiz');
      setCurrentQuestionIndex(0);
      setSelectedAnswers({});
      setTimeRemaining(600);
      setIsGenerating(false);
      
      toast({
        title: "Quiz Generated!",
        description: `Created ${sampleQuestions.length} questions from your content`,
      });
    }, 2000);
  };

  const submitQuiz = () => {
    const answers = questions.map(q => ({
      questionId: q.id,
      selectedAnswer: selectedAnswers[q.id] ?? -1,
      correct: selectedAnswers[q.id] === q.correctAnswer
    }));

    const score = answers.filter(a => a.correct).length;
    const timeSpent = 600 - timeRemaining;

    const result: QuizResult = {
      score,
      totalQuestions: questions.length,
      timeSpent,
      answers
    };

    setQuizResult(result);
    setCurrentMode('results');

    toast({
      title: "Quiz Completed!",
      description: `You scored ${score}/${questions.length} (${Math.round((score / questions.length) * 100)}%)`,
    });
  };

  const restartQuiz = () => {
    setCurrentMode('generate');
    setQuestions([]);
    setSelectedAnswers({});
    setQuizResult(null);
    setTimeRemaining(600);
    setCurrentQuestionIndex(0);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const currentQuestion = questions[currentQuestionIndex];
  const progress = questions.length > 0 ? ((currentQuestionIndex + 1) / questions.length) * 100 : 0;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/dashboard" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
                StudyAI
              </h1>
            </Link>
            <div className="h-8 w-px bg-border" />
            <div className="flex items-center space-x-2">
              <Brain className="h-6 w-6 text-accent" />
              <h2 className="text-xl font-semibold">Quiz Generator</h2>
            </div>
          </div>
          <Button variant="outline" asChild>
            <Link to="/dashboard">Back to Dashboard</Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {currentMode === 'generate' && (
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">
                <span className="gradient-accent bg-clip-text text-transparent">AI-Powered</span> Quiz Generator
              </h1>
              <p className="text-xl text-muted-foreground">
                Transform your study materials into interactive quizzes instantly
              </p>
            </div>

            <Card className="shadow-card gradient-card border-0">
              <CardHeader>
                <CardTitle>Create Your Quiz</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Paste your study content here (notes, textbook chapters, articles, etc.)..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="min-h-[200px] resize-none"
                />
                
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-3 bg-muted/50">
                    <div className="text-center">
                      <Target className="h-6 w-6 mx-auto mb-2 text-primary" />
                      <p className="text-sm font-medium">5-10 Questions</p>
                      <p className="text-xs text-muted-foreground">Auto-generated</p>
                    </div>
                  </Card>
                  <Card className="p-3 bg-muted/50">
                    <div className="text-center">
                      <Clock className="h-6 w-6 mx-auto mb-2 text-secondary" />
                      <p className="text-sm font-medium">10 Minutes</p>
                      <p className="text-xs text-muted-foreground">Time limit</p>
                    </div>
                  </Card>
                  <Card className="p-3 bg-muted/50">
                    <div className="text-center">
                      <Trophy className="h-6 w-6 mx-auto mb-2 text-accent" />
                      <p className="text-sm font-medium">Instant Results</p>
                      <p className="text-xs text-muted-foreground">With explanations</p>
                    </div>
                  </Card>
                </div>

                <Button 
                  onClick={generateQuiz}
                  disabled={!content.trim() || isGenerating}
                  className="w-full gradient-accent"
                  size="lg"
                >
                  {isGenerating ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Generating Quiz...
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4 mr-2" />
                      Generate Quiz
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {currentMode === 'quiz' && currentQuestion && (
          <div className="max-w-2xl mx-auto space-y-6">
            {/* Quiz Header */}
            <Card className="shadow-card gradient-card border-0">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">
                      Question {currentQuestionIndex + 1} of {questions.length}
                    </Badge>
                    <Badge variant="outline" className="gradient-secondary text-secondary-foreground border-0">
                      <Clock className="h-3 w-3 mr-1" />
                      {formatTime(timeRemaining)}
                    </Badge>
                  </div>
                </div>
                <Progress value={progress} className="h-2" />
              </CardContent>
            </Card>

            {/* Question */}
            <Card className="shadow-card gradient-card border-0">
              <CardHeader>
                <CardTitle className="text-xl">{currentQuestion.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={selectedAnswers[currentQuestion.id]?.toString()}
                  onValueChange={(value) => 
                    setSelectedAnswers(prev => ({ ...prev, [currentQuestion.id]: parseInt(value) }))
                  }
                  className="space-y-3"
                >
                  {currentQuestion.options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-muted/50 transition-smooth">
                      <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                      <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>

                <div className="flex justify-between mt-6">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                    disabled={currentQuestionIndex === 0}
                  >
                    Previous
                  </Button>
                  
                  {currentQuestionIndex === questions.length - 1 ? (
                    <Button onClick={submitQuiz} className="gradient-primary">
                      Submit Quiz
                    </Button>
                  ) : (
                    <Button
                      onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
                      className="gradient-primary"
                    >
                      Next
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {currentMode === 'results' && quizResult && (
          <div className="max-w-2xl mx-auto space-y-6">
            {/* Results Header */}
            <Card className="shadow-card gradient-hero border-0">
              <CardContent className="p-8 text-center text-primary-foreground">
                <Trophy className="h-16 w-16 mx-auto mb-4" />
                <h1 className="text-3xl font-bold mb-2">Quiz Completed!</h1>
                <p className="text-xl mb-4">
                  You scored {quizResult.score} out of {quizResult.totalQuestions}
                </p>
                <Badge variant="outline" className="bg-primary-foreground text-primary text-lg px-4 py-2">
                  {Math.round((quizResult.score / quizResult.totalQuestions) * 100)}%
                </Badge>
              </CardContent>
            </Card>

            {/* Detailed Results */}
            <Card className="shadow-card gradient-card border-0">
              <CardHeader>
                <CardTitle>Detailed Results</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {questions.map((question, index) => {
                  const userAnswer = quizResult.answers.find(a => a.questionId === question.id);
                  const isCorrect = userAnswer?.correct ?? false;
                  
                  return (
                    <div key={question.id} className="p-4 rounded-lg bg-muted/50">
                      <div className="flex items-start space-x-3 mb-3">
                        {isCorrect ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500 mt-1" />
                        )}
                        <div className="flex-1">
                          <h3 className="font-medium mb-2">{question.question}</h3>
                          <div className="text-sm space-y-1">
                            <p>
                              <span className="text-muted-foreground">Your answer: </span>
                              <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>
                                {userAnswer?.selectedAnswer !== undefined 
                                  ? question.options[userAnswer.selectedAnswer] 
                                  : 'No answer selected'}
                              </span>
                            </p>
                            {!isCorrect && (
                              <p>
                                <span className="text-muted-foreground">Correct answer: </span>
                                <span className="text-green-600">
                                  {question.options[question.correctAnswer]}
                                </span>
                              </p>
                            )}
                            <p className="text-muted-foreground mt-2">{question.explanation}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            <div className="flex justify-center space-x-4">
              <Button onClick={restartQuiz} variant="outline">
                <RotateCcw className="h-4 w-4 mr-2" />
                Create New Quiz
              </Button>
              <Button asChild className="gradient-primary">
                <Link to="/analytics">View Analytics</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};