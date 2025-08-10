from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from Schemas.prompt import Prompt

app=FastAPI()


@app.get("/")
def home():
    return "Welcome, RAG Server is running Successfully at port 8000"

@app.post("/process_query")
def process_query(prompt:Prompt):
    return f"Prompt: {prompt}"

print("Welcome Raza Ali , RAG server is running at port 8000")


