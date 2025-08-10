import kagglehub
import os
import pandas as pd
import chardet

CSV_file=None
# file_path="Final_Augmented_dataset_Diseases_and_Symptoms.csv"
dataset=kagglehub.dataset_download("dhivyeshrk/diseases-and-symptoms-dataset")

for root,dirs,files in os.walk(dataset):
    for f in files:
        if f.endswith(".csv"):
            CSV_file=os.path.join(root,f)
            break
if not CSV_file:
     raise FileNotFoundError

with open(CSV_file,"rb") as f:
    data=f.read(1000000)
    result=chardet.detect(data)
    encoding=result["encoding"]
    print(f"Encoding detected as : {encoding}")

df=pd.read_csv(CSV_file,encoding=encoding)
print(df)