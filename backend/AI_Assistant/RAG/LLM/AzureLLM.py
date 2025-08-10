import os
from dotenv import load_dotenv
import time
from langchain_openai import AzureOpenAIEmbeddings

load_dotenv()
os.system('cls')

api_key=os.getenv("AZURE_Embeded_OPENAI_API_KEY")
azure_endpoint=os.getenv("AZURE_Embeded_OPENAI_ENDPOINT")
deployment_name=os.getenv("AZURE_Embeded_OPENAI_DEPLOYMENT_NAME")
api_version=os.getenv("AZURE_Embeded_OPENAI_API_VERSION")



if(api_key==None or azure_endpoint== None or deployment_name==None or api_version==None):
    raise EnvironmentError("Error loading environmental variables...")

print("->Env loaded successfully.....")
time.sleep(1)
try:
    embeddings=AzureOpenAIEmbeddings(
        api_key=api_key,
        azure_endpoint=azure_endpoint,
        api_version=api_version,
        deployment=deployment_name
    )
except Exception as e:
    print("->Error caling Azure OPEN AI Embeded Model...")
print("->Connected to Azure Open AI Embeded Model.....")
# print(embeddings.embed_query("Hello I am Syed Muhammad Raza Ali Zaidi !!!!!"))


