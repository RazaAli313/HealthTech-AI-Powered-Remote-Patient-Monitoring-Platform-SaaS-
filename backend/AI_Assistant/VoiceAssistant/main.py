import requests
import os
from dotenv import load_dotenv


load_dotenv()

elevenLabs_api_key=os.getenv("ELEVEN_LABS_API_KEY")
voice_id=os.getenv("ELEVEN_LABS_VOICE_ID")


def tts_generate(text):

    url=f"https://api.elevenlabs.io/v1/text-to-speech/{voice_id}"
    headers={
        "xi-api-key":elevenLabs_api_key,
        "accept":"audio/mpeg",
        "Content-Type":"application/json"
    }


    payload={
      "text":text,
      "model_id":"eleven_monolingual_v1",
      "voice_settings": {
            "stability": 0.45,
            "similarity_boost": 0.75
        }
    }
    res=requests.post(url,json=payload,headers=headers,timeout=50)
    if res.status_code !=200:
       raise RuntimeError(f"Eleven Labs failed ,{res.status_code}  {res.text}")
    return res.content

text="Hello How are you ? Syed Muhammad Raza Ali Zaidi"
audio=tts_generate(text)

with open("audio.mp3","wb") as f:
    f.write(audio)
    print("->Audio saved as audio.mp3.....")
