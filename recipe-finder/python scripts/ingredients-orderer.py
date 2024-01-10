
def sort_ingredients(input_file, output_file):
    # Citirea ingredientelor din fișierul de intrare
    with open(input_file, 'r') as file:
        contents = file.read().split('},')

    # Extragerea ingredientelor și a imaginilor acestora
    ingredients = []
    for line in contents:
        if 'name' in line:
            # Adăugarea unei închideri de acoladă dacă lipsește
            ingredient = line.strip() + ('}' if '}' not in line else '')
            ingredients.append(ingredient)

    # Sortarea ingredientelor după nume
    ingredients.sort(key=lambda x: x.split("'")[1])  # Sortare după numele ingredientului

    # Scrierea ingredientelor sortate în fișierul de ieșire
    with open(output_file, 'w') as file:
        for ingredient in ingredients:
            file.write(f"{ingredient},\n")

# Utilizarea funcției cu căile specificate
sort_ingredients('python scripts/ingredients.js', 'python scripts/oredered-ingredients.js')
