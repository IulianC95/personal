import React, { useState } from 'react';
import bbqRecipes from './category/json-files/bbq-recipes.json';
import breakfastRecipes from './category/json-files/breakfast-recipes.json';
import soupsRecipes from './category/json-files/soup-recipes.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import jsonData from './category/json-files/bbq-recipes.json';

const Recipes = jsonData.map((recipe) => ({
  name: recipe.title,
  imgSrc: recipe.image_url,
  recipeUrl: recipe.recipe_url,
}));

export default function CookPageComponent() {
  const [searchText, setSearchText] = useState('');
  const [ingredients, setIngredients] = useState([
    { name: 'Tomato', image: './images/ingredients-images/tomato.png' },
    { name: 'Onion', image: './images/ingredients-images/onion.png' },
    { name: 'Almonds', image: './images/ingredients-images/almonds.png' },
    { name: 'Avocado', image: './images/ingredients-images/avocado.png' },
    { name: 'Basil', image: './images/ingredients-images/basil.png' },
    { name: 'Beef', image: './images/ingredients-images/beef.png' },
    {
      name: 'Bell pepper',
      image: './images/ingredients-images/bell-pepper.png',
    },
    { name: 'Brown Rice', image: './images/ingredients-images/brown-rice.png' },
    { name: 'Carrot', image: './images/ingredients-images/carrot.png' },
    {
      name: 'Chedar cheese',
      image: './images/ingredients-images/chedar-cheese.png',
    },
    {
      name: 'Chicken breast',
      image: './images/ingredients-images/chicken-breast.png',
    },
    { name: 'Egg', image: './images/ingredients-images/egg.png' },
    { name: 'Garlic', image: './images/ingredients-images/garlic.png' },
    { name: 'Lemon', image: './images/ingredients-images/lemon.png' },
    { name: 'Lentils', image: './images/ingredients-images/lentils.png' },
    { name: 'Mushroom', image: './images/ingredients-images/mushroom.png' },
    { name: 'Olive oil', image: './images/ingredients-images/olive-oil.png' },
    { name: 'Quinoa', image: './images/ingredients-images/quinoa.png' },
    { name: 'Salmon', image: './images/ingredients-images/salmon.png' },
    { name: 'Spinach', image: './images/ingredients-images/spinach.png' },
    {
      name: 'Worcestershire sauce',
      image: './images/ingredients-images/Worcestershire-sauce.png',
    },
    { name: 'Vinegar', image: './images/ingredients-images/vinegar.png' },
    {
      name: 'Brown sugar',
      image: './images/ingredients-images/brown-sugar.png',
    },
    {
      name: 'Pork ribs',
      image: './images/ingredients-images/pork-ribs.png',
    },
    {
      name: 'Cola',
      image: './images/ingredients-images/cola.png',
    },
    {
      name: 'Ketchup',
      image: './images/ingredients-images/ketchup.png',
    },
    {
      name: 'Soy sauce',
      image: './images/ingredients-images/soy-sauce.png',
    },
    {
      name: 'Sweet chilli sauce',
      image: './images/ingredients-images/sweet-chilli-sauce.png',
    },
    {
      name: 'Paprika',
      image: './images/ingredients-images/paprika.png',
    },
    {
      name: 'Soured cream',
      image: './images/ingredients-images/soured-cream.png',
    },
    {
      name: 'Salad cream',
      image: './images/ingredients-images/salad-cream.png',
    },
    {
      name: 'Chive',
      image: './images/ingredients-images/chive.png',
    },
    {
      name: 'Red onion',
      image: './images/ingredients-images/red-onion.png',
    },
    {
      name: 'Cinnamon',
      image: './images/ingredients-images/cinnamon.png',
    },
    {
      name: 'Sunflower oil',
      image: './images/ingredients-images/sunflower-oil.png',
    },
    {
      name: 'Cumin seeds',
      image: './images/ingredients-images/cumin-seeds.png',
    },
    {
      name: 'Chipotle hot sauce',
      image: './images/ingredients-images/chipotle-hot-sauce.png',
    },
    {
      name: 'Apple cider vinegar',
      image: './images/ingredients-images/apple-cider-vinegar.png',
    },
    {
      name: 'BBQ sauce',
      image: './images/ingredients-images/bbq-sauce.png',
    },
    {
      name: 'Jackfruit',
      image: './images/ingredients-images/jackfruit.png',
    },
    {
      name: 'Sweet potato',
      image: './images/ingredients-images/sweet-potato.png',
    },
    {
      name: 'Sesame oil',
      image: './images/ingredients-images/sesame-oil.png',
    },
    {
      name: 'Ginger',
      image: './images/ingredients-images/ginger.png',
    },
    {
      name: 'Lime',
      image: './images/ingredients-images/lime.png',
    },
    {
      name: 'Sesame seeds',
      image: './images/ingredients-images/sesame-seeds.png',
    },
    {
      name: 'Peanuts',
      image: './images/ingredients-images/peanuts.png',
    },
    {
      name: 'Green chilli',
      image: './images/ingredients-images/green-chilli.png',
    },
    {
      name: 'Orange',
      image: './images/ingredients-images/orange.png',
    },
    {
      name: 'Butter',
      image: './images/ingredients-images/butter.png',
    },
    {
      name: 'Pork',
      image: './images/ingredients-images/pork.png',
    },
    {
      name: 'Mustard powder',
      image: './images/ingredients-images/mustard-powder.png',
    },
    {
      name: 'Brioche bun',
      image: './images/ingredients-images/brioche-bun.png',
    },
    {
      name: 'Cabbage',
      image: './images/ingredients-images/cabbage.png',
    },
    {
      name: 'Bay leaves',
      image: './images/ingredients-images/bay-leaves.png',
    },
    {
      name: 'Red wine vinegar',
      image: './images/ingredients-images/red-wine-vinegar.png',
    },
    {
      name: 'French stick',
      image: './images/ingredients-images/french-stick.png',
    },
    {
      name: 'Beef stock',
      image: './images/ingredients-images/beef-stock.png',
    },
    {
      name: 'Malt vinegar',
      image: './images/ingredients-images/malt-vinegar.png',
    },
    {
      name: 'Chilli flakes',
      image: './images/ingredients-images/chilli-flakes.png',
    },
    {
      name: 'Tabasco sauce',
      image: './images/ingredients-images/tabasco-sauce.png',
    },
    {
      name: 'Thyme',
      image: './images/ingredients-images/thyme.png',
    },
    {
      name: 'Chilli powder',
      image: './images/ingredients-images/chilli-powder.png',
    },
    {
      name: 'Mustard',
      image: './images/ingredients-images/mustard.png',
    },
    {
      name: 'Aubergines',
      image: './images/ingredients-images/aubergines.png',
    },
    {
      name: 'Garlic granules',
      image: './images/ingredients-images/garlic-granules.png',
    },
    {
      name: 'Sugar',
      image: './images/ingredients-images/sugar.png',
    },
    {
      name: 'Black beans',
      image: './images/ingredients-images/black-beans.png',
    },
    {
      name: 'Burger bun',
      image: './images/ingredients-images/burger-bun.png',
    },
    {
      name: 'Oregano',
      image: './images/ingredients-images/oregano.png',
    },
    {
      name: 'Chicken',
      image: './images/ingredients-images/chicken.png',
    },
    {
      name: 'Allspice',
      image: './images/ingredients-images/allspice.png',
    },
    {
      name: 'Rum',
      image: './images/ingredients-images/rum.png',
    },
    {
      name: 'Honey',
      image: './images/ingredients-images/honey.png',
    },
    {
      name: 'Chicken thighs',
      image: './images/ingredients-images/chicken-thighs.png',
    },
    {
      name: 'Apple',
      image: './images/ingredients-images/apple.png',
    },
    {
      name: 'White wine vinegar',
      image: './images/ingredients-images/white-wine-vinegar.png',
    },
    {
      name: 'Cajun',
      image: './images/ingredients-images/cajun.png',
    },
    {
      name: 'Chicken drumsticks',
      image: './images/ingredients-images/chicken-drumsticks.png',
    },
    {
      name: 'Celery',
      image: './images/ingredients-images/celery.png',
    },
    {
      name: 'Mayonnaise',
      image: './images/ingredients-images/mayonnaise.png',
    },
    {
      name: 'Greek yogurt',
      image: './images/ingredients-images/greek-yogurt.png',
    },
    {
      name: 'Wholegrain mustard',
      image: './images/ingredients-images/wholegrain-mustard.png',
    },
    {
      name: 'Banana',
      image: './images/ingredients-images/banana.png',
    },
    {
      name: 'Horseradish sauce',
      image: './images/ingredients-images/horseradish-sauce.png',
    },
    {
      name: 'Blue cheese',
      image: './images/ingredients-images/blue-cheese.png',
    },
    {
      name: 'Iceberg lettuce',
      image: './images/ingredients-images/iceberg-lettuce.png',
    },
    {
      name: 'Chicken wings',
      image: './images/ingredients-images/chicken-wings.png',
    },
    {
      name: 'French radishes',
      image: './images/ingredients-images/french-radish.png',
    },
    {
      name: 'Bourbon',
      image: './images/ingredients-images/bourbon.png',
    },
    {
      name: 'Hot chilli sauce',
      image: './images/ingredients-images/hot-chilli-sauce.png',
    },
    {
      name: 'Coriander',
      image: './images/ingredients-images/coriander.png',
    },
    {
      name: 'Gorgonzola',
      image: './images/ingredients-images/gorgonzola.png',
    },
    {
      name: 'Salt',
      image: './images/ingredients-images/salt.png',
    },
    {
      name: 'Chipotle paste',
      image: './images/ingredients-images/chipotle-paste.png',
    },
    {
      name: 'Tomato paste',
      image: './images/ingredients-images/tomato-paste.png',
    },
    {
      name: 'Black treacle',
      image: './images/ingredients-images/black-treacle.png',
    },
    {
      name: 'Bacon',
      image: './images/ingredients-images/bacon.png',
    },
    {
      name: 'Lettuce',
      image: './images/ingredients-images/lettuce.png',
    },
    {
      name: 'Lamb',
      image: './images/ingredients-images/lamb.png',
    },
    {
      name: 'Cucumber',
      image: './images/ingredients-images/cucumber.png',
    },
    {
      name: 'Mint',
      image: './images/ingredients-images/mint.png',
    },
    {
      name: 'Mackerel',
      image: './images/ingredients-images/mackerel.png',
    },
    {
      name: 'Red chilli',
      image: './images/ingredients-images/red-chilli.png',
    },
    {
      name: 'Fish sauce',
      image: './images/ingredients-images/fish-sauce.png',
    },
    {
      name: 'Pork belly',
      image: './images/ingredients-images/pork-belly.png',
    },
    {
      name: 'Hoisin sauce',
      image: './images/ingredients-images/hoisin-sauce.png',
    },
    {
      name: 'Golden caster sugar',
      image: './images/ingredients-images/golden-caster-sugar.png',
    },
    {
      name: 'Rice vinegar',
      image: './images/ingredients-images/rice-vinegar.png',
    },
    {
      name: 'Wasabi',
      image: './images/ingredients-images/wasabi.png',
    },
    {
      name: 'Vanilla extract',
      image: './images/ingredients-images/vanilla-extract.png',
    },
    {
      name: 'Pecans',
      image: './images/ingredients-images/pecans.png',
    },
    {
      name: 'Tortillas',
      image: './images/ingredients-images/tortillas.png',
    },
    {
      name: 'Black pepper',
      image: './images/ingredients-images/black-pepper.png',
    },
    {
      name: 'Ice cream',
      image: './images/ingredients-images/ice-cream.png',
    },
    {
      name: 'Corn',
      image: './images/ingredients-images/corn.png',
    },
    {
      name: 'Medjool date',
      image: './images/ingredients-images/medjool-date.png',
    },
    {
      name: 'Romaine lettuce',
      image: './images/ingredients-images/romaine-lettuce.png',
    },
    {
      name: 'Watercress',
      image: './images/ingredients-images/watercress.png',
    },
    {
      name: 'Potato',
      image: './images/ingredients-images/potato.png',
    },
    {
      name: 'Tarragon',
      image: './images/ingredients-images/tarragon.png',
    },
    {
      name: 'Yogurt',
      image: './images/ingredients-images/yogurt.png',
    },
    {
      name: 'Wholemeal flour',
      image: './images/ingredients-images/wholemeal-flour.png',
    },
    {
      name: 'Instant yeast',
      image: './images/ingredients-images/instant-yeast.png',
    },
    {
      name: 'Rapeseed oil',
      image: './images/ingredients-images/rapeseed-oil.png',
    },
    {
      name: 'Fennel seeds',
      image: './images/ingredients-images/fennel-seeds.png',
    },
    {
      name: 'Cherry tomatoes',
      image: './images/ingredients-images/cherry-tomatoes.png',
    },
    {
      name: 'White bread',
      image: './images/ingredients-images/white-bread.png',
    },
    {
      name: 'Lamb cutlet',
      image: './images/ingredients-images/lamb-cutlet.png',
    },
    {
      name: 'Courgette',
      image: './images/ingredients-images/courgette.png',
    },
    {
      name: 'Butter beans',
      image: './images/ingredients-images/butter-beans.png',
    },
    {
      name: 'Feta cheese',
      image: './images/ingredients-images/feta-cheese.png',
    },
    {
      name: 'Pork mince',
      image: './images/ingredients-images/pork-mince.png',
    },
    {
      name: 'Beer',
      image: './images/ingredients-images/beer.png',
    },
    {
      name: 'Chorizo',
      image: './images/ingredients-images/chorizo.png',
    },
    {
      name: 'Dill',
      image: './images/ingredients-images/dill.png',
    },
    {
      name: 'Beef steak',
      image: './images/ingredients-images/beef-steak.png',
    },
    {
      name: 'Artichokes',
      image: './images/ingredients-images/artichokes.png',
    },
    {
      name: 'Porridge oats',
      image: './images/ingredients-images/porridge-oats.png',
    },
    {
      name: 'Any fruits',
      image: './images/ingredients-images/any-fruits.png',
    },
    {
      name: 'Milk',
      image: './images/ingredients-images/milk.png',
    },
    {
      name: 'Kale',
      image: './images/ingredients-images/kale.png',
    },
    {
      name: 'Apple sauce',
      image: './images/ingredients-images/apple-sauce.png',
    },
    {
      name: 'Baking powder',
      image: './images/ingredients-images/baking-powder.png',
    },
    {
      name: 'Bicarbonate of soda',
      image: './images/ingredients-images/bicarbonate-of-soda.png',
    },
    {
      name: 'Blueberry',
      image: './images/ingredients-images/blueberry.png',
    },
    {
      name: 'Mixed seed',
      image: './images/ingredients-images/mixed-seeds.png',
    },
    {
      name: 'Parsley',
      image: './images/ingredients-images/parsley.png',
    },
    {
      name: 'Naan bread',
      image: './images/ingredients-images/naan-bread.png',
    },
    {
      name: 'Cream cheese',
      image: './images/ingredients-images/cream-cheese.png',
    },
    {
      name: 'Mango',
      image: './images/ingredients-images/mango.png',
    },
    {
      name: 'Cereals',
      image: './images/ingredients-images/cereals.png',
    },
    {
      name: 'Muscovado sugar',
      image: './images/ingredients-images/muscovado-sugar.png',
    },
    {
      name: 'Golden syrup',
      image: './images/ingredients-images/golden-syrup.png',
    },
    {
      name: 'Veggie sausages',
      image: './images/ingredients-images/veggie-sausages.png',
    },
    {
      name: 'Muesli',
      image: './images/ingredients-images/muesli.png',
    },
    {
      name: 'White flour',
      image: './images/ingredients-images/white-flour.png',
    },
    {
      name: 'Soy milk',
      image: './images/ingredients-images/soy-milk.png',
    },
    {
      name: 'Grapeseed oil',
      image: './images/ingredients-images/grapeseed-oil.png',
    },
    {
      name: 'Demerara sugar',
      image: './images/ingredients-images/demerara-sugar.png',
    },
    {
      name: 'Double cream',
      image: './images/ingredients-images/double-cream.png',
    },
    {
      name: 'Maple syrup',
      image: './images/ingredients-images/maple-syrup.png',
    },
    {
      name: 'Chia seeds',
      image: './images/ingredients-images/chia-seeds.png',
    },
    {
      name: 'Goji berries',
      image: './images/ingredients-images/goji-berries.png',
    },
    {
      name: 'Almond milk',
      image: './images/ingredients-images/almond-milk.png',
    },
    {
      name: 'Red pear',
      image: './images/ingredients-images/red-pear.png',
    },
    {
      name: 'Pumpkin seeds',
      image: './images/ingredients-images/pumpkin-seeds.png',
    },
    {
      name: 'Broccoli',
      image: './images/ingredients-images/broccoli.png',
    },
    {
      name: 'Coconut',
      image: './images/ingredients-images/coconut.png',
    },
    {
      name: 'Rice milk',
      image: './images/ingredients-images/rice-milk.png',
    },
    {
      name: 'Spirulina',
      image: './images/ingredients-images/spirulina.png',
    },
    {
      name: 'Capers',
      image: './images/ingredients-images/capers.png',
    },
    {
      name: 'Sausages',
      image: './images/ingredients-images/sausages.png',
    },
    {
      name: 'Pinto beans',
      image: './images/ingredients-images/pinto-beans.png',
    },
    {
      name: 'Cannellini beans',
      image: './images/ingredients-images/cannellini-beans.png',
    },
    {
      name: 'Bagels',
      image: './images/ingredients-images/bagels.png',
    },
    {
      name: 'Cayenne pepper',
      image: './images/ingredients-images/cayenne-pepper.png',
    },
    {
      name: 'Linseeds',
      image: './images/ingredients-images/linseeds.png',
    },
    {
      name: 'Hazelnuts',
      image: './images/ingredients-images/hazelnuts.png',
    },
    {
      name: 'Peanut butter',
      image: './images/ingredients-images/peanut-butter.png',
    },
    {
      name: 'Granola',
      image: './images/ingredients-images/granola.png',
    },
    {
      name: 'Passion fruit',
      image: './images/ingredients-images/passion-fruit.png',
    },
    {
      name: 'Ice cubes',
      image: './images/ingredients-images/ice-cubes.png',
    },
    {
      name: 'Turmeric',
      image: './images/ingredients-images/turmeric.png',
    },
    {
      name: 'Kefir',
      image: './images/ingredients-images/kefir.png',
    },
    {
      name: 'Strawberries',
      image: './images/ingredients-images/strawberries.png',
    },
    {
      name: 'Raisins',
      image: './images/ingredients-images/raisins.png',
    },
    {
      name: 'Nuts',
      image: './images/ingredients-images/nuts.png',
    },
    {
      name: 'Oyster sauce',
      image: './images/ingredients-images/oyster-sauce.png',
    },
    {
      name: 'Sausage meat',
      image: './images/ingredients-images/sausage-meat.png',
    },
    {
      name: 'Ciabatta bun',
      image: './images/ingredients-images/ciabatta-bun.png',
    },
    {
      name: 'Chickpea',
      image: './images/ingredients-images/chickpea.png',
    },
    {
      name: 'Tofu',
      image: './images/ingredients-images/tofu.png',
    },
    {
      name: 'Soy yogurt',
      image: './images/ingredients-images/soy-yogurt.png',
    },
    {
      name: 'Nutella',
      image: './images/ingredients-images/nutella.png',
    },
    {
      name: 'Raspberry',
      image: './images/ingredients-images/raspberry.png',
    },
    {
      name: 'Raspberry jam',
      image: './images/ingredients-images/raspberry-jam.png',
    },
    {
      name: 'Pork chipolata',
      image: './images/ingredients-images/pork-chipolata.png',
    },
    {
      name: 'White baps',
      image: './images/ingredients-images/white-baps.png',
    },
    {
      name: 'Black pudding',
      image: './images/ingredients-images/black-pudding.png',
    },
    {
      name: 'Asparagus',
      image: './images/ingredients-images/asparagus.png',
    },
    {
      name: 'Basmati rice',
      image: './images/ingredients-images/basmati-rice.png',
    },
    {
      name: 'Apricot',
      image: './images/ingredients-images/apricot.png',
    },
    {
      name: 'Walnuts',
      image: './images/ingredients-images/walnuts.png',
    },
    {
      name: 'Matcha powder',
      image: './images/ingredients-images/matcha-powder.png',
    },
    {
      name: 'Kiwi',
      image: './images/ingredients-images/kiwi.png',
    },
    {
      name: 'Peach',
      image: './images/ingredients-images/peach.png',
    },
    {
      name: 'Coconut flakes',
      image: './images/ingredients-images/coconut-flakes.png',
    },
    {
      name: 'Caraway seeds',
      image: './images/ingredients-images/caraway-seeds.png',
    },
    {
      name: 'Brussels sprouts',
      image: './images/ingredients-images/brussels-sprouts.png',
    },
    {
      name: 'Mixed berries',
      image: './images/ingredients-images/mixed-berries.png',
    },
    {
      name: 'Croissants',
      image: './images/ingredients-images/croissants.png',
    },
    {
      name: 'Almond butter',
      image: './images/ingredients-images/almond-butter.png',
    },
    {
      name: 'Dark chocolate',
      image: './images/ingredients-images/dark-chocolate.png',
    },
    {
      name: 'Blackberry',
      image: './images/ingredients-images/blackberry.png',
    },
    {
      name: 'Buttermilk',
      image: './images/ingredients-images/buttermilk.png',
    },
    {
      name: 'Oat milk',
      image: './images/ingredients-images/oat-milk.png',
    },
    {
      name: 'Nutmeg',
      image: './images/ingredients-images/nutmeg.png',
    },
    {
      name: 'Sunflower seeds',
      image: './images/ingredients-images/sunflower-seeds.png',
    },
    {
      name: 'Sultans',
      image: './images/ingredients-images/sultans.png',
    },
    {
      name: 'Protein powder',
      image: './images/ingredients-images/protein-powder.png',
    },
    {
      name: 'Coconut oil',
      image: './images/ingredients-images/coconut-oil.png',
    },
    {
      name: 'Single cream',
      image: './images/ingredients-images/single-cream.png',
    },
    {
      name: 'Ham',
      image: './images/ingredients-images/ham.png',
    },
    {
      name: 'Clotted cream',
      image: './images/ingredients-images/clotted-cream.png',
    },
    {
      name: 'Chicken stock',
      image: './images/ingredients-images/chicken-stock.png',
    },
    {
      name: 'Spring onion',
      image: './images/ingredients-images/spring-onion.png',
    },
    {
      name: 'Red lentils',
      image: './images/ingredients-images/red-lentils.png',
    },
    {
      name: 'Vegetable stock',
      image: './images/ingredients-images/vegetable-stock.png',
    },
    {
      name: 'Pesto',
      image: './images/ingredients-images/pesto.png',
    },
    {
      name: 'Leek',
      image: './images/ingredients-images/leek.png',
    },
    {
      name: 'Butternut squash',
      image: './images/ingredients-images/butternut-squash.png',
    },
    {
      name: 'Water',
      image: './images/ingredients-images/water.png',
    },
    {
      name: 'Ras el hanout',
      image: './images/ingredients-images/ras-el-hanout.png',
    },
    {
      name: 'Pasta',
      image: './images/ingredients-images/pasta.png',
    },
    {
      name: 'Tortellini',
      image: './images/ingredients-images/tortellini.png',
    },
    {
      name: 'Parmesan',
      image: './images/ingredients-images/parmesan.png',
    },
    {
      name: 'White wine',
      image: './images/ingredients-images/white-wine.png',
    },
    {
      name: 'Gruyere cheese',
      image: './images/ingredients-images/gruyere-cheese.png',
    },
    {
      name: 'Pancetta',
      image: './images/ingredients-images/pancetta.png',
    },
    {
      name: 'Couscous',
      image: './images/ingredients-images/couscous.png',
    },
    {
      name: 'Pork meatballs',
      image: './images/ingredients-images/pork-meatballs.png',
    },
    {
      name: 'Cauliflower',
      image: './images/ingredients-images/cauliflower.png',
    },
    {
      name: 'Chinese five spice',
      image: './images/ingredients-images/chinese-five-spice.png',
    },
    {
      name: 'Ramen noodles',
      image: './images/ingredients-images/ramen-noodles.png',
    },
    {
      name: 'Nori',
      image: './images/ingredients-images/nori.png',
    },
    {
      name: 'Whipping cream',
      image: './images/ingredients-images/whipping-cream.png',
    },
    {
      name: 'Vegetable powder',
      image: './images/ingredients-images/vegetable-powder.png',
    },
    {
      name: 'Tortilla chips',
      image: './images/ingredients-images/tortilla-chips.png',
    },
    {
      name: 'Pumpkin',
      image: './images/ingredients-images/pumpkin.png',
    },
    {
      name: 'Curry powder',
      image: './images/ingredients-images/curry-powder.png',
    },
    {
      name: 'Parsnip',
      image: './images/ingredients-images/parsnip.png',
    },
    {
      name: 'Peas',
      image: './images/ingredients-images/peas.png',
    },
    {
      name: 'Savoy cabbage',
      image: './images/ingredients-images/savoy-cabbage.png',
    },
    {
      name: 'Coriander seeds',
      image: './images/ingredients-images/coriander-seeds.png',
    },
    {
      name: 'Mustard seeds',
      image: './images/ingredients-images/mustard-seeds.png',
    },
    {
      name: 'Broad beans',
      image: './images/ingredients-images/broad-beans.png',
    },
    {
      name: 'Spaghetti',
      image: './images/ingredients-images/spaghetti.png',
    },
    {
      name: 'Garam masala',
      image: './images/ingredients-images/garam-masala.png',
    },
    {
      name: 'Vegetable bouillon',
      image: './images/ingredients-images/vegetable-bouillon.png',
    },
    {
      name: 'Lemongrass',
      image: './images/ingredients-images/lemongrass.png',
    },
    {
      name: 'Coconut milk',
      image: './images/ingredients-images/coconut-milk.png',
    },
    {
      name: 'Marrow',
      image: './images/ingredients-images/marrow.png',
    },
  ]);

  const filteredIngredients = searchText
    ? ingredients.filter((ingredient) =>
        ingredient.name.toLowerCase().includes(searchText.toLowerCase()),
      )
    : ingredients;

  function handleSearchChange(e) {
    setSearchText(e.target.value);
  }

  function toggleIngredientSelection(selectedIngredientName) {
    const newIngredients = ingredients.map((ingredient) => {
      if (ingredient.name === selectedIngredientName) {
        return { ...ingredient, selected: !ingredient.selected };
      }
      return ingredient;
    });
    setIngredients(newIngredients);
  }

  const [matchedRecipes, setMatchedRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [showRecipes, setShowRecipes] = useState(false);

  function handleButtonClick() {
    const selectedIngredients = ingredients
      .filter((ingredient) => ingredient.selected)
      .map((ingredient) => ingredient.name);

    const allRecipes = [
      ...bbqRecipes,
      ...breakfastRecipes,
      ...soupsRecipes,
    ].map((recipe) => ({
      name: recipe.title,
      imgSrc: recipe.image_url,
      recipeUrl: recipe.recipe_url,
      ingredients: recipe.ingredients,
    }));

    const recipesWithMatch = allRecipes.filter((recipe) =>
      recipe.ingredients.every((ingredient) =>
        selectedIngredients.includes(ingredient),
      ),
    );

    setMatchedRecipes(recipesWithMatch);

    if (recipesWithMatch.length > 0) {
      setShowRecipes(true);
    } else {
      alert('No recipes found with the selected ingredients.');
    }
  }

  function handleBackClick() {
    setShowRecipes(false);
  }
  return (
    <div className="flex flex-col">
      {!showRecipes && (
        <div className="flex flex-col items-center px-4 gap-2 pt-2 flex-grow fadeIn">
          <h3 className="font-capriola text-base font-medium text-[var(--primary)] text-center">
            Select the ingredients you have right now in the kitchen
          </h3>
          <div className="container-input">
            <input
              type="text"
              placeholder="Search"
              name="text"
              className="input2"
              value={searchText}
              onChange={handleSearchChange}
            />
            <svg
              fill="#000000"
              width="20px"
              height="20px"
              viewBox="0 0 1920 1920"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>

          <section className="flex flex-wrap justify-center gap-2">
            {filteredIngredients.map((ingredient) => (
              <div
                className={`flex flex-col items-center w-1/5 min-w-[82px] cursor-pointer ${
                  ingredient.selected ? '' : 'grayscale'
                }`}
                key={ingredient.name}
                onClick={() => toggleIngredientSelection(ingredient.name)}
              >
                <picture>
                  <img
                    src={ingredient.image}
                    alt={ingredient.name}
                    width={61}
                  ></img>
                </picture>
                <p className="text-center">{ingredient.name}</p>
              </div>
            ))}
          </section>
          <button
            className="bg-[var(--primary)] text-white font-candal px-10 py-3 rounded-lg fadeIn"
            onClick={handleButtonClick}
          >
            See what you can cook
          </button>
        </div>
      )}
      {showRecipes && (
        <div className="pt-4 flex flex-col px-4 gap-5 flex-grow">
          <button
            onClick={handleBackClick}
            className="bg-[var(--primary)] text-white font-candal px-10 py-1 rounded-lg fadeInDelayed"
          >
            Back to ingredients selection
          </button>
          {matchedRecipes.map((recipe, index) => (
            <section key={index} className="flex justify-center w-full">
              <picture className="rounded-l-lg ">
                <img
                  src={recipe.imgSrc}
                  alt={recipe.name}
                  className="h-20 w-32 fadeIn"
                ></img>
              </picture>
              <aside className="h-20 w-full bg-[var(--bg-secondary)] rounded-r-lg flex flex-col gap-1 items-center justify-center expandRight">
                <h3 className="text-base text-center font-candal font-bold text-[var(--primary)] fadeInDelayed">
                  {recipe.name}
                </h3>
                <div className="flex gap-4 items-center">
                  <a
                    href={recipe.recipeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-[var(--primary)] text-white font-candal px-10 py-1 rounded-lg fadeInDelayed">
                      Recipe
                    </button>
                  </a>
                  <FontAwesomeIcon
                    icon={
                      favorites.some((fav) => fav.name === recipe.name)
                        ? fasStar
                        : farStar
                    }
                    onClick={() => removeFromFavorites(recipe)}
                    className={`cursor-pointer ${
                      favorites.some((fav) => fav.name === recipe.name)
                        ? 'text-yellow-500'
                        : '--primary'
                    } text-xl fadeInDelayed`}
                  />
                </div>
              </aside>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
