from langchain_community.document_loaders import TextLoader,CSVLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_chroma import Chroma
from LLM.AzureLLM import embeddings
import time
import sys
CSV_FILEPATH="./services/Health.csv"
try:
    # loader=TextLoader("services/Health.txt")
    loader=CSVLoader(CSV_FILEPATH)
    # print("->Initializing Loader for Health.txt.....")
    print("->Initializing Loader for Health.csv.....")
    time.sleep(1)
except  Exception as e:
    print("->Error: Health.txt not found... ")
# print("->Loader initialized for Health.txt successfully.....")
print("->Loader initialized for Health.csv successfully.....")
time.sleep(1)
docs=loader.load()
# print("->Loaded  Health.txt successfully.....")
print("->Loaded  Health.csv successfully.....")
try:
    splitter=RecursiveCharacterTextSplitter(
     chunk_size=500,
     chunk_overlap=5
     )
    # print("->Splitter initialized for Health.txt successfully.....")
    print("->Splitter initialized for Health.csv successfully.....")
    time.sleep(1)
except Exception as e:
     print("Error initializing Text Splitter...")
try:
    
    chunks=splitter.split_documents(docs)
    print("->Chunks generated.....")
    time.sleep(1)

except Exception as e:
    print("Error while chunking...",e)
try:
     
     vector_store=Chroma.from_documents(
     documents=chunks,
     embedding=embeddings,
     persist_directory="chroma_db",
     collection_name="HealthAI",
     collection_metadata={"description":"Health AI is a global personalized Health AI assistant"}
)
     print("->Vector store indexing generated successfully.....")
except Exception as e:
    print("Error indexing Vector Store...",str(e))



sys.exit()