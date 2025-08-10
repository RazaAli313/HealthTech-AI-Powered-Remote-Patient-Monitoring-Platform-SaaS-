import requests
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()
deepgram_api_key = os.getenv("DEEPGRAM_API_KEY")

def tts_generate(text, voice="aura-asteria-en"):
    """
    Generate TTS audio using Deepgram API.
    voice: Check https://developers.deepgram.com for available voices.
    """
    url = f"https://api.deepgram.com/v1/speak?model={voice}"
    headers = {
        "Authorization": f"Token {deepgram_api_key}",
        "Content-Type": "application/json"
    }

    payload = {
        "text": text
    }

    response = requests.post(url, headers=headers, json=payload)

    if response.status_code != 200:
        raise RuntimeError(f"Deepgram TTS failed: {response.status_code} {response.text}")

    return response.content  # MP3 audio data

# Example usage
if __name__ == "__main__":
    text = "Hello, how are you? This is Deepgram speaking."
    audio_data = tts_generate(text)

    with open("deepgram_tts.mp3", "wb") as f:
        f.write(audio_data)
        print("-> Audio saved as deepgram_tts.mp3")
