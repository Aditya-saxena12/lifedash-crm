import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateForm } from '../store/interactionSlice';
import { Search, Plus, Mic, Sparkles } from 'lucide-react';

const StructuredForm = () => {
  const form = useSelector((state) => state.interaction.activeInteraction);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateForm({ [name]: value }));
  };

  return (
    <div className="space-y-8">
      {/* Row 1: HCP Name & Interaction Type */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold text-[#4a4c4e]">HCP Name</label>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search or select HCP..."
              className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50/30 focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-[#4a4c4e]">Interaction Type</label>
          <select className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50/30 focus:outline-none focus:ring-1 focus:ring-blue-400 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E')] bg-[length:20px_20px] bg-[right_10px_center] bg-no-repeat">
            <option>Meeting</option>
            <option>Phone Call</option>
            <option>Email</option>
          </select>
        </div>
      </div>

      {/* Row 2: Date & Time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold text-[#4a4c4e]">Date</label>
          <input 
            type="date" 
            value={form.interactionDate}
            onChange={handleChange}
            name="interactionDate"
            className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50/30"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-[#4a4c4e]">Time</label>
          <input 
            type="time" 
            className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50/30"
          />
        </div>
      </div>

      {/* Row 3: Attendees */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-[#4a4c4e]">Attendees</label>
        <input 
          type="text" 
          placeholder="Enter names or search..."
          className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50/30"
        />
      </div>

      {/* Row 4: Topics Discussed */}
      <div className="space-y-2 relative">
        <label className="text-xs font-bold text-[#4a4c4e]">Topics Discussed</label>
        <textarea 
          rows="3"
          placeholder="Enter key discussion points..."
          className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50/30 resize-none"
        ></textarea>
        <button className="absolute right-3 bottom-3 text-slate-400 hover:text-blue-500">
          <Mic size={16} />
        </button>
      </div>

      <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold hover:bg-slate-200 transition-colors">
        <Sparkles size={14} className="text-blue-400" />
        Summarize from Voice Note (Requires Consent)
      </button>

      {/* Row 5: Materials Shared */}
      <div className="space-y-6">
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-slate-500">Materials Shared / Samples Distributed</h4>
          <div className="p-4 border border-dashed border-slate-200 rounded-lg space-y-4">
             <div className="flex justify-between items-center">
                <span className="text-xs text-slate-400 italic">No materials added.</span>
                <button className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50">
                  <Search size={14} /> Search/Add
                </button>
             </div>
             <div className="pt-4 border-t border-slate-50 flex justify-between items-center">
                <span className="text-xs text-slate-400 italic">No samples added.</span>
                <button className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50">
                  <Plus size={14} /> Add Sample
                </button>
             </div>
          </div>
        </div>
      </div>

      {/* Row 6: Sentiment */}
      <div className="space-y-4">
        <label className="text-xs font-bold text-slate-500">Observed/Inferred HCP Sentiment</label>
        <div className="flex items-center gap-8">
          {[
            { label: 'Positive', emoji: '😊' },
            { label: 'Neutral', emoji: '😐' },
            { label: 'Negative', emoji: '😞' }
          ].map((s) => (
            <label key={s.label} className="flex items-center gap-2 cursor-pointer group">
              <input type="radio" name="sentiment" className="w-4 h-4 accent-blue-600 cursor-pointer" />
              <div className="flex items-center gap-1.5 group-hover:bg-slate-50 px-2 py-1 rounded transition-colors">
                <span className="text-lg">{s.emoji}</span>
                <span className="text-xs font-bold text-slate-600">{s.label}</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Row 7: Outcomes & Follow-up */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-[#4a4c4e]">Outcomes</label>
        <textarea 
          placeholder="Key outcomes or agreements..."
          className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50/30 resize-none h-20"
        ></textarea>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold text-[#4a4c4e]">Follow-up Actions</label>
        <textarea 
          placeholder="Enter next steps or tasks..."
          className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50/30 resize-none h-20"
        ></textarea>
      </div>

      {/* Row 8: AI Suggestions */}
      <div className="pt-4 space-y-2">
        <h5 className="text-[10px] font-black uppercase tracking-widest text-blue-600">AI Suggested Follow-ups:</h5>
        <ul className="space-y-1">
          <li className="text-xs font-bold text-[#4a4c4e] hover:text-blue-600 cursor-pointer transition-colors">+ Schedule follow-up meeting in 2 weeks</li>
          <li className="text-xs font-bold text-[#4a4c4e] hover:text-blue-600 cursor-pointer transition-colors">+ Send OncoBoost Phase III PDF</li>
          <li className="text-xs font-bold text-[#4a4c4e] hover:text-blue-600 cursor-pointer transition-colors">+ Add Dr. Sharma to advisory board invite list</li>
        </ul>
      </div>
    </div>
  );
};

export default StructuredForm;
