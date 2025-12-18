
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, Sparkles } from 'lucide-react';
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

export const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Ref to persist the chat session across renders
  const chatRef = useRef<any>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsLoading(true);

    // Add an empty AI message that we'll stream into
    setMessages(prev => [...prev, { role: 'ai', text: '' }]);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Initialize chat session if it doesn't exist
      if (!chatRef.current) {
        chatRef.current = ai.chats.create({
          model: 'gemini-3-flash-preview',
          config: {
            systemInstruction: `You are an AI assistant representing Abdullah Pervaiz, a professional video editor and thumbnail designer.
            
            CRITICAL FORMATTING RULES:
            - DO NOT use any markdown formatting. No asterisks (*), no hashes (#), no bolding symbols.
            - Use plain text only. 
            - Use clear line breaks to separate ideas.
            - Keep responses concise, punchy, and professional.
            
            Key facts about Abdullah:
            - Specializes in high-retention video editing and High-CTR thumbnail design.
            - 5+ years experience, 50M+ total views.
            - Tone: Confident, Aesthetic, Results-oriented.
            
            If asked about pricing: Suggest booking a direct consultation.
            Software: Adobe Premiere Pro, After Effects, Photoshop.
            Use occasional emojis like ✨ 🚀 🎬.`
          }
        });
      }

      const result = await chatRef.current.sendMessageStream({ message: userMessage });
      
      let fullResponse = "";
      for await (const chunk of result) {
        const chunkText = (chunk as GenerateContentResponse).text;
        if (chunkText) {
          fullResponse += chunkText;
          setMessages(prev => {
            const newMessages = [...prev];
            const lastMessage = newMessages[newMessages.length - 1];
            if (lastMessage && lastMessage.role === 'ai') {
              lastMessage.text = fullResponse;
            }
            return newMessages;
          });
        }
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => {
        const newMessages = [...prev];
        const lastMessage = newMessages[newMessages.length - 1];
        if (lastMessage && lastMessage.role === 'ai') {
          lastMessage.text = "I'm having a brief connection issue. Please try again or email Abdullah directly!";
        }
        return newMessages;
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="w-[350px] md:w-[400px] h-[500px] rounded-3xl glass border-white/10 shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="p-4 border-b border-white/5 bg-white/5 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <Bot className="w-6 h-6 text-black" />
              </div>
              <div>
                <div className="text-sm font-bold">Creative Strategist</div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Live AI Consultation</div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
              <X className="w-5 h-5 text-zinc-400" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <div className="text-center py-8">
                <Sparkles className="w-8 h-8 text-zinc-700 mx-auto mb-4" />
                <p className="text-sm text-zinc-400 px-8">
                  Need a strategy for your next viral video? Ask me anything about editing, design, or retention.
                </p>
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 px-4 rounded-2xl text-sm whitespace-pre-wrap ${
                  msg.role === 'user' 
                    ? 'bg-white text-black font-medium' 
                    : 'glass border-white/10 text-zinc-300'
                }`}>
                  {msg.text}
                  {msg.role === 'ai' && msg.text === '' && (
                    <span className="inline-flex gap-1">
                      <span className="w-1 h-1 bg-zinc-500 rounded-full animate-pulse" />
                      <span className="w-1 h-1 bg-zinc-500 rounded-full animate-pulse delay-75" />
                      <span className="w-1 h-1 bg-zinc-500 rounded-full animate-pulse delay-150" />
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-white/5 bg-[#0c0c0c]">
            <div className="relative">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="w-full py-3 pl-4 pr-12 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-white/20 text-sm"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-white text-black disabled:opacity-50 transition-opacity"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-white text-black shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group"
        >
          <MessageSquare className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        </button>
      )}
    </div>
  );
};
