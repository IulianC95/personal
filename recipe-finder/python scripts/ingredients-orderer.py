
def sort_ingredients(input_file, output_file):

    with open(input_file, 'r') as file:
        contents = file.read().split('},')


    ingredients = []
    for line in contents:
        if 'name' in line:

            ingredient = line.strip() + ('}' if '}' not in line else '')
            ingredients.append(ingredient)


    ingredients.sort(key=lambda x: x.split("'")[1])


    with open(output_file, 'w') as file:
        for ingredient in ingredients:
            file.write(f"{ingredient},\n")


sort_ingredients('python scripts/ingredients.js', 'python scripts/oredered-ingredients.js')
