import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import StructuredForm from './StructuredForm';
import ChatInterface from './ChatInterface';

const LogInteraction = () => {
  return (
    <div className="bg-[#f2f4f7] min-h-screen p-8">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-[#1a1c1e]">Log HCP Interaction</h2>
        
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Main Form Area */}
          <div className="flex-1 w-full lg:w-2/3">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8">
              <h3 className="text-lg font-bold mb-8 text-[#1a1c1e] border-b border-slate-100 pb-4">Interaction Details</h3>
              <StructuredForm />
            </div>
          </div>

          {/* AI Assistant Sidebar */}
          <div className="w-full lg:w-1/3 sticky top-8">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col h-[85vh]">
              <div className="p-4 border-b border-slate-100 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">AI Assistant</h4>
                  <p className="text-[10px] text-slate-500 font-medium">Log Interaction via chat</p>
                </div>
              </div>
              <ChatInterface />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInteraction;
