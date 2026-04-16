# LifeDash AI CRM - LangGraph Agent Analysis

## Agent Role in HCP Interactions
The LangGraph agent acts as a **Stateful Interaction Orchestrator**. Unlike traditional linear bots, the LangGraph agent maintains a complex state that evolves as the field representative provides information.

### Key Responsibilities:
1. **Context Management**: It keeps track of which HCP is being discussed and ensures all subsequent messages are linked to that specific profile.
2. **Dynamic Routing**: Based on the rep's input (e.g., "I need to update my last call"), the agent routes the conversation to the specific `edit_interaction` logic rather than a new log.
3. **Data Integrity**: It ensures that mandatory medical compliance fields (e.g., product name, discussion sentiment) are extracted from the natural language conversation before allowing the log to be submitted.

## Defined AI Agent Tools

### 1. Log Interaction (Required)
- **Role**: Structured Data Capture.
- **Functionality**: Uses LLM entity extraction (NER) to parse raw voice-to-text transcripts into a structured JSON format. It identifies:
    - **HCP Entity**: Cross-references mentioned names with the database.
    - **Medical Products**: Flags specific life-science brands mentioned.
    - **Key Messaging**: Summarizes the "call notes" into bullet points.
    - **Sentiment Analysis**: Detects the HCP's reception of the product (Adoption, Skepticism, Resistance).

### 2. Edit Interaction (Required)
- **Role**: Rectification and Refinement.
- **Functionality**: Allows reps to make natural language updates to existing logs. 
    - *Example*: "Actually, Dr. Mitchell also asked for more data on the Pediatric trial, add that to the follow-up."
    - The tool retrieves the state of the specific log ID and merges the new entities into the existing fields.

### 3. Search HCP Profile
- **Role**: Strategic Preparation.
- **Functionality**: A RAG (Retrieval-Augmented Generation) tool that queries the CRM database to provide the rep with a summary of the HCP's historical preferences, past concerns, and specialty-specific interests before or during the call.

### 4. Schedule Follow-Up
- **Role**: Automated Execution.
- **Functionality**: Parses the rep's intent for next steps (e.g., "Set a meeting for next week") and interfaces with Google/Outlook calendars to block time or create "To-Do" tasks in the LifeDash dashboard.

### 5. Get Medical Insights
- **Role**: Real-time Clinical Support.
- **Functionality**: Acts as a "Medical Science Liaison" in the rep's pocket. It retrieves verified clinical trial results, safety data, or product FAQs to provide accurate answers to unexpected HCP questions, ensuring compliance by using only company-approved sources.
