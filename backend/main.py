from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional
import uvicorn

try:
    from agent import agent
    AGENT_AVAILABLE = True
except ImportError:
    AGENT_AVAILABLE = False

app = FastAPI(title="LifeDash AI CRM API")

class ChatInput(BaseModel):
    message: str
    history: Optional[List[dict]] = []

class Interaction(BaseModel):
    hcp_id: str
    product_id: str
    content: str

@app.get("/")
async def root():
    return {"message": "LifeDash API is online"}

@app.post("/chat")
async def chat_interaction(input_data: ChatInput):
    """
    Endpoint for the conversational CRM assistant.
    Uses the LangGraph agent to process messages and return structured outcomes.
    """
    try:
        if AGENT_AVAILABLE:
            # State initialization for LangGraph
            initial_state = {
                "messages": [{"role": "user", "content": input_data.message}],
                "hcp_context": {},
                "interaction_data": {},
                "next_action": ""
            }
            # result = agent.invoke(initial_state)
        
        # Mock response for demonstration when Agent is not fully setup
        return {
            "response": f"AI Assistant (Demo Mode) processed: {input_data.message}",
            "extracted_data": {
                "hcp_name": "Dr. Sarah Mitchell",
                "product": "Zenitram-B",
                "sentiment": "Positive"
            }
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/interactions/log")
async def log_interaction(data: Interaction):
    """
    Direct endpoint for the structured form submission.
    """
    return {"status": "success", "log_id": "INT-987"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
