
#import pyttsx3

#engine = pyttsx3.init()

#text = input("Enter text: ")
#engine.save_to_file(
#    text=text, filename="voice.mp3"
#)
#engine.runAndWait()

#print("Audio saved to voice.mp3")



import pyttsx3

engine = pyttsx3.init()
text = input("Enter text: ")
print(f"Text: {text}")
engine.save_to_file(
    text=text, filename="voice.mp3"
)
print("Attempting to save audio to voice.mp3")
engine.runAndWait()
print("Audio saved to voice.mp3")



