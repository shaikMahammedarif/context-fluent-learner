import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Upload, Globe, Youtube, Send, FileText, Brain, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [youtubeInput, setYoutubeInput] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const fileInputRef = useRef(null);
  const messagesEndRef = useRef(null);
  const { toast } = useToast();

  // Load messages from localStorage on component mount
  useEffect(() => {
    const savedMessages = localStorage.getItem('classmate-ai-messages');
    if (savedMessages) {
      const parsed = JSON.parse(savedMessages);
      setMessages(parsed.map((msg) => ({
        ...msg,
        timestamp: new Date(msg.timestamp)
      })));
    }
  }, []);

  // Save messages to localStorage whenever messages change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('classmate-ai-messages', JSON.stringify(messages));
    }
  }, [messages]);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleFileUpload = (files) => {
    if (!files || files.length === 0) return;
    
    const file = files[0];
    const validTypes = ['application/pdf', 'text/plain', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    
    if (!validTypes.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload PDF, TXT, or DOCX files only.",
        variant: "destructive"
      });
      return;
    }

    setIsUploading(true);
    
    // Simulate file upload
    setTimeout(() => {
      setIsUploading(false);
      addMessage('user', `📄 Uploaded: ${file.name}`);
      addMessage('assistant', `Great! I've processed your document "${file.name}". You can now ask me questions about its content. What would you like to know?`);
      toast({
        title: "File uploaded successfully",
        description: `${file.name} has been processed and is ready for questions.`
      });
    }, 2000);
  };

  const handleUrlSubmit = () => {
    if (!urlInput.trim()) return;
    
    setIsUploading(true);
    addMessage('user', `🌐 Website: ${urlInput}`);
    
    setTimeout(() => {
      setIsUploading(false);
      addMessage('assistant', `I've crawled and analyzed the website content from ${urlInput}. Ask me anything about what you'd like to learn from this page!`);
      setUrlInput("");
      toast({
        title: "Website processed",
        description: "The website content has been analyzed and is ready for questions."
      });
    }, 3000);
  };

  const handleYoutubeSubmit = () => {
    if (!youtubeInput.trim()) return;
    
    setIsUploading(true);
    addMessage('user', `🎥 YouTube: ${youtubeInput}`);
    
    setTimeout(() => {
      setIsUploading(false);
      addMessage('assistant', `I've transcribed and processed the YouTube video content. Now you can ask me questions about the video's key points, concepts, or any specific details!`);
      setYoutubeInput("");
      toast({
        title: "YouTube video processed",
        description: "The video transcript has been analyzed and is ready for questions."
      });
    }, 4000);
  };

  const addMessage = (type, content) => {
    const newMessage = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    addMessage('user', inputMessage);
    setInputMessage("");
    setIsThinking(true);
    
    // Simulate AI response with streaming effect
    setTimeout(() => {
      setIsThinking(false);
      const responses = [
        "Based on your uploaded content, here's what I found: The key concepts include advanced machine learning techniques, neural network architectures, and optimization strategies. These fundamentals form the backbone of modern AI systems.",
        "Great question! From the document you shared, I can explain that concept in detail. The research shows that this approach significantly improves performance by leveraging contextual understanding and pattern recognition.",
        "According to the YouTube video transcript, the speaker emphasized three main points: 1) The importance of foundational knowledge, 2) Practical application strategies, and 3) Advanced optimization techniques for better results.",
        "From the website content you provided, I can see this topic covers several important aspects. Let me break down the key information and explain how these concepts connect to your learning goals."
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      addMessage('assistant', randomResponse);
    }, 2000);
  };

  const newChat = () => {
    setMessages([]);
    localStorage.removeItem('classmate-ai-messages');
    toast({
      title: "New chat started",
      description: "Previous conversation has been cleared."
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-background">
      <div className="container mx-auto h-screen flex flex-col lg:flex-row gap-6 p-4">
        
        {/* Left Panel - Upload & Input */}
        <div className="lg:w-1/3 space-y-6">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <Button onClick={newChat} variant="outline" size="sm">
              New Chat
            </Button>
          </div>
          
          <Card className="p-6 glass">
            <h2 className="text-2xl font-bold mb-6 gradient-text">Upload Content</h2>
            
            {/* File Upload */}
            <div className="space-y-4">
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.txt,.docx"
                  onChange={(e) => handleFileUpload(e.target.files)}
                  className="hidden"
                />
                <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="mb-4 text-muted-foreground">
                  Drag and drop your files here, or{" "}
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="text-primary hover:underline"
                  >
                    browse
                  </button>
                </p>
                <p className="text-sm text-muted-foreground">
                  Supports PDF, TXT, and DOCX files
                </p>
              </div>
              
              {isUploading && (
                <div className="flex items-center gap-2 text-primary">
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.1s]" />
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="text-sm">Processing...</span>
                </div>
              )}
            </div>
            
            <Separator className="my-6" />
            
            {/* URL Input */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Website URL</h3>
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="https://example.com"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleUrlSubmit()}
                />
                <Button onClick={handleUrlSubmit} size="sm">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <Separator className="my-6" />
            
            {/* YouTube Input */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Youtube className="h-5 w-5 text-red-500" />
                <h3 className="font-semibold">YouTube URL</h3>
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="https://youtube.com/watch?v=..."
                  value={youtubeInput}
                  onChange={(e) => setYoutubeInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleYoutubeSubmit()}
                />
                <Button onClick={handleYoutubeSubmit} size="sm">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Right Panel - Chat */}
        <div className="lg:w-2/3 flex flex-col">
          <Card className="flex-1 flex flex-col glass">
            <div className="p-6 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Classmate AI</h2>
                  <p className="text-sm text-muted-foreground">Your Learning Companion</p>
                </div>
              </div>
            </div>
            
            {/* Messages */}
            <ScrollArea className="flex-1 p-6">
              <div className="space-y-4">
                {messages.length === 0 ? (
                  <div className="text-center py-12">
                    <FileText className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-xl font-semibold mb-2">Start Learning</h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Upload a document, paste a URL, or share a YouTube link to begin your conversation with Classmate AI.
                    </p>
                  </div>
                ) : (
                  messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-4 rounded-lg ${
                          message.type === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{message.content}</p>
                        <p className="text-xs opacity-70 mt-2">
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  ))
                )}
                
                {isThinking && (
                  <div className="flex justify-start">
                    <div className="bg-muted p-4 rounded-lg">
                      <div className="flex items-center gap-2">
                        <div className="thinking-dots text-muted-foreground">Thinking</div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>
            
            {/* Message Input */}
            <div className="p-6 border-t border-border">
              <div className="flex gap-2">
                <Textarea
                  placeholder="Ask a question about your uploaded content..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  className="min-h-[44px] max-h-32 resize-none"
                />
                <Button 
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isThinking}
                  className="self-end"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Chat;