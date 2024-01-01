import tkinter as tk
from tkinter import filedialog
from PIL import Image
import os

def redimensioneaza_imaginile(dimensiuni, calea_imaginilor):
    for cale in calea_imaginilor:
        img = Image.open(cale)
        img_resized = img.resize(dimensiuni, Image.Resampling.LANCZOS)  # Modificarea aici
        nume_fisier = os.path.basename(cale)
        img_resized.save(f"{nume_fisier}")

def selecteaza_imaginile():
    calea_imaginilor = filedialog.askopenfilenames()
    latime = int(entrata_latime.get())
    inaltime = int(entrata_inaltime.get())
    redimensioneaza_imaginile((latime, inaltime), calea_imaginilor)

# Setare interfata grafica
root = tk.Tk()
root.title("Redimensionare Imagini")

eticheta_latime = tk.Label(root, text="Lățime:")
eticheta_latime.pack()

entrata_latime = tk.Entry(root)
entrata_latime.pack()

eticheta_inaltime = tk.Label(root, text="Înălțime:")
eticheta_inaltime.pack()

entrata_inaltime = tk.Entry(root)
entrata_inaltime.pack()

buton = tk.Button(root, text="Selectează Imaginile", command=selecteaza_imaginile)
buton.pack()

root.mainloop()
