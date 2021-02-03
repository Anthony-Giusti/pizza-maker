const pizzaSizes = { sizes: ['Small (10")', 'Medium (12")', 'Large (14")', 'Extra Large (16")'] };

const pizzaStyles = {
  styles: [
    {
      name: 'New York',
      id: 'newYork',
      description: 'Consectetur cillum nostrud elit laborum tempor aliqua incididunt laboris sit.',
    },
    {
      name: 'Deep Dish',
      id: 'deepDish',
      description: 'Proident amet consequat laborum ad sunt ad culpa laboris cillum amet velit.',
    },
    {
      name: 'Crispy Crust',
      id: 'crispyCrust',
      description:
        'Ex tempor id adipisicing anim id ex anim aute cillum eiusmod nostrud ipsum incididunt.',
    },
  ],
};

const pizzaSaucesData = [
  {
    name: 'Classic Tomato',
    id: 'classicTomato',
    img:
      'https://res.cloudinary.com/diby2nljo/image/upload/v1612210178/Pizza%20Maker/Pizza/Sauce/pizzaSauceTomato.png',
    description: 'Veniam ex officia reprehenderit ipsum.',
  },
  {
    name: 'Pesto',
    id: 'pesto',
    img:
      'https://res.cloudinary.com/diby2nljo/image/upload/v1612210142/Pizza%20Maker/Pizza/Sauce/pizzaSaucePesto.png',
    description: 'Irure sit nisi incididunt eu commodo sit.',
  },
  {
    name: 'Hearty Marinara',
    id: 'heartyMarinara',
    img:
      'https://res.cloudinary.com/diby2nljo/image/upload/v1612210167/Pizza%20Maker/Pizza/Sauce/pizzaSauceMarinara.png',
    description: 'Aliqua ex velit et incididunt.',
  },
  {
    name: 'Romesco',
    id: 'romesco',
    img:
      'https://res.cloudinary.com/diby2nljo/image/upload/v1612210138/Pizza%20Maker/Pizza/Sauce/pizzaSauceRomesco.png',
    description: 'Incididunt ut excepteur quis do ex voluptate.',
  },
];

const pizzaCheesesData = [
  {
    name: 'Mozzarella',
    id: 'mozzarella',
    img:
      'https://res.cloudinary.com/diby2nljo/image/upload/v1612210086/Pizza%20Maker/Pizza/Cheese/pizzaCheeseMoz.png',
  },
  {
    name: 'Cheddar',
    id: 'cheddar',
    img:
      'https://res.cloudinary.com/diby2nljo/image/upload/v1612210079/Pizza%20Maker/Pizza/Cheese/pizzaCheeseCheddar.png',
  },
  {
    name: '4 Cheese',
    id: '4Cheese',
    img:
      'https://res.cloudinary.com/diby2nljo/image/upload/v1612210082/Pizza%20Maker/Pizza/Cheese/pizzaCheese4Cheese.png',
    description: 'Mollit duis aliqua officia esse officia esse minim veniam.',
  },
  {
    name: 'Vegan Daiya Mozzarella',
    id: 'veganDaiyaMozzarella',
    img:
      'https://res.cloudinary.com/diby2nljo/image/upload/v1612210118/Pizza%20Maker/Pizza/Cheese/pizzaCheeseDaiya.png',
  },
  { name: 'No Cheese', id: 'noCheese', img: '' },
];

const pizzaToppingsData = [
  {
    name: 'Ham',
    id: 'ham',
    img: {
      full:
        'https://res.cloudinary.com/diby2nljo/image/upload/v1612210040/Pizza%20Maker/Pizza/Toppings/hamFull.png',
      left:
        'https://res.cloudinary.com/diby2nljo/image/upload/v1612210038/Pizza%20Maker/Pizza/Toppings/hamLeft.png',
      right:
        'https://res.cloudinary.com/diby2nljo/image/upload/v1612210039/Pizza%20Maker/Pizza/Toppings/hamRight.png',
    },
  },
  {
    name: 'Bacon',
    id: 'bacon',
    img: {
      full:
        'https://res.cloudinary.com/diby2nljo/image/upload/v1612210037/Pizza%20Maker/Pizza/Toppings/baconFull.png',
      left:
        'https://res.cloudinary.com/diby2nljo/image/upload/v1612210035/Pizza%20Maker/Pizza/Toppings/baconLeft.png',
      right:
        'https://res.cloudinary.com/diby2nljo/image/upload/v1612210036/Pizza%20Maker/Pizza/Toppings/baconRight.png',
    },
  },
  {
    name: 'Pepperoni',
    id: 'pepperoni',
    img: {
      full:
        'https://res.cloudinary.com/diby2nljo/image/upload/v1612210035/Pizza%20Maker/Pizza/Toppings/peppFull.png',
      left:
        'https://res.cloudinary.com/diby2nljo/image/upload/v1612210035/Pizza%20Maker/Pizza/Toppings/peppLeft.png',
      right:
        'https://res.cloudinary.com/diby2nljo/image/upload/v1612210034/Pizza%20Maker/Pizza/Toppings/peppRight.png',
    },
  },
  {
    name: 'Beyond Beef',
    id: 'beyondBeef',
    img: {
      full:
        'https://res.cloudinary.com/diby2nljo/image/upload/v1612210036/Pizza%20Maker/Pizza/Toppings/beefFull.png',
      left:
        'https://res.cloudinary.com/diby2nljo/image/upload/v1612210036/Pizza%20Maker/Pizza/Toppings/beefLeft.png',
      right:
        'https://res.cloudinary.com/diby2nljo/image/upload/v1612210036/Pizza%20Maker/Pizza/Toppings/beefRight.png',
    },
  },
  {
    name: 'Onion',
    id: 'onion',
    img: {
      full:
        'https://res.cloudinary.com/diby2nljo/image/upload/v1612210040/Pizza%20Maker/Pizza/Toppings/onionFull.png',
      left:
        'https://res.cloudinary.com/diby2nljo/image/upload/v1612210040/Pizza%20Maker/Pizza/Toppings/onionLeft.png',
      right:
        'https://res.cloudinary.com/diby2nljo/image/upload/v1612210040/Pizza%20Maker/Pizza/Toppings/onionRight.png',
    },
  },
  {
    name: 'Green Peppers',
    id: 'greenPeppers',
    img: {
      full:
        'https://res.cloudinary.com/diby2nljo/image/upload/v1612210039/Pizza%20Maker/Pizza/Toppings/greenPeppFull.png',
      left:
        'https://res.cloudinary.com/diby2nljo/image/upload/v1612210037/Pizza%20Maker/Pizza/Toppings/greenLeft.png',
      right:
        'https://res.cloudinary.com/diby2nljo/image/upload/v1612210039/Pizza%20Maker/Pizza/Toppings/greenPeppRight.png',
    },
  },
  {
    name: 'Green Olives',
    id: 'greenOlives',
    img: {
      full:
        'https://res.cloudinary.com/diby2nljo/image/upload/v1612210038/Pizza%20Maker/Pizza/Toppings/greenOliveFull.png',
      left:
        'https://res.cloudinary.com/diby2nljo/image/upload/v1612210038/Pizza%20Maker/Pizza/Toppings/greenOliveLeft.png',
      right:
        'https://res.cloudinary.com/diby2nljo/image/upload/v1612210037/Pizza%20Maker/Pizza/Toppings/greenOliveRight.png',
    },
  },
  {
    name: 'Black Olvies',
    id: 'blackOlives',
    img: {
      full:
        'https://res.cloudinary.com/diby2nljo/image/upload/v1612210036/Pizza%20Maker/Pizza/Toppings/blackOliveFull.png',
      left:
        'https://res.cloudinary.com/diby2nljo/image/upload/v1612210037/Pizza%20Maker/Pizza/Toppings/blackOliveLeft.png',
      right:
        'https://res.cloudinary.com/diby2nljo/image/upload/v1612210037/Pizza%20Maker/Pizza/Toppings/blackOliveRight.png',
    },
  },
  {
    name: 'Pineapple',
    id: 'pineapple',
    img: {
      full:
        'https://res.cloudinary.com/diby2nljo/image/upload/v1612210036/Pizza%20Maker/Pizza/Toppings/pineFull.png',
      left:
        'https://res.cloudinary.com/diby2nljo/image/upload/v1612210036/Pizza%20Maker/Pizza/Toppings/pineLeft.png',
      right:
        'https://res.cloudinary.com/diby2nljo/image/upload/v1612210035/Pizza%20Maker/Pizza/Toppings/pineRight.png',
    },
  },
  {
    name: 'Mushrooms',
    id: 'mushrooms',
    img: {
      full:
        'https://res.cloudinary.com/diby2nljo/image/upload/v1612210038/Pizza%20Maker/Pizza/Toppings/mushFull.png',
      left:
        'https://res.cloudinary.com/diby2nljo/image/upload/v1612210040/Pizza%20Maker/Pizza/Toppings/mushLeft.png',
      right:
        'https://res.cloudinary.com/diby2nljo/image/upload/v1612210040/Pizza%20Maker/Pizza/Toppings/mushRight.png',
    },
  },
];

const pizzaBase =
  'https://res.cloudinary.com/diby2nljo/image/upload/v1612210243/Pizza%20Maker/Pizza/pizzabase.png';

export { pizzaSizes, pizzaStyles, pizzaSaucesData, pizzaCheesesData, pizzaToppingsData, pizzaBase };
