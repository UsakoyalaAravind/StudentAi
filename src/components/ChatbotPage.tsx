import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { 
  MessageSquare, 
  Send, 
  Bot, 
  User, 
  Brain,
  History,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const savedQuestions = [
  { id: 1, question: "Explain Newton's second law", subject: "Physics" },
  { id: 2, question: "What is photosynthesis?", subject: "Biology" },
  { id: 3, question: "Solve: 2x + 5 = 15", subject: "Math" },
  { id: 4, question: "Define machine learning", subject: "Computer Science" }
];

export const ChatbotPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your AI Study Assistant. I'm here to help you with academic questions across all subjects. What would you like to learn about today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: `Great question! Based on my analysis, here's a comprehensive explanation: ${input.includes('math') || input.includes('solve') ? 'This is a mathematical problem that can be solved step by step...' : input.includes('physics') ? 'This relates to fundamental physics principles...' : input.includes('chemistry') ? 'From a chemistry perspective...' : 'This is an interesting academic topic that involves...'} Would you like me to explain any specific part in more detail?`,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

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
            <Separator orientation="vertical" className="h-8" />
            <div className="flex items-center space-x-2">
              <MessageSquare className="h-6 w-6 text-accent" />
              <h2 className="text-xl font-semibold">Study Assistant</h2>
            </div>
          </div>
          <Button variant="outline" asChild>
            <Link to="/dashboard">Back to Dashboard</Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 flex gap-6 h-[calc(100vh-120px)]">
        {/* Sidebar */}
        <div className="w-80 space-y-4">
          <Card className="shadow-card gradient-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <History className="h-5 w-5" />
                <span>Saved Questions</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {savedQuestions.map((item) => (
                <div
                  key={item.id}
                  className="p-3 rounded-lg bg-muted/50 hover:bg-muted transition-smooth cursor-pointer"
                  onClick={() => setInput(item.question)}
                >
                  <p className="text-sm font-medium mb-1">{item.question}</p>
                  <p className="text-xs text-muted-foreground">{item.subject}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="shadow-card gradient-accent border-0">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 text-accent-foreground">
                <Sparkles className="h-8 w-8" />
                <div>
                  <h3 className="font-bold">AI-Powered Help</h3>
                  <p className="text-sm opacity-90">
                    Get instant answers to academic questions across all subjects
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          <Card className="flex-1 shadow-card gradient-card border-0 flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bot className="h-6 w-6 text-primary" />
                <span>AI Study Assistant</span>
              </CardTitle>
            </CardHeader>
            
            <CardContent className="flex-1 flex flex-col">
              {/* Messages */}
              <ScrollArea className="flex-1 pr-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex items-start space-x-3 ${
                        message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${
                        message.sender === 'user' 
                          ? 'gradient-primary' 
                          : 'gradient-secondary'
                      }`}>
                        {message.sender === 'user' ? (
                          <User className="h-4 w-4 text-primary-foreground" />
                        ) : (
                          <Bot className="h-4 w-4 text-secondary-foreground" />
                        )}
                      </div>
                      <div className={`flex-1 ${
                        message.sender === 'user' ? 'text-right' : ''
                      }`}>
                        <div className={`inline-block p-4 rounded-lg max-w-[80%] ${
                          message.sender === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        }`}>
                          <p className="text-sm">{message.content}</p>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  ))}
                  
                  {isLoading && (
                    <div className="flex items-start space-x-3">
                      <div className="p-2 rounded-lg gradient-secondary">
                        <Bot className="h-4 w-4 text-secondary-foreground" />
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>

              {/* Input Area */}
              <div className="mt-4 flex space-x-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask any academic question..."
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button 
                  onClick={handleSendMessage}
                  disabled={!input.trim() || isLoading}
                  className="gradient-primary"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};