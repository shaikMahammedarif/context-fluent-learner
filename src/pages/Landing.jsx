import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Upload, Globe, Youtube, Brain, Sparkles, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-ai-brain.jpg";

const Landing = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 gradient-moving opacity-20"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 fade-in">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6">
                  <Zap className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm font-medium text-primary">AI-Powered Learning</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="gradient-text">Classmate AI</span>
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                  Your intelligent learning companion. Upload documents, paste URLs, or share YouTube videos – 
                  get focused, personalized answers powered by AI.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 fade-in-delay">
                <Link to="/chat">
                  <Button size="lg" className="text-lg px-8 py-6 interactive-glow">
                    Start Learning <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 glass interactive-glow">
                  Watch Demo <Sparkles className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div 
              className="relative fade-in-delay"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl animate-pulse" />
              <img 
                src={heroImage} 
                alt="AI Learning Companion" 
                className="relative z-10 w-full h-auto rounded-3xl shadow-2xl float interactive-glow"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section 
        className="py-20 relative"
        style={{
          transform: `translateY(${scrollY * 0.05}px)`,
        }}
      >
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
            <Card className="p-8 text-center glass fade-in interactive-glow hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                <Upload className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Upload Content</h3>
              <p className="text-muted-foreground">
                Drag and drop PDF files, documents, or paste website URLs and YouTube links
              </p>
            </Card>
            
            <Card className="p-8 text-center glass fade-in interactive-glow hover:scale-105 transition-all duration-300 delay-75">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center shadow-lg">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">AI Processing</h3>
              <p className="text-muted-foreground">
                Our AI analyzes and understands your content using advanced RAG technology
              </p>
            </Card>
            
            <Card className="p-8 text-center glass fade-in interactive-glow hover:scale-105 transition-all duration-300 delay-150">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
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
      <section 
        className="py-20"
        style={{
          transform: `translateY(${scrollY * 0.03}px)`,
        }}
      >
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
              <div className="flex gap-4 interactive-glow p-4 rounded-lg transition-all duration-300">
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
              
              <div className="flex gap-4 interactive-glow p-4 rounded-lg transition-all duration-300">
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
              
              <div className="flex gap-4 interactive-glow p-4 rounded-lg transition-all duration-300">
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
            
            <div className="relative fade-in-delay">
              <Card className="p-8 glass interactive-glow">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                    <span className="text-sm text-muted-foreground">Processing your content...</span>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4 border-l-4 border-muted">
                    <p className="text-sm">
                      "What are the key concepts from this research paper?"
                    </p>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-4 border-l-4 border-primary">
                    <p className="text-sm">
                      Based on your uploaded research paper, the three key concepts are:<br/>
                      1. Machine Learning Fundamentals...<br/>
                      2. Neural Network Architecture...<br/>
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
      <section 
        className="py-16 bg-gradient-subtle relative"
        style={{
          transform: `translateY(${scrollY * 0.02}px)`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center fade-in">
            <h2 className="text-3xl font-bold mb-8">Built by</h2>
            <div className="flex flex-wrap justify-center gap-8">
              <Card className="p-6 glass interactive-glow hover:scale-105 transition-all duration-300">
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
              
              <Card className="p-6 glass interactive-glow hover:scale-105 transition-all duration-300 delay-75">
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
              
              <Card className="p-6 glass interactive-glow hover:scale-105 transition-all duration-300 delay-150">
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
      <section className="py-20 relative">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Learning?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of learners who are already using Classmate AI to study smarter, not harder.
            </p>
            <Link to="/chat">
              <Button size="lg" className="text-lg px-12 py-6 interactive-glow">
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