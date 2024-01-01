import requests
from bs4 import BeautifulSoup
import json

def scrape_recipe_details(recipe_page_url):
    response = requests.get(recipe_page_url)
    soup = BeautifulSoup(response.text, 'html.parser')
    ingredients_list = []
    ingredients_section = soup.find('section', class_='recipe__ingredients')
    if ingredients_section:
        for li in ingredients_section.find_all('li', class_='list-item'):
            # Extract text from anchor if available, else from entire list item
            anchor = li.find('a', class_='link link--styled')
            ingredient_text = anchor.get_text(strip=True) if anchor else li.get_text(strip=True)
            ingredients_list.append(ingredient_text)
    return ingredients_list



def scrape_recipes(main_url):
    response = requests.get(main_url)
    soup = BeautifulSoup(response.text, 'html.parser')
    recipes = []

    for article in soup.find_all('article', class_='card'):
        title_element = article.find('h2', class_='heading-4')
        image_element = article.find('img', class_='image__img')
        link_element = article.find('a', class_='link')

        if title_element and image_element and link_element:
            title = title_element.get_text(strip=True)
            image_url = image_element['src']
            recipe_url = 'https://www.bbcgoodfood.com' + link_element['href']
            ingredients = scrape_recipe_details(recipe_url)
            recipes.append({'title': title, 'image_url': image_url, 'recipe_url': recipe_url, 'ingredients': ingredients})

    return recipes

def export_to_json_file(recipes, filename):
    try:
        with open(filename, 'r') as file:
            existing_data = json.load(file)
    except (FileNotFoundError, json.JSONDecodeError):
        existing_data = []

    existing_data.extend(recipes)

    with open(filename, 'w') as file:
        json.dump(existing_data, file)

url = 'https://www.bbcgoodfood.com/search?q=seafood&page=9'
recipes_data = scrape_recipes(url)
export_to_json_file(recipes_data, 'bbcgoodfood_smoothies.json')
