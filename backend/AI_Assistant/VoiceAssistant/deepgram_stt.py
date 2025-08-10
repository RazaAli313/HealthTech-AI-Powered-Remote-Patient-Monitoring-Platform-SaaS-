import requests
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()
deepgram_api_key = os.getenv("DEEPGRAM_API_KEY")

def stt_transcribe(audio_file_path, model="nova-2"):
    """
    Transcribe audio using Deepgram STT.
    model: Check https://developers.deepgram.com/docs/models for more.
    """
    url = f"https://api.deepgram.com/v1/listen?model={model}"
    headers = {
        "Authorization": f"Token {deepgram_api_key}"
    }

    with open(audio_file_path, "rb") as audio_file:
        response = requests.post(url, headers=headers, data=audio_file)

    if response.status_code != 200:
        raise RuntimeError(f"Deepgram STT failed: {response.status_code} {response.text}")

    result = response.json()
    transcript = result["results"]["channels"][0]["alternatives"][0]["transcript"]
    return transcript

# Example usage
if __name__ == "__main__":
    file_path = "./deepgram_tts.mp3"  # Replace with your audio file
    text = stt_transcribe(file_path)
    print("Transcribed text:", text)
