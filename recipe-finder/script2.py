import json
import tkinter as tk
from tkinter import simpledialog

def read_json(file_path):
    with open(file_path, 'r') as file:
        return json.load(file)

def save_json(file_path, data):
    with open(file_path, 'w') as file:
        json.dump(data, file, indent=4)

def edit_ingredients(ingredients, update_callback):
    for i, ingredient in enumerate(ingredients):
        print(f"{i+1}: {ingredient}")
    print("\nEdit ingredients (format: index:new_ingredient). Type 'done' when finished.")

    while True:
        user_input = input("Edit: ")
        if user_input.lower() == 'done':
            break

        if ':' not in user_input:
            print("Invalid format. Please use the format 'index:new_ingredient'.")
            continue

        try:
            index, new_ingredient = user_input.split(':')
            index = int(index) - 1  # Convert to zero-based index
            if 0 <= index < len(ingredients):
                ingredients[index] = new_ingredient.strip()
                update_callback(index, new_ingredient.strip())
            else:
                print("Index out of range.")
        except ValueError:
            print("Invalid input. Please ensure the index is a number and format is correct.")



def main():
    file_path = '/home/iulian/curs/personal/personal/recipe-finder/src/app/components/core/pages/category/json-files/burgers-recipes.json'
    recipes = read_json(file_path)
    ingredients = set()
    for recipe in recipes:
        ingredients.update(recipe['ingredients'])
    ingredients = list(ingredients)

    def update_ingredient(index, new_ingredient):
        ingredients[index] = new_ingredient

    edit_ingredients(ingredients, update_ingredient)

    for recipe in recipes:
        recipe['ingredients'] = [ing if ing in ingredients else '' for ing in recipe['ingredients']]
    save_json(file_path, recipes)

if __name__ == "__main__":
    main()
