import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Upload, Globe, Youtube, Brain, Sparkles, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-ai-brain.jpg";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-transparent" />
        
        <div className="container mx-auto px-4 py-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="gradient-text">Classmate AI</span>
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl">
                  Your intelligent learning companion. Upload documents, paste URLs, or share YouTube videos – 
                  get focused, personalized answers powered by AI.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/chat">
                  <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                    Start Learning <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="glass" size="lg" className="text-lg px-8 py-6">
                  Watch Demo <Sparkles className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              <img 
                src={heroImage} 
                alt="AI Learning Companion" 
                className="relative z-10 w-full h-auto rounded-3xl shadow-2xl float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              How <span className="gradient-text">Classmate AI</span> Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three simple steps to transform any content into your personal learning experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 text-center glass fade-in hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                <Upload className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Upload Content</h3>
              <p className="text-muted-foreground">
                Drag and drop PDF files, documents, or paste website URLs and YouTube links
              </p>
            </Card>
            
            <Card className="p-8 text-center glass fade-in hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">AI Processing</h3>
              <p className="text-muted-foreground">
                Our AI analyzes and understands your content using advanced RAG technology
              </p>
            </Card>
            
            <Card className="p-8 text-center glass fade-in hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Get Answers</h3>
              <p className="text-muted-foreground">
                Ask questions and receive focused, personalized answers from your content
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Why Choose <span className="gradient-text">Classmate AI</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cut through the noise and focus on what matters most in your learning journey
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-8 fade-in">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Focused Learning</h3>
                  <p className="text-muted-foreground">
                    Get specific answers from your content without distractions or irrelevant information
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Personalized Responses</h3>
                  <p className="text-muted-foreground">
                    AI adapts to your learning style and provides answers tailored to your needs
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Multiple Sources</h3>
                  <p className="text-muted-foreground">
                    Learn from documents, websites, and YouTube videos all in one place
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Card className="p-8 glass">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                    <span className="text-sm text-muted-foreground">Processing your content...</span>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <p className="text-sm">
                      "What are the key concepts from this research paper?"
                    </p>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-4 border-l-4 border-primary">
                    <p className="text-sm">
                      Based on your uploaded research paper, the three key concepts are:
                      1. Machine Learning Fundamentals...
                      2. Neural Network Architecture...
                      3. Training Optimization...
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contributors Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center fade-in">
            <h2 className="text-3xl font-bold mb-8">Built by</h2>
            <div className="flex flex-wrap justify-center gap-8">
              <Card className="p-6 glass hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold">Yuvaraj Goud</h3>
                    <p className="text-sm text-muted-foreground">Developer</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 glass hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold">Shaik Mahammed Arif</h3>
                    <p className="text-sm text-muted-foreground">Developer</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 glass hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold">Sai Vignesh</h3>
                    <p className="text-sm text-muted-foreground">Developer</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Learning?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of learners who are already using Classmate AI to study smarter, not harder.
            </p>
            <Link to="/chat">
              <Button variant="hero" size="lg" className="text-lg px-12 py-6">
                Start Your First Chat <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;