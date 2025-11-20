import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  Upload, 
  Download, 
  Zap, 
  Brain,
  Clock,
  CheckCircle,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export const SummarizerPage = () => {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerateSummary = async () => {
    if (!text.trim()) {
      toast({
        title: "Error",
        description: "Please enter some text to summarize",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate AI processing
    setTimeout(() => {
      const mockSummary = `## Key Points Summary

**Main Topic**: ${text.length > 100 ? 'Complex academic content analysis' : 'Brief content overview'}

**Key Insights**:
• The content discusses fundamental concepts that are essential for understanding the subject matter
• Several important methodologies and approaches are outlined
• Critical analysis reveals significant implications for practical application
• The material provides valuable context for further study

**Main Conclusions**:
The text presents a comprehensive overview of the topic, highlighting important relationships between concepts and providing practical insights that can be applied in academic and professional contexts.

**Recommended Actions**:
- Review the key concepts outlined above
- Consider additional reading on related topics
- Apply the insights to relevant coursework or projects

*Generated in ${Math.floor(Math.random() * 3) + 1} seconds using AI*`;

      setSummary(mockSummary);
      setIsLoading(false);
      toast({
        title: "Summary Generated!",
        description: "Your AI-powered summary is ready",
      });
    }, 2000);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Simulate file reading
      const reader = new FileReader();
      reader.onload = (e) => {
        setText("Sample text from uploaded file: " + file.name + "\n\nThis is a demonstration of file upload functionality. In a real implementation, this would extract and display the actual content from your uploaded document.");
      };
      reader.readAsText(file);
      
      toast({
        title: "File Uploaded",
        description: `Successfully loaded ${file.name}`,
      });
    }
  };

  const handleDownload = (format: 'pdf' | 'docx') => {
    if (!summary) {
      toast({
        title: "No Summary Available",
        description: "Please generate a summary first",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Download Started",
      description: `Downloading summary as ${format.toUpperCase()}...`,
    });
  };

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
              <FileText className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-semibold">AI Summarizer</h2>
            </div>
          </div>
          <Button variant="outline" asChild>
            <Link to="/dashboard">Back to Dashboard</Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            <span className="gradient-primary bg-clip-text text-transparent">AI-Powered</span> Document Summarizer
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform lengthy documents and texts into concise, structured summaries in seconds
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card className="shadow-card gradient-card border-0">
            <CardContent className="p-4 flex items-center space-x-3">
              <div className="p-2 rounded-lg gradient-primary">
                <Zap className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-muted-foreground">Summaries Created</p>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card gradient-card border-0">
            <CardContent className="p-4 flex items-center space-x-3">
              <div className="p-2 rounded-lg gradient-secondary">
                <Clock className="h-5 w-5 text-secondary-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold">2.3s</p>
                <p className="text-sm text-muted-foreground">Avg. Processing Time</p>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card gradient-card border-0">
            <CardContent className="p-4 flex items-center space-x-3">
              <div className="p-2 rounded-lg gradient-accent">
                <CheckCircle className="h-5 w-5 text-accent-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold">95%</p>
                <p className="text-sm text-muted-foreground">Accuracy Rate</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <Card className="shadow-card gradient-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Upload className="h-5 w-5" />
                  <span>Input Your Content</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="text" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="text">Paste Text</TabsTrigger>
                    <TabsTrigger value="upload">Upload File</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="text" className="space-y-4">
                    <Textarea
                      placeholder="Paste your text here (articles, research papers, notes, etc.)..."
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      className="min-h-[300px] resize-none"
                    />
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{text.length} characters</span>
                      <Badge variant="outline">
                        {text.length > 1000 ? 'Long' : text.length > 500 ? 'Medium' : 'Short'} content
                      </Badge>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="upload" className="space-y-4">
                    <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center">
                      <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-lg font-medium mb-2">Upload your document</p>
                      <p className="text-sm text-muted-foreground mb-4">
                        Supports PDF, DOCX, TXT files (up to 10MB)
                      </p>
                      <input
                        type="file"
                        accept=".pdf,.docx,.txt"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                      />
                      <Button variant="outline" asChild>
                        <label htmlFor="file-upload" className="cursor-pointer">
                          Choose File
                        </label>
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>

                <Button 
                  onClick={handleGenerateSummary}
                  disabled={!text.trim() || isLoading}
                  className="w-full mt-6 gradient-primary"
                  size="lg"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Generating Summary...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4 mr-2" />
                      Generate AI Summary
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Output Section */}
          <div className="space-y-6">
            <Card className="shadow-card gradient-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-5 w-5" />
                    <span>Generated Summary</span>
                  </div>
                  {summary && (
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDownload('pdf')}
                      >
                        <Download className="h-4 w-4 mr-1" />
                        PDF
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDownload('docx')}
                      >
                        <Download className="h-4 w-4 mr-1" />
                        DOCX
                      </Button>
                    </div>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {summary ? (
                  <div className="prose prose-sm max-w-none">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">
                        {summary}
                      </pre>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <FileText className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
                    <p className="text-lg font-medium text-muted-foreground mb-2">
                      No summary generated yet
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Add some content and click "Generate AI Summary" to get started
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};