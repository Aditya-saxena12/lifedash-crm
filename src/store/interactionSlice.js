import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeInteraction: {
    hcpName: '',
    hcpSpecialty: '',
    interactionDate: new Date().toISOString().split('T')[0],
    product: '',
    discussionPoints: '',
    followUpDate: '',
    sentiment: 'neutral', // neutral, positive, negative
    isStructured: true, // toggle between form and chat
  },
  chatMessages: [
    { id: 1, role: 'assistant', content: 'Hello! I am your AI CRM assistant. How was your meeting with the HCP today?' }
  ],
  isExtracting: false,
};

export const interactionSlice = createSlice({
  name: 'interaction',
  initialState,
  reducers: {
    updateForm: (state, action) => {
      state.activeInteraction = { ...state.activeInteraction, ...action.payload };
    },
    addMessage: (state, action) => {
      state.chatMessages.push(action.payload);
    },
    setExtractionMode: (state, action) => {
      state.isExtracting = action.payload;
    },
    toggleInterface: (state) => {
      state.activeInteraction.isStructured = !state.activeInteraction.isStructured;
    },
    resetInteraction: (state) => {
      state.activeInteraction = initialState.activeInteraction;
      state.chatMessages = initialState.chatMessages;
    }
  },
});

export const { updateForm, addMessage, setExtractionMode, toggleInterface, resetInteraction } = interactionSlice.actions;
export default interactionSlice.reducer;
