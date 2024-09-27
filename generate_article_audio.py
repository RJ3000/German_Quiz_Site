import json
import time
import os
from gtts import gTTS
import re

# Function to sanitize filename
def sanitize_filename(filename):
    return re.sub(r'[^\w\-_\. ]', '_', filename)

# Read the article_questions.js file
with open('article_questions.js', 'r', encoding='utf-8') as file:
    content = file.read()

# Extract the array content using regex
match = re.search(r'const\s+articleQuestions\s*=\s*(\[[\s\S]*?\]);', content)
if match:
    array_content = match.group(1)
    # Remove comments
    array_content = re.sub(r'//.*', '', array_content)
    # Replace single quotes with double quotes for property names
    array_content = re.sub(r"(\w+):", r'"\1":', array_content)
    # Replace single quotes with double quotes for string values
    array_content = array_content.replace("'", '"')
    # Remove any trailing commas before closing brackets
    array_content = re.sub(r',\s*([}\]])', r'\1', array_content)
    # Parse the JSON
    try:
        questions = json.loads(array_content)
    except json.JSONDecodeError as e:
        print(f"JSON decode error: {e}")
        print(f"Error occurred near this part of the text: {array_content[max(0, e.pos-50):e.pos+50]}")
        raise
else:
    raise ValueError("Could not find articleQuestions array in the file")

# Create a directory for audio files if it doesn't exist
if not os.path.exists('article_audio'):
    os.makedirs('article_audio')

# Get list of existing audio files
existing_audio_files = set(os.listdir('article_audio'))

# Process each question
new_audio_count = 0
for i, question in enumerate(questions):
    word = question['word']
    
    # Create a filename
    filename = sanitize_filename(f"{word}.mp3")
    filepath = os.path.join('article_audio', filename)
    
    # Check if audio file already exists
    if filename in existing_audio_files:
        print(f"Audio for '{word}' already exists. Skipping.")
    else:
        # Generate and save audio
        tts = gTTS(word, lang='de')
        tts.save(filepath)
        
        print(f"Saved new audio for '{word}' to {filepath}")
        new_audio_count += 1
    
    # Update the question with the audio file path
    questions[i]['audio'] = f"article_audio/{filename}"
    
    # Delay to avoid rate limiting (adjust as needed)
    if new_audio_count > 0 and new_audio_count % 10 == 0:
        print(f"Pausing for 30 seconds after generating {new_audio_count} new audio files...")
        time.sleep(30)

# Write the updated questions back to the file
with open('article_questions.js', 'w', encoding='utf-8') as file:
    file.write("const articleQuestions = ")
    json.dump(questions, file, ensure_ascii=False, indent=2)
    file.write(";")

print(f"All audio files processed. Generated {new_audio_count} new audio files.")
print("article_questions.js updated.")
