# LifeDash AI CRM - HCP Interaction Module

LifeDash is an AI-first Customer Relationship Management (CRM) system specifically designed for the Life Sciences industry. It empowers field representatives to capture high-quality, structured data from Healthcare Professional (HCP) interactions through a seamless hybrid interface.

![LifeDash Screenshot](https://raw.githubusercontent.com/placeholder-path/screenshot.png)

## 🌟 Core Features

### 1. Hybrid Interaction Logging
- **Structured Form**: A comprehensive medical-grade form for precise data entry, including HCP sentiment tracking (Positive/Neutral/Negative), materials shared, and sample distribution.
- **Conversational AI Assistant**: A real-time chat interface powered by **Groq (Gemma-2-9B)** that extracts entities and conversation context from natural language, automatically populating the CRM form.

### 2. Intelligent AI Agent (LangGraph)
- **Log Interaction Tool**: Summarizes transcripts and extracts key medical entities.
- **Edit Interaction Tool**: Allows natural language refinement of existing logs.
- **Search HCP Profile**: RAG-enabled context retrieval for physician specialties and past behaviors.
- **Auto-Scheduling**: Intelligence-driven follow-up task creation.
- **Medical Insights**: Real-time retrieval of clinical trial data and product FAQs.

### 3. Premium Field Experience
- **Inter (Google Font)** based typography for clinical clarity.
- **Aesthetic UI**: Modern, high-performance interface with glassmorphism and sophisticated spacing.
- **Responsive Design**: Optimized for field reps on the go.

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite 5, Redux Toolkit, Framer Motion, Lucide Icons.
- **Backend**: Python 3.10+, FastAPI.
- **AI Framework**: LangGraph (for multi-step agentic workflows).
- **LLM Engine**: Groq (Gemma-2-9B-IT / Llama-3.3-70B-Versatile).
- **Database**: PostgreSQL / SQLAlchemy.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- Python (v3.10+)
- Groq API Key

### Frontend Setup
```bash
cd lifedash-crm
npm install
npm run dev
```
The frontend will be available at `http://localhost:3000`.

### Backend Setup
```bash
cd lifedash-crm/backend
python -m venv venv
source venv/bin/activate  # On Windows: .\venv\Scripts\activate
pip install -r requirements.txt
python main.py
```
The backend API will be available at `http://localhost:8000`.

## 📂 Project Structure

```text
├── backend/                # FastAPI & LangGraph Agent logic
│   ├── agent.py            # LangGraph State Machine & Tools
│   └── main.py             # API Endpoints
├── src/                    # React Frontend
│   ├── components/         # UI Components (LogInteraction, ChatInterface, etc.)
│   ├── store/              # Redux State Management
│   └── assets/             # Branding assets
└── README.md
```

## 📜 Compliance & Safety
LifeDash is built with Life Sciences compliance in mind, featuring built-in prompts for medical representative constraints and data privacy (PII/PHI) guardrails.

---
*Built for Advanced Agentic Coding - Life Sciences Track.*
