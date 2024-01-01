import json

def adauga_ingredientele(fisier_sursa, fisier_destinatie):
    # Citeste ingredientele din fiecare rețetă din fișierul sursa
    with open(fisier_sursa, 'r') as file:
        retete = json.load(file)
        ingredientele_sursei = set()
        for reteta in retete:
            ingredientele_sursei.update(reteta.get('ingredients', []))

    # Citeste datele din fisierul destinatie si actualizeaza ingredientele
    try:
        with open(fisier_destinatie, 'r') as file:
            date_destinatie = json.load(file)
            ingredientele_destinatiei = set(date_destinatie.get('ingredients', []))
    except FileNotFoundError:
        date_destinatie = {}
        ingredientele_destinatiei = set()

    # Uneste ingredientele si salveaza-le in fisierul destinatie
    ingredientele_unite = list(ingredientele_destinatiei.union(ingredientele_sursei))
    date_destinatie['ingredients'] = ingredientele_unite

    with open(fisier_destinatie, 'w') as file:
        json.dump(date_destinatie, file, indent=4)

# Exemplu de utilizare
adauga_ingredientele('/home/iulian/curs/personal/personal/recipe-finder/src/app/components/core/pages/category/json-files/breakfast-recipes.json', 'fisier_destinatie.json')
