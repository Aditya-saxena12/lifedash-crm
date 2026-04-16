from typing import Annotated, TypedDict, List, Dict, Any
from langgraph.graph import StateGraph, END
from langchain_core.messages import BaseMessage, HumanMessage, AIMessage
from langchain_groq import ChatGroq
import os

# Define the state for the Graph
class AgentState(TypedDict):
    messages: List[BaseMessage]
    hcp_context: Dict[str, Any]
    interaction_data: Dict[str, Any]
    next_action: str

# Initialize the LLM (using Groq as requested)
llm = ChatGroq(
    model="gemma2-9b-it",
    api_key=os.getenv("GROQ_API_KEY", "YOUR_API_KEY_HERE")
)

# --- Tool Definitions ---

def log_interaction(state: AgentState):
    """
    Captures interaction data, extracting entities like HCP ID, Product,
    Sentiment, and Discussion contents.
    """
    print("--- LOGGING INTERACTION ---")
    # In a real app, this would use the LLM to parse messages and save to DB
    return {"interaction_data": {"status": "success", "id": "INT-123"}}

def edit_interaction(state: AgentState):
    """
    Modifies an existing interaction log based on user instructions.
    """
    print("--- EDITING INTERACTION ---")
    return {"interaction_data": {"status": "updated", "id": "INT-123"}}

def search_hcp_profile(state: AgentState):
    """
    Retrieves the rich profile of an HCP including past behaviors and preferences.
    """
    print("--- SEARCHING HCP PROFILE ---")
    return {"hcp_context": {"specialty": "Oncology", "top_product": "Zenitram-B"}}

def schedule_follow_up(state: AgentState):
    """
    Automatically creates a task or calendar event based on the conversation outcomes.
    """
    print("--- SCHEDULING FOLLOW UP ---")
    return {"next_action": "calendar_invite_sent"}

def get_medical_insights(state: AgentState):
    """
    Fetches the latest clinical trial data and product FAQ for real-time sales support.
    """
    print("--- FETCHING CLINICAL DATA ---")
    return {"hcp_context": {"insight": "Last trial showed 15% better efficacy in EGFR+ patients"}}

# --- Graph Logic ---

graph = StateGraph(AgentState)

# Add Nodes
graph.add_node("process_input", lambda state: {"messages": state["messages"]})
graph.add_node("extract_entities", log_interaction)
graph.add_node("update_interaction", edit_interaction)
graph.add_node("query_hcp", search_hcp_profile)

# Define edges and conditional routing
graph.set_entry_point("process_input")
graph.add_edge("process_input", "extract_entities")
graph.add_edge("extract_entities", END)

# Compile the graph
agent = graph.compile()
