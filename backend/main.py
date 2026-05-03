from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import time

app = FastAPI(title="ANO E-Commerce API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For development. Should be restricted in production.
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str
    history: list[dict] = []

class ChatResponse(BaseModel):
    reply: str

from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import os

@app.get("/{full_path:path}")
def serve_spa(full_path: str):
    # Ignore API routes
    if full_path.startswith("api/"):
        raise HTTPException(status_code=404, detail="Not found")
        
    file_path = f"static/{full_path}"
    if os.path.isfile(file_path):
        return FileResponse(file_path)
    
    index_path = "static/index.html"
    if os.path.isfile(index_path):
        return FileResponse(index_path)
        
    return {"message": "Welcome to the ANO Backend API (Frontend not built)"}

@app.post("/api/chat", response_model=ChatResponse)
def chat_with_assistant(req: ChatRequest):
    # Simulate a sophisticated AI response regarding style and fit
    time.sleep(1) # Simulate AI processing time
    
    user_msg = req.message.lower()
    reply = ""

    if "fit" in user_msg or "size" in user_msg:
        reply = "Our t-shirts are designed with a tailored modern fit. If you prefer a more relaxed look, we recommend sizing up. The Heavyweight offers a boxier silhouette, while the Supima Classic is more true-to-size."
    elif "fabric" in user_msg or "material" in user_msg or "cotton" in user_msg:
        reply = "We source only the finest materials. Our heavyweight tees use 240gsm organic cotton, while our classic collection is spun from 100% Supima cotton for unparalleled softness and durability."
    elif "color" in user_msg:
        reply = "Our color palette is carefully curated to offer timeless, versatile hues. They are dyed using eco-friendly processes that ensure the colors remain vibrant wash after wash."
    else:
        reply = "Welcome to ANO's styling concierge. I can help you find the perfect fit, recommend fabrics based on your preferences, or answer any questions about our collection. How can I assist you today?"
    
    return {"reply": reply}
