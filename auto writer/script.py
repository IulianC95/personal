import tkinter as tk
from tkinter import ttk
import pyautogui
import time
import threading

stop_writing = False  # Variabilă pentru a controla dacă să continuăm să scriem sau nu

def write_text():
    global stop_writing
    stop_writing = False  # Resetăm la fiecare apăsare a butonului de scriere
    text_to_write = text_box.get("1.0", tk.END).strip()
    time.sleep(5)

    try:
        for char in text_to_write:
            if stop_writing:  # Oprim dacă butonul de oprire a fost apăsat
                break
            pyautogui.typewrite(char, interval=0.1)
    except RuntimeError:
        print("A avut loc o eroare, dar am continuat.")

def stop_text():
    global stop_writing
    stop_writing = True  # Setează variabila pentru a opri scrierea

root = tk.Tk()
root.title('Text Writer')

text_box = tk.Text(root, width=50, height=10)
text_box.grid(row=0, column=0)

write_button = ttk.Button(root, text='Write Text', command=lambda: threading.Thread(target=write_text).start())
write_button.grid(row=1, column=0)

stop_button = ttk.Button(root, text='Stop Writing', command=stop_text)  # Buton nou pentru a opri scrierea
stop_button.grid(row=1, column=1)

root.mainloop()
