import requests
from bs4 import BeautifulSoup

# Functie pentru a extrage detaliile unei retete
def scrape_recipe(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    # Numele retetei
    name = soup.select_one('.entry-title').text.strip()

    # Imaginea retetei
    image = soup.select_one('.post-image img')['src']

    # Ingredientele
    ingredients = [li.text.strip() for li in soup.select('.wprm-recipe-ingredient')]

    return {
        'name': name,
        'image': image,
        'ingredients': ingredients,
        'link': url
    }

# URL-ul site-ului de unde dorim sa extragem retetele
base_url = "https://www.lauraadamache.ro/"

# Extragerea linkurilor retetelor de pe prima pagina
response = requests.get(base_url)
soup = BeautifulSoup(response.text, 'html.parser')
recipe_links = [a['href'] for a in soup.select('.post-image a')[:10]]

# Extragerea si afisarea informatiilor pentru fiecare reteta
recipes = [scrape_recipe(url) for url in recipe_links]

# Gruparea retetelor 4 cate 4
grouped_recipes = [recipes[i:i+4] for i in range(0, len(recipes), 4)]

# Afisarea primului grup de retete
for recipe in grouped_recipes[0]:
    print(recipe)
