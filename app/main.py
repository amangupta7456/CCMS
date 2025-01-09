from fastapi import FastAPI, HTTPException
from app.models import ClientConfig
from app import crud
from typing import List
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow CORS for React's frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React frontend's URL
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)

@app.get("/")
async def read_root():
    return {"message": "Welcome to the Client Configuration Management System"}

@app.post("/configurations", response_model=ClientConfig)
async def create_config(client_config: ClientConfig):
    return await crud.create_client_config(client_config)
    try:
        return await crud.create_client_config(client_config)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/configurations", response_model=List[ClientConfig])
async def get_all_configs():
    try:
        return await crud.get_all_client_configs()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/configurations/{client_id}", response_model=ClientConfig)
async def read_config(client_id: str):
    client_config = await crud.get_client_config(client_id)
    if client_config is None:
        raise HTTPException(status_code=404, detail="Client configuration not found")
    return client_config

@app.put("/configurations/{client_id}", response_model=ClientConfig)
async def update_config(client_id: str, client_config: ClientConfig):
    updated_config = await crud.update_client_config(client_id, client_config)
    if updated_config is None:
        raise HTTPException(status_code=404, detail="Client configuration not found")
    return updated_config

@app.delete("/configurations/{client_id}")
async def delete_config(client_id: str):
    result = await crud.delete_client_config(client_id)
    if result["status"] == "failure":
        raise HTTPException(status_code=404, detail="Client configuration not found")
    return result
