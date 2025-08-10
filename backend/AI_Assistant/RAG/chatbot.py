from langchain_chroma import Chroma
from LLM.AzureLLM import embeddings
import time
import os
vector_store=Chroma(
    persist_directory="chroma_db",
    collection_name="HealthAI",
    embedding_function=embeddings
)
retriever=vector_store.as_retriever()
# retriever=vector_store.as_retriever(search_kwargs={"k":2})
result=retriever.invoke("Tell me what to do for first aid")
time.sleep(2)
os.system("cls")
print("Searching in Vector Store.....")
print(len(result))
# for doc in result:
#     print(doc.page_content,end="\n---------------------------------\n")