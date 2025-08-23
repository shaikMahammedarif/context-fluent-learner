import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  ArrowLeft, 
  Send, 
  Upload, 
  Link as LinkIcon, 
  Youtube, 
  Brain, 
  FileText,
  Loader2,
  MessageSquare
} from "lucide-react";
import { Link } from "react-router-dom";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [youtubeInput, setYoutubeInput] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [uploadedContent, setUploadedContent] = useState([]);
  const { toast } = useToast();
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  // Load messages from localStorage on component mount
  useEffect(() => {
    const savedMessages = localStorage.getItem('classmate-ai-messages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  // Save messages to localStorage whenever messages change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('classmate-ai-messages', JSON.stringify(messages));
    }
  }, [messages]);

  // Auto scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addMessage = (type, content) => {
    const newMessage = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    setIsUploading(true);
    
    // Simulate file upload
    setTimeout(() => {
      setIsUploading(false);
      files.forEach(file => {
        setUploadedContent(prev => [...prev, { type: 'file', name: file.name, id: Date.now() + Math.random() }]);
        toast({
          title: "File uploaded successfully",
          description: `${file.name} has been processed and is ready for questions.`
        });
      });
    }, 2000);
  };

  const handleUrlSubmit = () => {
    if (!urlInput.trim()) return;
    
    setIsUploading(true);
    
    setTimeout(() => {
      setIsUploading(false);
      setUploadedContent(prev => [...prev, { type: 'url', name: urlInput, id: Date.now() }]);
      toast({
        title: "Website processed",
        description: "Content has been extracted and is ready for questions."
      });
      setUrlInput("");
    }, 3000);
  };

  const handleYoutubeSubmit = () => {
    if (!youtubeInput.trim()) return;
    
    setIsUploading(true);
    
    setTimeout(() => {
      setIsUploading(false);
      setUploadedContent(prev => [...prev, { type: 'youtube', name: youtubeInput, id: Date.now() }]);
      toast({
        title: "YouTube video processed",
        description: "Transcript has been extracted and is ready for questions."
      });
      setYoutubeInput("");
    }, 4000);
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
        "Based on your uploaded content, here's what I found relevant to your question...",
        "From the documents you've shared, I can explain this concept in detail...",
        "Looking at the YouTube video transcript, here are the key points...",
        "According to the website content you provided, this topic involves several important aspects...",
        "I've analyzed your materials and here's a comprehensive answer to your question..."
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      addMessage('assistant', randomResponse);
    }, 2000);
  };

  const newChat = () => {
    setMessages([]);
    setUploadedContent([]);
    localStorage.removeItem('classmate-ai-messages');
    toast({
      title: "New chat started",
      description: "Previous conversation has been cleared."
    });
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Panel - Uploads & Controls */}
      <div className="w-full lg:w-1/3 flex flex-col border-r border-border h-screen">
        {/* Header */}
        <div className="p-6 border-b border-border bg-card">
          <div className="flex items-center justify-between mb-4">
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
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">Classmate AI</h1>
              <p className="text-sm text-muted-foreground">Your Learning Companion</p>
            </div>
          </div>
        </div>

        {/* Upload Section */}
        <div className="p-6 space-y-6 flex-shrink-0">
          <Card className="p-6 glass">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Upload className="h-5 w-5 text-primary" />
              Upload Content
            </h2>
            
            {/* File Upload */}
            <div className="space-y-4">
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept=".pdf,.txt,.docx"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-sm text-muted-foreground mb-2">
                  Drop files here or click to browse
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isUploading}
                >
                  {isUploading ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Upload className="h-4 w-4 mr-2" />
                      Select Files
                    </>
                  )}
                </Button>
                <p className="text-xs text-muted-foreground mt-2">
                  Supports PDF, TXT, DOCX
                </p>
              </div>

              {/* Website URL */}
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <LinkIcon className="h-4 w-4 text-primary" />
                  Website URL
                </label>
                <div className="flex gap-2">
                  <Input
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    placeholder="https://example.com"
                    className="flex-1"
                  />
                  <Button 
                    onClick={handleUrlSubmit} 
                    size="sm"
                    disabled={!urlInput.trim() || isUploading}
                  >
                    Add
                  </Button>
                </div>
              </div>

              {/* YouTube URL */}
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Youtube className="h-4 w-4 text-red-500" />
                  YouTube URL
                </label>
                <div className="flex gap-2">
                  <Input
                    value={youtubeInput}
                    onChange={(e) => setYoutubeInput(e.target.value)}
                    placeholder="https://youtube.com/watch?v=..."
                    className="flex-1"
                  />
                  <Button 
                    onClick={handleYoutubeSubmit} 
                    size="sm"
                    disabled={!youtubeInput.trim() || isUploading}
                  >
                    Add
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Uploaded Content Display */}
          {uploadedContent.length > 0 && (
            <div className="flex-1 p-6 pt-0 overflow-hidden">
              <Card className="p-4 glass h-full flex flex-col">
                <h3 className="text-sm font-semibold mb-3 flex items-center gap-2 flex-shrink-0">
                  <FileText className="h-4 w-4 text-primary" />
                  Uploaded Content ({uploadedContent.length})
                </h3>
                <div className="flex-1 overflow-y-auto space-y-2 pr-2">
                  {uploadedContent.map((item) => (
                    <div key={item.id} className="flex items-center gap-2 p-2 bg-background/50 rounded text-xs">
                      {item.type === 'file' && <FileText className="h-3 w-3 text-green-500" />}
                      {item.type === 'url' && <LinkIcon className="h-3 w-3 text-blue-500" />}
                      {item.type === 'youtube' && <Youtube className="h-3 w-3 text-red-500" />}
                      <span className="flex-1 truncate" title={item.name}>{item.name}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
      
      {/* Right Panel - Chat */}
      <div className="w-full lg:w-2/3 flex flex-col h-screen">
        {/* Chat Header */}
        <div className="p-6 border-b border-border bg-card">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
              <MessageSquare className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="font-semibold">Chat with Your Content</h2>
              <p className="text-sm text-muted-foreground">
                Ask questions about your uploaded materials
              </p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.length === 0 ? (
            <div className="text-center py-12">
              <Brain className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-medium text-muted-foreground mb-2">
                Ready to learn!
              </h3>
              <p className="text-muted-foreground">
                Upload some content and start asking questions
              </p>
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.type === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card border border-border glass'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  <span className="text-xs opacity-70 mt-1 block">
                    {new Date(message.timestamp).toLocaleTimeString()}
                  </span>
                </div>
              </div>
            ))
          )}
          
          {isThinking && (
            <div className="flex justify-start">
              <div className="bg-card border border-border glass rounded-2xl px-4 py-3">
                <div className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin text-primary" />
                  <span className="text-sm text-muted-foreground thinking-dots">
                    Thinking
                  </span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <div className="p-6 border-t border-border bg-card">
          <div className="flex gap-3">
            <Textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask a question about your content..."
              className="flex-1 min-h-[60px] resize-none"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
            />
            <Button 
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isThinking}
              className="self-end interactive-glow"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Press Enter to send, Shift+Enter for new line
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chat;