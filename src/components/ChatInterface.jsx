import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage } from '../store/interactionSlice';
import { Send, Sparkles } from 'lucide-react';

const ChatInterface = () => {
  const messages = useSelector((state) => state.interaction.chatMessages);
  const [input, setInput] = useState('');
  const scrollRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch(addMessage({ id: Date.now(), role: 'user', content: input }));
    setInput('');
  };

  return (
    <div className="flex flex-col h-full bg-white relative">
      {/* Messaging Area */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-6 space-y-6"
      >
        <div className="bg-[#f8fafc] border border-slate-100 rounded-xl p-4 shadow-sm">
          <p className="text-sm text-slate-600 leading-relaxed font-medium">
            Log interaction details here (e.g., "Met Dr. Smith, discussed Product X efficacy, positive sentiment, shared brochure") or ask for help.
          </p>
        </div>

        {messages.filter(m => m.id !== 1).map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-3 rounded-xl text-sm ${
              msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-slate-50 text-slate-800 border border-slate-100'
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-slate-100 bg-[#f8fafc]">
        <form onSubmit={handleSend} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe Interaction..."
            className="flex-1 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none"
          />
          <button 
            type="submit"
            className="px-4 py-2 bg-[#64748b] text-white rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-slate-600 transition-all"
          >
            <Sparkles size={14} /> Log
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;
