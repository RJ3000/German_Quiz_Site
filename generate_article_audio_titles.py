from gtts import gTTS
import os

def generate_article_audio(article):
    # Create a directory for article audio files if it doesn't exist
    if not os.path.exists('article_audio'):
        os.makedirs('article_audio')

    filename = f"{article}.mp3"
    filepath = os.path.join('article_audio', filename)
    
    tts = gTTS(article, lang='de')
    tts.save(filepath)
    print(f"Saved audio for '{article}' to {filepath}")

# Generate audio for each article
articles = ["der", "die", "das"]
for article in articles:
    generate_article_audio(article)

print("All article audio files generated.")



