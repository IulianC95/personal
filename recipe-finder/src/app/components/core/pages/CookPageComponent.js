import React, { useState, useEffect } from 'react';
import {
  bbqRecipes,
  breakfastRecipes,
  soupsRecipes,
  vegetarianRecipes,
  burgersRecipes,
  desertRecipes,
  pizzaRecipes,
  piesRecipes,
  smoothiesRecipes,
  saucesRecipes,
  pastaRecipes,
  seafoodRecipes,
} from './category/json-files.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import GeneratedRecipe from './category/GeneratedRecipe.js';

const allRecipes = [
  ...bbqRecipes,
  ...breakfastRecipes,
  ...soupsRecipes,
  ...vegetarianRecipes,
  ...burgersRecipes,
  ...desertRecipes,
  ...pizzaRecipes,
  ...piesRecipes,
  ...smoothiesRecipes,
  ...saucesRecipes,
  ...pastaRecipes,
  ...seafoodRecipes,
];

export { allRecipes };

const jsonData = [].concat(...allRecipes);

const Recipes = jsonData.map((recipe) => ({
  name: recipe.title,
  imgSrc: recipe.image_url,
  recipeUrl: recipe.recipe_url,
}));

const originalRecipeImage = '/images/original-chef.png';

export default function CookPageComponent({
  onCategorySelect,
  setActivePage,
  setGeneratedRecipe,
}) {
  const [hasSeenMessage, setHasSeenMessage] = useState(false);

  useEffect(() => {
    const seenMessage = localStorage.getItem('hasSeenMessage');
    if (!seenMessage) {
      setHasSeenMessage(false);
    }
  }, []);

  const handleOkClick = () => {
    localStorage.setItem('hasSeenMessage', 'true');
    setHasSeenMessage(true);
  };

  const [searchText, setSearchText] = useState('');

  const handleRecipeClick = (recipe) => {
    if (recipe.recipe_url) {
      window.open(recipe.recipe_url, '_blank');
    } else {
      onCategorySelect('recipe-details', recipe);
    }
  };

  const [ingredients, setIngredients] = useState([
    {
      name: 'Acai powder',
      image: './images/ingredients-images/acai-powder.png',
    },
    {
      name: 'Allspice',
      image: './images/ingredients-images/allspice.png',
    },
    {
      name: 'Almond butter',
      image: './images/ingredients-images/almond-butter.png',
    },
    {
      name: 'Almond milk',
      image: './images/ingredients-images/almond-milk.png',
    },
    { name: 'Almonds', image: './images/ingredients-images/almonds.png' },
    {
      name: 'Amaretti biscuit',
      image: './images/ingredients-images/amaretti-biscuit.png',
    },
    {
      name: 'Anchovy',
      image: './images/ingredients-images/anchovy.png',
    },
    {
      name: 'Any fruits',
      image: './images/ingredients-images/any-fruits.png',
    },
    {
      name: 'Apple',
      image: './images/ingredients-images/apple.png',
    },
    {
      name: 'Apple cider vinegar',
      image: './images/ingredients-images/apple-cider-vinegar.png',
    },
    {
      name: 'Apple sauce',
      image: './images/ingredients-images/apple-sauce.png',
    },
    {
      name: 'Apricot',
      image: './images/ingredients-images/apricot.png',
    },
    {
      name: 'Apricot jam',
      image: './images/ingredients-images/apricot-jam.png',
    },
    {
      name: 'Arborio rice',
      image: './images/ingredients-images/arborio-rice.png',
    },
    {
      name: 'Artichokes',
      image: './images/ingredients-images/artichokes.png',
    },
    {
      name: 'Asafoetida',
      image: './images/ingredients-images/asafoetida.png',
    },
    {
      name: 'Asparagus',
      image: './images/ingredients-images/asparagus.png',
    },
    {
      name: 'Aubergines',
      image: './images/ingredients-images/aubergines.png',
    },
    { name: 'Avocado', image: './images/ingredients-images/avocado.png' },
    {
      name: 'BBQ sauce',
      image: './images/ingredients-images/bbq-sauce.png',
    },
    {
      name: 'Bacon',
      image: './images/ingredients-images/bacon.png',
    },
    {
      name: 'Bagels',
      image: './images/ingredients-images/bagels.png',
    },
    {
      name: 'Baking powder',
      image: './images/ingredients-images/baking-powder.png',
    },
    {
      name: 'Banana',
      image: './images/ingredients-images/banana.png',
    },
    { name: 'Basil', image: './images/ingredients-images/basil.png' },
    {
      name: 'Basmati rice',
      image: './images/ingredients-images/basmati-rice.png',
    },
    {
      name: 'Bass',
      image: './images/ingredients-images/bass.png',
    },
    {
      name: 'Bay leaves',
      image: './images/ingredients-images/bay-leaves.png',
    },
    {
      name: 'Beansprouts',
      image: './images/ingredients-images/beansprouts.png',
    },
    { name: 'Beef', image: './images/ingredients-images/beef.png' },
    {
      name: 'Beef mince',
      image: './images/ingredients-images/beef-mince.png',
    },
    {
      name: 'Beef steak',
      image: './images/ingredients-images/beef-steak.png',
    },
    {
      name: 'Beef stock',
      image: './images/ingredients-images/beef-stock.png',
    },
    {
      name: 'Beef stock cube',
      image: './images/ingredients-images/beef-stock-cube.png',
    },
    {
      name: 'Beer',
      image: './images/ingredients-images/beer.png',
    },
    {
      name: 'Beetroot',
      image: './images/ingredients-images/beetroot.png',
    },
    {
      name: 'Belgian chocolate',
      image: './images/ingredients-images/belgian-chocolate.png',
    },
    {
      name: 'Bell pepper',
      image: './images/ingredients-images/bell-pepper.png',
    },
    {
      name: 'Bicarbonate of soda',
      image: './images/ingredients-images/bicarbonate-of-soda.png',
    },
    {
      name: 'Black beans',
      image: './images/ingredients-images/black-beans.png',
    },
    {
      name: 'Black olives',
      image: './images/ingredients-images/black-olives.png',
    },
    {
      name: 'Black pepper',
      image: './images/ingredients-images/black-pepper.png',
    },
    {
      name: 'Black pudding',
      image: './images/ingredients-images/black-pudding.png',
    },
    {
      name: 'Black treacle',
      image: './images/ingredients-images/black-treacle.png',
    },
    {
      name: 'Blackberry',
      image: './images/ingredients-images/blackberry.png',
    },
    {
      name: 'Blackcurrant',
      image: './images/ingredients-images/blackcurrant.png',
    },
    {
      name: 'Blue cheese',
      image: './images/ingredients-images/blue-cheese.png',
    },
    {
      name: 'Blue food colouring',
      image: './images/ingredients-images/blue-food-colouring.png',
    },
    {
      name: 'Blueberry',
      image: './images/ingredients-images/blueberry.png',
    },
    {
      name: 'Bonito flakes',
      image: './images/ingredients-images/bonito-flakes.png',
    },
    {
      name: 'Bourbon',
      image: './images/ingredients-images/bourbon.png',
    },
    {
      name: 'Bramley apple',
      image: './images/ingredients-images/bramley-apple.png',
    },
    {
      name: 'Brandy',
      image: './images/ingredients-images/brandy.png',
    },
    {
      name: 'Bread baguettes',
      image: './images/ingredients-images/bread-baguettes.png',
    },
    {
      name: 'Breadcrumbs',
      image: './images/ingredients-images/breadcrumbs.png',
    },
    {
      name: 'Brioche bun',
      image: './images/ingredients-images/brioche-bun.png',
    },
    {
      name: 'Broad beans',
      image: './images/ingredients-images/broad-beans.png',
    },
    {
      name: 'Broccoli',
      image: './images/ingredients-images/broccoli.png',
    },
    {
      name: 'Brown miso',
      image: './images/ingredients-images/brown-miso.png',
    },
    { name: 'Brown rice', image: './images/ingredients-images/brown-rice.png' },
    {
      name: 'Brown sugar',
      image: './images/ingredients-images/brown-sugar.png',
    },
    {
      name: 'Brownie squares',
      image: './images/ingredients-images/brownie-squares.png',
    },
    {
      name: 'Brussels sprouts',
      image: './images/ingredients-images/brussels-sprouts.png',
    },
    {
      name: 'Buffalo hot sauce',
      image: './images/ingredients-images/buffalo-hot-sauce.png',
    },
    {
      name: 'Bulgur',
      image: './images/ingredients-images/bulgur.png',
    },
    {
      name: 'Burger bun',
      image: './images/ingredients-images/burger-bun.png',
    },
    {
      name: 'Burger sauce',
      image: './images/ingredients-images/burger-sauce.png',
    },
    {
      name: 'Butter',
      image: './images/ingredients-images/butter.png',
    },
    {
      name: 'Butter beans',
      image: './images/ingredients-images/butter-beans.png',
    },
    {
      name: 'Buttermilk',
      image: './images/ingredients-images/buttermilk.png',
    },
    {
      name: 'Butternut squash',
      image: './images/ingredients-images/butternut-squash.png',
    },
    {
      name: 'Cabbage',
      image: './images/ingredients-images/cabbage.png',
    },
    {
      name: 'Cajun',
      image: './images/ingredients-images/cajun.png',
    },
    {
      name: 'Camembert cheese',
      image: './images/ingredients-images/camembert-cheese.png',
    },
    {
      name: 'Cannellini beans',
      image: './images/ingredients-images/cannellini-beans.png',
    },
    {
      name: 'Capers',
      image: './images/ingredients-images/capers.png',
    },
    {
      name: 'Caramel',
      image: './images/ingredients-images/caramel.png',
    },
    {
      name: 'Caraway seeds',
      image: './images/ingredients-images/caraway-seeds.png',
    },
    {
      name: 'Cardamom',
      image: './images/ingredients-images/cardamom.png',
    },
    { name: 'Carrot', image: './images/ingredients-images/carrot.png' },
    {
      name: 'Cashew butter',
      image: './images/ingredients-images/cashew-butter.png',
    },
    {
      name: 'Cashews',
      image: './images/ingredients-images/cashews.png',
    },
    {
      name: 'Cauliflower',
      image: './images/ingredients-images/cauliflower.png',
    },
    {
      name: 'Cayenne pepper',
      image: './images/ingredients-images/cayenne-pepper.png',
    },
    {
      name: 'Celery',
      image: './images/ingredients-images/celery.png',
    },
    {
      name: 'Cereals',
      image: './images/ingredients-images/cereals.png',
    },
    {
      name: 'Champignon mushrooms',
      image: './images/ingredients-images/champignon-mushrooms.png',
    },
    {
      name: 'Chedar cheese',
      image: './images/ingredients-images/chedar-cheese.png',
    },
    {
      name: 'Cheese sauce',
      image: './images/ingredients-images/cheese-sauce.png',
    },
    {
      name: 'Cherries',
      image: './images/ingredients-images/cherries.png',
    },
    {
      name: 'Cherry tomatoes',
      image: './images/ingredients-images/cherry-tomatoes.png',
    },
    {
      name: 'Chestnut mushrooms',
      image: './images/ingredients-images/chestnut-mushrooms.png',
    },
    {
      name: 'Chestnuts',
      image: './images/ingredients-images/chestnuts.png',
    },
    {
      name: 'Chia seeds',
      image: './images/ingredients-images/chia-seeds.png',
    },
    {
      name: 'Chicken',
      image: './images/ingredients-images/chicken.png',
    },
    {
      name: 'Chicken breast',
      image: './images/ingredients-images/chicken-breast.png',
    },
    {
      name: 'Chicken drumsticks',
      image: './images/ingredients-images/chicken-drumsticks.png',
    },
    {
      name: 'Chicken stock',
      image: './images/ingredients-images/chicken-stock.png',
    },
    {
      name: 'Chicken stock cube',
      image: './images/ingredients-images/chicken-stock-cube.png',
    },
    {
      name: 'Chicken thighs',
      image: './images/ingredients-images/chicken-thighs.png',
    },
    {
      name: 'Chicken wings',
      image: './images/ingredients-images/chicken-wings.png',
    },
    {
      name: 'Chickpea',
      image: './images/ingredients-images/chickpea.png',
    },
    {
      name: 'Chickpea flour',
      image: './images/ingredients-images/chickpea-flour.png',
    },
    {
      name: 'Chicory',
      image: './images/ingredients-images/chicory.png',
    },
    {
      name: 'Chilli flakes',
      image: './images/ingredients-images/chilli-flakes.png',
    },
    {
      name: 'Chilli powder',
      image: './images/ingredients-images/chilli-powder.png',
    },
    {
      name: 'Chinese cabbage',
      image: './images/ingredients-images/chinese-cabbage.png',
    },
    {
      name: 'Chinese five spice',
      image: './images/ingredients-images/chinese-five-spice.png',
    },
    {
      name: 'Chipotle hot sauce',
      image: './images/ingredients-images/chipotle-hot-sauce.png',
    },
    {
      name: 'Chipotle paste',
      image: './images/ingredients-images/chipotle-paste.png',
    },
    {
      name: 'Chive',
      image: './images/ingredients-images/chive.png',
    },
    {
      name: 'Chocolate chips',
      image: './images/ingredients-images/chocolate-chips.png',
    },
    {
      name: 'Chorizo',
      image: './images/ingredients-images/chorizo.png',
    },
    {
      name: 'Chutney sauce',
      image: './images/ingredients-images/chutney-sauce.png',
    },
    {
      name: 'Ciabatta bun',
      image: './images/ingredients-images/ciabatta-bun.png',
    },
    {
      name: 'Cinnamon',
      image: './images/ingredients-images/cinnamon.png',
    },
    {
      name: 'Clams',
      image: './images/ingredients-images/clams.png',
    },
    {
      name: 'Clementines',
      image: './images/ingredients-images/clementines.png',
    },
    {
      name: 'Clotted cream',
      image: './images/ingredients-images/clotted-cream.png',
    },
    {
      name: 'Cocoa powder',
      image: './images/ingredients-images/cocoa-powder.png',
    },
    {
      name: 'Coconut',
      image: './images/ingredients-images/coconut.png',
    },
    {
      name: 'Coconut cream',
      image: './images/ingredients-images/coconut-cream.png',
    },
    {
      name: 'Coconut flakes',
      image: './images/ingredients-images/coconut-flakes.png',
    },
    {
      name: 'Coconut milk',
      image: './images/ingredients-images/coconut-milk.png',
    },
    {
      name: 'Coconut oil',
      image: './images/ingredients-images/coconut-oil.png',
    },
    {
      name: 'Coconut water',
      image: './images/ingredients-images/coconut-water.png',
    },
    {
      name: 'Coconut yogurt',
      image: './images/ingredients-images/coconut-yogurt.png',
    },
    {
      name: 'Cod',
      image: './images/ingredients-images/cod.png',
    },
    {
      name: 'Cola',
      image: './images/ingredients-images/cola.png',
    },
    {
      name: 'Condensed milk',
      image: './images/ingredients-images/condensed-milk.png',
    },
    {
      name: 'Coriander',
      image: './images/ingredients-images/coriander.png',
    },
    {
      name: 'Coriander seeds',
      image: './images/ingredients-images/coriander-seeds.png',
    },
    {
      name: 'Corn',
      image: './images/ingredients-images/corn.png',
    },
    {
      name: 'Corn salad',
      image: './images/ingredients-images/corn-salad.png',
    },
    {
      name: 'Cornflour',
      image: './images/ingredients-images/cornflour.png',
    },
    {
      name: 'Cornmeal',
      image: './images/ingredients-images/cornmeal.png',
    },
    {
      name: 'Courgette',
      image: './images/ingredients-images/courgette.png',
    },
    {
      name: 'Couscous',
      image: './images/ingredients-images/couscous.png',
    },
    {
      name: 'Crab',
      image: './images/ingredients-images/crab.png',
    },
    {
      name: 'Crackers',
      image: './images/ingredients-images/crackers.png',
    },
    {
      name: 'Cranberries',
      image: './images/ingredients-images/cranberries.png',
    },
    {
      name: 'Cranberry sauce',
      image: './images/ingredients-images/cranberry-sauce.png',
    },
    {
      name: 'Cream cheese',
      image: './images/ingredients-images/cream-cheese.png',
    },
    {
      name: 'Croissants',
      image: './images/ingredients-images/croissants.png',
    },
    {
      name: 'Crumpet',
      image: './images/ingredients-images/crumpet.png',
    },
    {
      name: 'Cucumber',
      image: './images/ingredients-images/cucumber.png',
    },
    {
      name: 'Cumin seeds',
      image: './images/ingredients-images/cumin-seeds.png',
    },
    {
      name: 'Curry powder',
      image: './images/ingredients-images/curry-powder.png',
    },
    {
      name: 'Dark chocolate',
      image: './images/ingredients-images/dark-chocolate.png',
    },
    {
      name: 'Dark muscovado sugar',
      image: './images/ingredients-images/dark-muscovado-sugar.png',
    },
    {
      name: 'Demerara sugar',
      image: './images/ingredients-images/demerara-sugar.png',
    },
    {
      name: 'Digestive biscuits',
      image: './images/ingredients-images/digestive-biscuits.png',
    },
    {
      name: 'Dill',
      image: './images/ingredients-images/dill.png',
    },
    {
      name: 'Double cream',
      image: './images/ingredients-images/double-cream.png',
    },
    {
      name: 'Dragon fruit',
      image: './images/ingredients-images/dragon-fruit.png',
    },
    {
      name: 'Dried apricots',
      image: './images/ingredients-images/dried-apricots.png',
    },
    {
      name: 'Dried banana',
      image: './images/ingredients-images/dried-banana.png',
    },
    {
      name: 'Dried curry leaves',
      image: './images/ingredients-images/dried-curry-leaves.png',
    },
    {
      name: 'Dried tomato',
      image: './images/ingredients-images/dried-tomato.png',
    },
    {
      name: 'Dulce de leche',
      image: './images/ingredients-images/dulce-de-leche.png',
    },
    { name: 'Egg', image: './images/ingredients-images/egg.png' },
    {
      name: 'Elderflower cordial',
      image: './images/ingredients-images/elderflower-cordial.png',
    },
    {
      name: 'Farfalle pasta',
      image: './images/ingredients-images/farfalle-pasta.png',
    },
    {
      name: 'Fennel bulb',
      image: './images/ingredients-images/fennel-bulb.png',
    },
    {
      name: 'Fennel seeds',
      image: './images/ingredients-images/fennel-seeds.png',
    },
    {
      name: 'Fenugreek seeds',
      image: './images/ingredients-images/fenugreek-seeds.png',
    },
    {
      name: 'Feta cheese',
      image: './images/ingredients-images/feta-cheese.png',
    },
    {
      name: 'Figs',
      image: './images/ingredients-images/figs.png',
    },
    {
      name: 'Fish sauce',
      image: './images/ingredients-images/fish-sauce.png',
    },
    {
      name: 'Fish stock',
      image: './images/ingredients-images/fish-stock.png',
    },
    {
      name: 'Flaxseed',
      image: './images/ingredients-images/flaxseed.png',
    },
    {
      name: 'French radishes',
      image: './images/ingredients-images/french-radish.png',
    },
    {
      name: 'French stick',
      image: './images/ingredients-images/french-stick.png',
    },
    {
      name: 'Frozen vegetable mix',
      image: './images/ingredients-images/frozen-vegetable-mix.png',
    },
    {
      name: 'Fusilli',
      image: './images/ingredients-images/fusilli.png',
    },
    {
      name: 'Garam masala',
      image: './images/ingredients-images/garam-masala.png',
    },
    { name: 'Garlic', image: './images/ingredients-images/garlic.png' },
    {
      name: 'Garlic butter',
      image: './images/ingredients-images/garlic-butter.png',
    },
    {
      name: 'Garlic granules',
      image: './images/ingredients-images/garlic-granules.png',
    },
    {
      name: 'Garlic oil',
      image: './images/ingredients-images/garlic-oil.png',
    },
    {
      name: 'Garlic paste',
      image: './images/ingredients-images/garlic-paste.png',
    },
    {
      name: 'Gelatine',
      image: './images/ingredients-images/gelatine.png',
    },
    {
      name: 'Ghee',
      image: './images/ingredients-images/ghee.png',
    },
    {
      name: 'Ginger',
      image: './images/ingredients-images/ginger.png',
    },
    {
      name: 'Gluten-free baking powder',
      image: './images/ingredients-images/gluten-free-baking-powder.png',
    },
    {
      name: 'Gluten-free flour',
      image: './images/ingredients-images/gluten-free-flour.png',
    },
    {
      name: 'Gnocchi',
      image: './images/ingredients-images/gnocchi.png',
    },
    {
      name: 'Goat cheese',
      image: './images/ingredients-images/goat-cheese.png',
    },
    {
      name: 'Goji berries',
      image: './images/ingredients-images/goji-berries.png',
    },
    {
      name: 'Golden caster sugar',
      image: './images/ingredients-images/golden-caster-sugar.png',
    },
    {
      name: 'Golden syrup',
      image: './images/ingredients-images/golden-syrup.png',
    },
    {
      name: 'Gooseberries',
      image: './images/ingredients-images/gooseberries.png',
    },
    {
      name: 'Gorgonzola',
      image: './images/ingredients-images/gorgonzola.png',
    },
    {
      name: 'Granary bread',
      image: './images/ingredients-images/granary-bread.png',
    },
    {
      name: 'Granola',
      image: './images/ingredients-images/granola.png',
    },
    {
      name: 'Grapes',
      image: './images/ingredients-images/grapes.png',
    },
    {
      name: 'Grapeseed oil',
      image: './images/ingredients-images/grapeseed-oil.png',
    },
    {
      name: 'Greek yogurt',
      image: './images/ingredients-images/greek-yogurt.png',
    },
    {
      name: 'Green chilli',
      image: './images/ingredients-images/green-chilli.png',
    },
    {
      name: 'Green lentils',
      image: './images/ingredients-images/green-lentils.png',
    },
    {
      name: 'Green olives',
      image: './images/ingredients-images/green-olives.png',
    },
    {
      name: 'Green peas',
      image: './images/ingredients-images/green-peas.png',
    },
    {
      name: 'Ground cloves',
      image: './images/ingredients-images/ground-cloves.png',
    },
    {
      name: 'Groundnut oil',
      image: './images/ingredients-images/groundnut-oil.png',
    },
    {
      name: 'Gruyere cheese',
      image: './images/ingredients-images/gruyere-cheese.png',
    },
    {
      name: 'Guajillo chillies',
      image: './images/ingredients-images/guajillo-chillies.png',
    },
    {
      name: 'Haddock',
      image: './images/ingredients-images/haddock.png',
    },
    {
      name: 'Hake',
      image: './images/ingredients-images/hake.png',
    },
    {
      name: 'Halibut',
      image: './images/ingredients-images/halibut.png',
    },
    {
      name: 'Halloumi',
      image: './images/ingredients-images/halloumi.png',
    },
    {
      name: 'Ham',
      image: './images/ingredients-images/ham.png',
    },
    {
      name: 'Harissa paste',
      image: './images/ingredients-images/harissa-paste.png',
    },
    {
      name: 'Hazelnuts',
      image: './images/ingredients-images/hazelnuts.png',
    },
    {
      name: 'Hemp seeds',
      image: './images/ingredients-images/hemp-seeds.png',
    },
    {
      name: 'Hoisin sauce',
      image: './images/ingredients-images/hoisin-sauce.png',
    },
    {
      name: 'Honey',
      image: './images/ingredients-images/honey.png',
    },
    {
      name: 'Horseradish sauce',
      image: './images/ingredients-images/horseradish-sauce.png',
    },
    {
      name: 'Hot chilli sauce',
      image: './images/ingredients-images/hot-chilli-sauce.png',
    },
    {
      name: 'Hummus',
      image: './images/ingredients-images/hummus.png',
    },
    {
      name: 'Ice cream',
      image: './images/ingredients-images/ice-cream.png',
    },
    {
      name: 'Ice cubes',
      image: './images/ingredients-images/ice-cubes.png',
    },
    {
      name: 'Iceberg lettuce',
      image: './images/ingredients-images/iceberg-lettuce.png',
    },
    {
      name: 'Icing sugar',
      image: './images/ingredients-images/icing-sugar.png',
    },
    {
      name: 'Instant noodles',
      image: './images/ingredients-images/instant-noodles.png',
    },
    {
      name: 'Instant yeast',
      image: './images/ingredients-images/instant-yeast.png',
    },
    {
      name: 'Jackfruit',
      image: './images/ingredients-images/jackfruit.png',
    },
    {
      name: 'Jalapeno',
      image: './images/ingredients-images/jalapeno.png',
    },
    {
      name: 'Kale',
      image: './images/ingredients-images/kale.png',
    },
    {
      name: 'Kefir',
      image: './images/ingredients-images/kefir.png',
    },
    {
      name: 'Ketchup',
      image: './images/ingredients-images/ketchup.png',
    },
    {
      name: 'Kidney beans',
      image: './images/ingredients-images/kidney-beans.png',
    },
    {
      name: 'Kirsch',
      image: './images/ingredients-images/kirsch.png',
    },
    {
      name: 'Kiwi',
      image: './images/ingredients-images/kiwi.png',
    },
    {
      name: 'Lamb',
      image: './images/ingredients-images/lamb.png',
    },
    {
      name: 'Lamb cutlet',
      image: './images/ingredients-images/lamb-cutlet.png',
    },
    {
      name: 'Lamb mince',
      image: './images/ingredients-images/lamb-mince.png',
    },
    {
      name: 'Lard',
      image: './images/ingredients-images/lard.png',
    },
    {
      name: 'Lasagne sheets',
      image: './images/ingredients-images/lasagne-sheets.png',
    },
    {
      name: 'Leek',
      image: './images/ingredients-images/leek.png',
    },
    {
      name: 'Leicester cheese',
      image: './images/ingredients-images/leicester-cheese.png',
    },
    { name: 'Lemon', image: './images/ingredients-images/lemon.png' },
    {
      name: 'Lemongrass',
      image: './images/ingredients-images/lemongrass.png',
    },
    { name: 'Lentils', image: './images/ingredients-images/lentils.png' },
    {
      name: 'Lettuce',
      image: './images/ingredients-images/lettuce.png',
    },
    {
      name: 'Lime',
      image: './images/ingredients-images/lime.png',
    },
    {
      name: 'Lingonberry sauce',
      image: './images/ingredients-images/lingonberry-sauce.png',
    },
    {
      name: 'Linguine pasta',
      image: './images/ingredients-images/linguine-pasta.png',
    },
    {
      name: 'Linseeds',
      image: './images/ingredients-images/linseeds.png',
    },
    {
      name: 'Little gem lettuce',
      image: './images/ingredients-images/little-gem-lettuce.png',
    },
    {
      name: 'Lobster',
      image: './images/ingredients-images/lobster.png',
    },
    {
      name: 'Long grain rice',
      image: './images/ingredients-images/long-grain-rice.png',
    },
    {
      name: 'Maca powder',
      image: './images/ingredients-images/maca-powder.png',
    },
    {
      name: 'Macaroni',
      image: './images/ingredients-images/macaroni.png',
    },
    {
      name: 'Mace',
      image: './images/ingredients-images/mace.png',
    },
    {
      name: 'Mackerel',
      image: './images/ingredients-images/mackerel.png',
    },
    {
      name: 'Madeira cake',
      image: './images/ingredients-images/madeira-cake.png',
    },
    {
      name: 'Malt vinegar',
      image: './images/ingredients-images/malt-vinegar.png',
    },
    {
      name: 'Mango',
      image: './images/ingredients-images/mango.png',
    },
    {
      name: 'Mango chutney',
      image: './images/ingredients-images/mango-chutney.png',
    },
    {
      name: 'Maple syrup',
      image: './images/ingredients-images/maple-syrup.png',
    },
    {
      name: 'Marrow',
      image: './images/ingredients-images/marrow.png',
    },
    {
      name: 'Marshmallow',
      image: './images/ingredients-images/marshmallow.png',
    },
    {
      name: 'Mascarpone',
      image: './images/ingredients-images/mascarpone.png',
    },
    {
      name: 'Matcha powder',
      image: './images/ingredients-images/matcha-powder.png',
    },
    {
      name: 'Mayonnaise',
      image: './images/ingredients-images/mayonnaise.png',
    },
    {
      name: 'Medjool date',
      image: './images/ingredients-images/medjool-date.png',
    },
    {
      name: 'Meringue nests',
      image: './images/ingredients-images/meringue-nests.png',
    },
    {
      name: 'Milk',
      image: './images/ingredients-images/milk.png',
    },
    {
      name: 'Milk chocolate',
      image: './images/ingredients-images/milk-chocolate.png',
    },
    {
      name: 'Mint',
      image: './images/ingredients-images/mint.png',
    },
    {
      name: 'Mirin',
      image: './images/ingredients-images/mirin.png',
    },
    {
      name: 'Mixed beans',
      image: './images/ingredients-images/mixed-beans.png',
    },
    {
      name: 'Mixed berries',
      image: './images/ingredients-images/mixed-berries.png',
    },
    {
      name: 'Mixed dried fruits',
      image: './images/ingredients-images/mixed-dried-fruits.png',
    },
    {
      name: 'Mixed grains',
      image: './images/ingredients-images/mixed-grains.png',
    },
    {
      name: 'Mixed herbs',
      image: './images/ingredients-images/mixed-herbs.png',
    },
    {
      name: 'Mixed seed',
      image: './images/ingredients-images/mixed-seeds.png',
    },
    {
      name: 'Mixed shellfish',
      image: './images/ingredients-images/mixed-shellfish.png',
    },
    {
      name: 'Mixed spice',
      image: './images/ingredients-images/mixed-spice.png',
    },
    {
      name: 'Monkfish',
      image: './images/ingredients-images/monkfish.png',
    },
    {
      name: 'Monterey Jack cheese',
      image: './images/ingredients-images/monterey-jack-cheese.png',
    },
    {
      name: 'Mooli',
      image: './images/ingredients-images/mooli.png',
    },
    {
      name: 'Mozzarella',
      image: './images/ingredients-images/mozzarella.png',
    },
    {
      name: 'Muesli',
      image: './images/ingredients-images/muesli.png',
    },
    {
      name: 'Muscovado sugar',
      image: './images/ingredients-images/muscovado-sugar.png',
    },
    { name: 'Mushroom', image: './images/ingredients-images/mushroom.png' },
    {
      name: 'Mushroom ketchup',
      image: './images/ingredients-images/mushroom-ketchup.png',
    },
    {
      name: 'Mussels',
      image: './images/ingredients-images/mussels.png',
    },
    {
      name: 'Mustard',
      image: './images/ingredients-images/mustard.png',
    },
    {
      name: 'Mustard powder',
      image: './images/ingredients-images/mustard-powder.png',
    },
    {
      name: 'Mustard seeds',
      image: './images/ingredients-images/mustard-seeds.png',
    },
    {
      name: 'Naan bread',
      image: './images/ingredients-images/naan-bread.png',
    },
    {
      name: 'Nduja',
      image: './images/ingredients-images/nduja.png',
    },
    {
      name: 'Nigella seeds',
      image: './images/ingredients-images/nigella-seeds.png',
    },
    {
      name: 'Nori',
      image: './images/ingredients-images/nori.png',
    },
    {
      name: 'Nutella',
      image: './images/ingredients-images/nutella.png',
    },
    {
      name: 'Nutmeg',
      image: './images/ingredients-images/nutmeg.png',
    },
    {
      name: 'Nuts',
      image: './images/ingredients-images/nuts.png',
    },
    {
      name: 'Oat flour',
      image: './images/ingredients-images/oat-flour.png',
    },
    {
      name: 'Oat milk',
      image: './images/ingredients-images/oat-milk.png',
    },
    { name: 'Olive oil', image: './images/ingredients-images/olive-oil.png' },
    { name: 'Onion', image: './images/ingredients-images/onion.png' },
    {
      name: 'Onion granules',
      image: './images/ingredients-images/onion-granules.png',
    },
    {
      name: 'Onion marmalade',
      image: './images/ingredients-images/onion-marmalade.png',
    },
    {
      name: 'Orange',
      image: './images/ingredients-images/orange.png',
    },
    {
      name: 'Oregano',
      image: './images/ingredients-images/oregano.png',
    },
    {
      name: 'Oyster sauce',
      image: './images/ingredients-images/oyster-sauce.png',
    },
    {
      name: 'Oysters',
      image: './images/ingredients-images/oysters.png',
    },
    {
      name: 'Pak choi',
      image: './images/ingredients-images/pak-choi.png',
    },
    {
      name: 'Pancetta',
      image: './images/ingredients-images/pancetta.png',
    },
    {
      name: 'Paneer cheese',
      image: './images/ingredients-images/paneer-cheese.png',
    },
    {
      name: 'Pappardelle pasta',
      image: './images/ingredients-images/pappardelle-pasta.png',
    },
    {
      name: 'Paprika',
      image: './images/ingredients-images/paprika.png',
    },
    {
      name: 'Parmesan',
      image: './images/ingredients-images/parmesan.png',
    },
    {
      name: 'Parsley',
      image: './images/ingredients-images/parsley.png',
    },
    {
      name: 'Parsnip',
      image: './images/ingredients-images/parsnip.png',
    },
    {
      name: 'Passion fruit',
      image: './images/ingredients-images/passion-fruit.png',
    },
    {
      name: 'Pasta',
      image: './images/ingredients-images/pasta.png',
    },
    {
      name: 'Pasta sauce',
      image: './images/ingredients-images/pasta-sauce.png',
    },
    {
      name: 'Pea shoots',
      image: './images/ingredients-images/pea-shoots.png',
    },
    {
      name: 'Peach',
      image: './images/ingredients-images/peach.png',
    },
    {
      name: 'Peanut butter',
      image: './images/ingredients-images/peanut-butter.png',
    },
    {
      name: 'Peanuts',
      image: './images/ingredients-images/peanuts.png',
    },
    {
      name: 'Peas',
      image: './images/ingredients-images/peas.png',
    },
    {
      name: 'Pecans',
      image: './images/ingredients-images/pecans.png',
    },
    {
      name: 'Pecorino cheese',
      image: './images/ingredients-images/pecorino-cheese.png',
    },
    {
      name: 'Penne pasta',
      image: './images/ingredients-images/penne-pasta.png',
    },
    {
      name: 'Peppadew peppers',
      image: './images/ingredients-images/peppadew-peppers.png',
    },
    {
      name: 'Peppercorns',
      image: './images/ingredients-images/peppercorns.png',
    },
    {
      name: 'Peppermint extract',
      image: './images/ingredients-images/peppermint-extract.png',
    },
    {
      name: 'Pepperoni',
      image: './images/ingredients-images/pepperoni.png',
    },
    {
      name: 'Pesto',
      image: './images/ingredients-images/pesto.png',
    },
    {
      name: 'Pickled chilli',
      image: './images/ingredients-images/pickled-chilli.png',
    },
    {
      name: 'Pickled cucumber',
      image: './images/ingredients-images/pickled-cucumber.png',
    },
    {
      name: 'Pickled jalapeno',
      image: './images/ingredients-images/pickled-jalapeno.png',
    },
    {
      name: 'Pine nuts',
      image: './images/ingredients-images/pine-nuts.png',
    },
    {
      name: 'Pineapple',
      image: './images/ingredients-images/pineapple.png',
    },
    {
      name: 'Pinto beans',
      image: './images/ingredients-images/pinto-beans.png',
    },
    {
      name: 'Piri-piri sauce',
      image: './images/ingredients-images/piri-piri-sauce.png',
    },
    {
      name: 'Pistachios',
      image: './images/ingredients-images/pistachios.png',
    },
    {
      name: 'Pitta bread',
      image: './images/ingredients-images/pitta-bread.png',
    },
    {
      name: 'Pizza base',
      image: './images/ingredients-images/pizza-base.png',
    },
    {
      name: 'Plums',
      image: './images/ingredients-images/plums.png',
    },
    {
      name: 'Pollock',
      image: './images/ingredients-images/pollock.png',
    },
    {
      name: 'Pomegranate',
      image: './images/ingredients-images/pomegranate.png',
    },
    {
      name: 'Pomegranate molasses',
      image: './images/ingredients-images/pomegranate-molasses.png',
    },
    {
      name: 'Poppy seeds',
      image: './images/ingredients-images/poppy-seeds.png',
    },
    {
      name: 'Porcini mushrooms',
      image: './images/ingredients-images/porcini-mushrooms.png',
    },
    {
      name: 'Pork',
      image: './images/ingredients-images/pork.png',
    },
    {
      name: 'Pork belly',
      image: './images/ingredients-images/pork-belly.png',
    },
    {
      name: 'Pork chipolata',
      image: './images/ingredients-images/pork-chipolata.png',
    },
    {
      name: 'Pork meatballs',
      image: './images/ingredients-images/pork-meatballs.png',
    },
    {
      name: 'Pork mince',
      image: './images/ingredients-images/pork-mince.png',
    },
    {
      name: 'Pork ribs',
      image: './images/ingredients-images/pork-ribs.png',
    },
    {
      name: 'Porridge oats',
      image: './images/ingredients-images/porridge-oats.png',
    },
    {
      name: 'Potato',
      image: './images/ingredients-images/potato.png',
    },
    {
      name: 'Prawns',
      image: './images/ingredients-images/prawns.png',
    },
    {
      name: 'Prosciutto',
      image: './images/ingredients-images/prosciutto.png',
    },
    {
      name: 'Protein powder',
      image: './images/ingredients-images/protein-powder.png',
    },
    {
      name: 'Puff pastry',
      image: './images/ingredients-images/puff-pastry.png',
    },
    {
      name: 'Pumpkin',
      image: './images/ingredients-images/pumpkin.png',
    },
    {
      name: 'Pumpkin seeds',
      image: './images/ingredients-images/pumpkin-seeds.png',
    },
    {
      name: 'Quark',
      image: './images/ingredients-images/quark.png',
    },
    { name: 'Quinoa', image: './images/ingredients-images/quinoa.png' },
    {
      name: 'Raisins',
      image: './images/ingredients-images/raisins.png',
    },
    {
      name: 'Ramen noodles',
      image: './images/ingredients-images/ramen-noodles.png',
    },
    {
      name: 'Rapeseed oil',
      image: './images/ingredients-images/rapeseed-oil.png',
    },
    {
      name: 'Ras el hanout',
      image: './images/ingredients-images/ras-el-hanout.png',
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
      name: 'Red Leicester',
      image: './images/ingredients-images/red-leicester.png',
    },
    {
      name: 'Red cabbage',
      image: './images/ingredients-images/red-cabbage.png',
    },
    {
      name: 'Red chilli',
      image: './images/ingredients-images/red-chilli.png',
    },
    {
      name: 'Red curry paste',
      image: './images/ingredients-images/red-curry-paste.png',
    },
    {
      name: 'Red food colouring',
      image: './images/ingredients-images/red-food-colouring.png',
    },
    {
      name: 'Red lentils',
      image: './images/ingredients-images/red-lentils.png',
    },
    {
      name: 'Red onion',
      image: './images/ingredients-images/red-onion.png',
    },
    {
      name: 'Red pear',
      image: './images/ingredients-images/red-pear.png',
    },
    {
      name: 'Red pesto',
      image: './images/ingredients-images/red-pesto.png',
    },
    {
      name: 'Red wine',
      image: './images/ingredients-images/red-wine.png',
    },
    {
      name: 'Red wine vinegar',
      image: './images/ingredients-images/red-wine-vinegar.png',
    },
    {
      name: 'Redcurrants',
      image: './images/ingredients-images/redcurrants.png',
    },
    {
      name: 'Rice',
      image: './images/ingredients-images/rice.png',
    },
    {
      name: 'Rice flour',
      image: './images/ingredients-images/rice-flour.png',
    },
    {
      name: 'Rice milk',
      image: './images/ingredients-images/rice-milk.png',
    },
    {
      name: 'Rice noodles',
      image: './images/ingredients-images/rice-noodles.png',
    },
    {
      name: 'Rice pudding',
      image: './images/ingredients-images/rice-pudding.png',
    },
    {
      name: 'Rice vinegar',
      image: './images/ingredients-images/rice-vinegar.png',
    },
    {
      name: 'Rice wine',
      image: './images/ingredients-images/rice-wine.png',
    },
    {
      name: 'Ricotta cheese',
      image: './images/ingredients-images/ricotta-cheese.png',
    },
    {
      name: 'Rigatoni',
      image: './images/ingredients-images/rigatoni.png',
    },
    {
      name: 'Risotto rice',
      image: './images/ingredients-images/risotto-rice.png',
    },
    {
      name: 'Romaine lettuce',
      image: './images/ingredients-images/romaine-lettuce.png',
    },
    {
      name: 'Rucola',
      image: './images/ingredients-images/rucola.png',
    },
    {
      name: 'Rum',
      image: './images/ingredients-images/rum.png',
    },
    {
      name: 'Rutabaga',
      image: './images/ingredients-images/rutabaga.png',
    },
    {
      name: 'Rye flour',
      image: './images/ingredients-images/rye-flour.png',
    },
    {
      name: 'Saffron',
      image: './images/ingredients-images/saffron.png',
    },
    {
      name: 'Sage',
      image: './images/ingredients-images/sage.png',
    },
    {
      name: 'Salad cream',
      image: './images/ingredients-images/salad-cream.png',
    },
    {
      name: 'Salami',
      image: './images/ingredients-images/salami.png',
    },
    { name: 'Salmon', image: './images/ingredients-images/salmon.png' },
    {
      name: 'Salt',
      image: './images/ingredients-images/salt.png',
    },
    {
      name: 'Sardines',
      image: './images/ingredients-images/sardines.png',
    },
    {
      name: 'Sausage meat',
      image: './images/ingredients-images/sausage-meat.png',
    },
    {
      name: 'Sausages',
      image: './images/ingredients-images/sausages.png',
    },
    {
      name: 'Savoy cabbage',
      image: './images/ingredients-images/savoy-cabbage.png',
    },
    {
      name: 'Scallops',
      image: './images/ingredients-images/scallops.png',
    },
    {
      name: 'Seafood mix',
      image: './images/ingredients-images/seafood-mix.png',
    },
    {
      name: 'Seaweed',
      image: './images/ingredients-images/seaweed.png',
    },
    {
      name: 'Semolina flour',
      image: './images/ingredients-images/semolina-flour.png',
    },
    {
      name: 'Sesame oil',
      image: './images/ingredients-images/sesame-oil.png',
    },
    {
      name: 'Sesame seeds',
      image: './images/ingredients-images/sesame-seeds.png',
    },
    {
      name: 'Shaoxing wine',
      image: './images/ingredients-images/shaoxing-wine.png',
    },
    {
      name: 'Shichimi',
      image: './images/ingredients-images/shichimi.png',
    },
    {
      name: 'Shortbread',
      image: './images/ingredients-images/shortbread.png',
    },
    {
      name: 'Shortcrust pastry',
      image: './images/ingredients-images/shortcrust-pastry.png',
    },
    {
      name: 'Single cream',
      image: './images/ingredients-images/single-cream.png',
    },
    {
      name: 'Smoked cheese',
      image: './images/ingredients-images/smoked-cheese.png',
    },
    {
      name: 'Sourdough base',
      image: './images/ingredients-images/sourdough-base.png',
    },
    {
      name: 'Soured cream',
      image: './images/ingredients-images/soured-cream.png',
    },
    {
      name: 'Soy milk',
      image: './images/ingredients-images/soy-milk.png',
    },
    {
      name: 'Soy sauce',
      image: './images/ingredients-images/soy-sauce.png',
    },
    {
      name: 'Soy yogurt',
      image: './images/ingredients-images/soy-yogurt.png',
    },
    {
      name: 'Spaghetti',
      image: './images/ingredients-images/spaghetti.png',
    },
    {
      name: 'Spelt flour',
      image: './images/ingredients-images/spelt-flour.png',
    },
    { name: 'Spinach', image: './images/ingredients-images/spinach.png' },
    {
      name: 'Spirulina',
      image: './images/ingredients-images/spirulina.png',
    },
    {
      name: 'Spring onion',
      image: './images/ingredients-images/spring-onion.png',
    },
    {
      name: 'Spring roll wrappers',
      image: './images/ingredients-images/spring-roll-wrappers.png',
    },
    {
      name: 'Sprinkles',
      image: './images/ingredients-images/sprinkles.png',
    },
    {
      name: 'Squid',
      image: './images/ingredients-images/squid.png',
    },
    {
      name: 'Sriracha',
      image: './images/ingredients-images/sriracha.png',
    },
    {
      name: 'Star anise',
      image: './images/ingredients-images/star-anise.png',
    },
    {
      name: 'Strawberries',
      image: './images/ingredients-images/strawberries.png',
    },
    {
      name: 'Suet',
      image: './images/ingredients-images/suet.png',
    },
    {
      name: 'Sugar',
      image: './images/ingredients-images/sugar.png',
    },
    {
      name: 'Sugar pea',
      image: './images/ingredients-images/sugar-pea.png',
    },
    {
      name: 'Sultans',
      image: './images/ingredients-images/sultans.png',
    },
    {
      name: 'Sumac',
      image: './images/ingredients-images/sumac.png',
    },
    {
      name: 'Sunflower oil',
      image: './images/ingredients-images/sunflower-oil.png',
    },
    {
      name: 'Sunflower seeds',
      image: './images/ingredients-images/sunflower-seeds.png',
    },
    {
      name: 'Sweet brown ale',
      image: './images/ingredients-images/sweet-brown-ale.png',
    },
    {
      name: 'Sweet chilli sauce',
      image: './images/ingredients-images/sweet-chilli-sauce.png',
    },
    {
      name: 'Sweet potato',
      image: './images/ingredients-images/sweet-potato.png',
    },
    {
      name: 'Sweetcorn',
      image: './images/ingredients-images/sweetcorn.png',
    },
    {
      name: 'Swiss chard',
      image: './images/ingredients-images/swiss-chard.png',
    },
    {
      name: 'Tabasco sauce',
      image: './images/ingredients-images/tabasco-sauce.png',
    },
    {
      name: 'Taco shells',
      image: './images/ingredients-images/taco-shells.png',
    },
    {
      name: 'Tagliatelle pasta',
      image: './images/ingredients-images/tagliatelle-pasta.png',
    },
    {
      name: 'Tahini',
      image: './images/ingredients-images/tahini.png',
    },
    {
      name: 'Tarragon',
      image: './images/ingredients-images/tarragon.png',
    },
    {
      name: 'Teriyaki sauce',
      image: './images/ingredients-images/teriyaki-sauce.png',
    },
    {
      name: 'Thyme',
      image: './images/ingredients-images/thyme.png',
    },
    {
      name: 'Toblerone',
      image: './images/ingredients-images/toblerone.png',
    },
    {
      name: 'Toffee sauce',
      image: './images/ingredients-images/toffee-sauce.png',
    },
    {
      name: 'Tofu',
      image: './images/ingredients-images/tofu.png',
    },
    { name: 'Tomato', image: './images/ingredients-images/tomato.png' },
    {
      name: 'Tomato paste',
      image: './images/ingredients-images/tomato-paste.png',
    },
    {
      name: 'Tomato salsa',
      image: './images/ingredients-images/tomato-salsa.png',
    },
    {
      name: 'Tortellini',
      image: './images/ingredients-images/tortellini.png',
    },
    {
      name: 'Tortilla chips',
      image: './images/ingredients-images/tortilla-chips.png',
    },
    {
      name: 'Tortillas',
      image: './images/ingredients-images/tortillas.png',
    },
    {
      name: 'Tropical fruit juice',
      image: './images/ingredients-images/tropical-fruit-juice.png',
    },
    {
      name: 'Trout',
      image: './images/ingredients-images/trout.png',
    },
    {
      name: 'Tuna',
      image: './images/ingredients-images/tuna.png',
    },
    {
      name: 'Turkey',
      image: './images/ingredients-images/turkey.png',
    },
    {
      name: 'Turkey mince',
      image: './images/ingredients-images/turkey-mince.png',
    },
    {
      name: 'Turmeric',
      image: './images/ingredients-images/turmeric.png',
    },
    {
      name: 'Tzatziki',
      image: './images/ingredients-images/tzatziki.png',
    },
    {
      name: 'Unsalted butter',
      image: './images/ingredients-images/unsalted-butter.png',
    },
    {
      name: 'Vanilla custard',
      image: './images/ingredients-images/vanilla-custard.png',
    },
    {
      name: 'Vanilla extract',
      image: './images/ingredients-images/vanilla-extract.png',
    },
    {
      name: 'Vanilla pod',
      image: './images/ingredients-images/vanilla-pod.png',
    },
    {
      name: 'Vegan mayonnaise',
      image: './images/ingredients-images/vegan-mayonnaise.png',
    },
    {
      name: 'Vegan mozzarella',
      image: './images/ingredients-images/vegan-mozzarella.png',
    },
    {
      name: 'Vegetable bouillon',
      image: './images/ingredients-images/vegetable-bouillon.png',
    },
    {
      name: 'Vegetable powder',
      image: './images/ingredients-images/vegetable-powder.png',
    },
    {
      name: 'Vegetable stock',
      image: './images/ingredients-images/vegetable-stock.png',
    },
    {
      name: 'Vegetable stock cube',
      image: './images/ingredients-images/vegetable-stock-cube.png',
    },
    {
      name: 'Vegetarian feta',
      image: './images/ingredients-images/vegetarian-feta.png',
    },
    {
      name: 'Vegetarian mince',
      image: './images/ingredients-images/vegetarian-mince.png',
    },
    {
      name: 'Veggie sausages',
      image: './images/ingredients-images/veggie-sausages.png',
    },
    {
      name: 'Vermicelli pasta',
      image: './images/ingredients-images/vermicelli-pasta.png',
    },
    { name: 'Vinegar', image: './images/ingredients-images/vinegar.png' },
    {
      name: 'Vodka',
      image: './images/ingredients-images/vodka.png',
    },
    {
      name: 'Walnuts',
      image: './images/ingredients-images/walnuts.png',
    },
    {
      name: 'Wasabi',
      image: './images/ingredients-images/wasabi.png',
    },
    {
      name: 'Water',
      image: './images/ingredients-images/water.png',
    },
    {
      name: 'Watercress',
      image: './images/ingredients-images/watercress.png',
    },
    {
      name: 'Watermelon',
      image: './images/ingredients-images/watermelon.png',
    },
    {
      name: 'Whipping cream',
      image: './images/ingredients-images/whipping-cream.png',
    },
    {
      name: 'Whiskey',
      image: './images/ingredients-images/whiskey.png',
    },
    {
      name: 'White baps',
      image: './images/ingredients-images/white-baps.png',
    },
    {
      name: 'White bread',
      image: './images/ingredients-images/white-bread.png',
    },
    {
      name: 'White chocolate',
      image: './images/ingredients-images/white-chocolate.png',
    },
    {
      name: 'White flour',
      image: './images/ingredients-images/white-flour.png',
    },
    {
      name: 'White marzipan',
      image: './images/ingredients-images/white-marzipan.png',
    },
    {
      name: 'White miso',
      image: './images/ingredients-images/white-miso.png',
    },
    {
      name: 'White pepper',
      image: './images/ingredients-images/white-pepper.png',
    },
    {
      name: 'White wine',
      image: './images/ingredients-images/white-wine.png',
    },
    {
      name: 'White wine vinegar',
      image: './images/ingredients-images/white-wine-vinegar.png',
    },
    {
      name: 'Wholegrain mustard',
      image: './images/ingredients-images/wholegrain-mustard.png',
    },
    {
      name: 'Wholemeal bread bun',
      image: './images/ingredients-images/wholemeal-bread-bun.png',
    },
    {
      name: 'Wholemeal breadcrumbs',
      image: './images/ingredients-images/wholemeal-breadcrumbs.png',
    },
    {
      name: 'Wholemeal flour',
      image: './images/ingredients-images/wholemeal-flour.png',
    },
    {
      name: 'Wholemeal spaghetti',
      image: './images/ingredients-images/wholemeal-spaghetti.png',
    },
    {
      name: 'Wild rice',
      image: './images/ingredients-images/wild-rice.png',
    },
    {
      name: 'Worcestershire sauce',
      image: './images/ingredients-images/Worcestershire-sauce.png',
    },
    {
      name: 'Xanthan gum',
      image: './images/ingredients-images/xanthan-gum.png',
    },
    {
      name: 'Yellow tomato',
      image: './images/ingredients-images/yellow-tomato.png',
    },
    {
      name: 'Yogurt',
      image: './images/ingredients-images/yogurt.png',
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
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('Favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem('Favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (recipe) => {
    setFavorites((currentFavorites) => {
      if (currentFavorites.some((fav) => fav.name === recipe.name)) {
        return currentFavorites.filter((fav) => fav.name !== recipe.name);
      } else {
        return [...currentFavorites, recipe];
      }
    });
  };

  const [showRecipes, setShowRecipes] = useState(false);

  function handleButtonClick() {
    const selectedIngredients = ingredients
      .filter((ingredient) => ingredient.selected)
      .map((ingredient) => ingredient.name);

    const recipesWithMatch = jsonData.filter((recipe) =>
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

  const handleAIRecClick = async () => {
    document.querySelector('.overlay').style.display = 'flex';
    const selectedIngredients = ingredients
      .filter((ingredient) => ingredient.selected)
      .map((ingredient) => ingredient.name);

    try {
      const response = await fetch(
        'https://recipe-finder-v1.vercel.app/api/generate-recipe',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ingredients: selectedIngredients }),
        },
      );
      const recipeText = await response.text();
      document.querySelector('.overlay').style.display = 'none';

      setGeneratedRecipe(recipeText);
      setActivePage('generated-recipe');
    } catch (error) {
      document.querySelector('.overlay').style.display = 'none';
      console.error('Eroare la generarea rețetei', error);
    }
  };

  return (
    <div className="flex flex-col">
      {!hasSeenMessage && (
        <div className="p-4 z-50 fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center">
          <div className=" flex flex-col gap-2 bg-[var(--bg-secondary)] p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl text-[var(--primary)]">
              Important Notice for Optimal App Experience
            </h3>
            <p>
              To ensure the best experience with our app, it is crucial to
              select all the ingredients you currently have in your kitchen.
              This includes not only the main items like fruits, vegetables, and
              meats, but also the essentials often overlooked – such as bread,
              spices, salt, and even alcoholic beverages. Accurate selection of
              every ingredient at hand is key to getting the most relevant and
              creative recipe suggestions.
            </p>
            <button
              onClick={handleOkClick}
              className="mt-4 bg-[var(--primary)] text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            >
              Ok
            </button>
          </div>
        </div>
      )}
      {!showRecipes && (
        <div className="flex flex-col items-center px-4 gap-2 pt-2 flex-grow fadeIn">
          <h3 className="font-capriola text-sm font-medium text-[var(--primary)] text-center">
            Select the ingredients you have right now in the kitchen
          </h3>
          <div className="flex justify-around gap-4 w-full">
            <div className="container-input">
              <button
                onClick={handleAIRecClick}
                title="Artificial Inteligence recipes"
                className="h-9 premium text-white text-xs font-candal px-4 py-3 rounded-l-lg fadeIn"
              >
                AI Rec
              </button>

              <input
                type="text"
                placeholder="  Search"
                name="text"
                className="input2"
                value={searchText}
                onChange={handleSearchChange}
              />
              <button
                className="h-9 bg-[var(--primary)]  text-white text-xs font-candal px-4 py-3 rounded-r-lg fadeIn"
                onClick={handleButtonClick}
              >
                Submit
              </button>
            </div>
          </div>
          <div className="overlay" style={{ display: 'none' }}>
            <div className="loader"></div>
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
                <p className="text-center text-xs">{ingredient.name}</p>
              </div>
            ))}
          </section>
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
                  src={recipe.image_url}
                  alt={recipe.title}
                  className="h-20 w-32 fadeIn"
                ></img>
              </picture>
              <aside className="relative h-20 w-full bg-[var(--bg-secondary)] rounded-r-lg flex flex-col gap-1 items-center justify-center expandRight">
                <h3 className="text-base text-center font-candal font-bold text-[var(--primary)] fadeInDelayed">
                  {recipe.title}
                </h3>
                <div className="flex gap-4 items-center">
                  <a
                    href={recipe.recipe_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      onClick={() => handleRecipeClick(recipe)}
                      className="bg-[var(--primary)] text-white font-candal px-10 py-1 rounded-lg fadeInDelayed"
                    >
                      Recipe
                    </button>
                  </a>
                  <FontAwesomeIcon
                    icon={
                      favorites.some((fav) => fav.name === recipe.title)
                        ? fasStar
                        : farStar
                    }
                    onClick={() =>
                      toggleFavorite({
                        name: recipe.title,
                        imgSrc: recipe.image_url,
                        recipeUrl: recipe.recipe_url,
                        original: recipe.original,
                        steps: recipe.steps,
                        ingredients: recipe.ingredients,
                      })
                    }
                    className={`cursor-pointer ${
                      favorites.some((fav) => fav.name === recipe.title)
                        ? 'text-yellow-500'
                        : '--primary'
                    } text-xl fadeInDelayed`}
                  />
                  {recipe.original && (
                    <picture className="w-10 h-10 absolute right-0 bottom-0">
                      <img
                        src={originalRecipeImage}
                        alt="GPT Recipe"
                        title="GPT Recipe"
                      />
                    </picture>
                  )}
                </div>
              </aside>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
