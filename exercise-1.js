const people = [
    { name: 'Adam Scott', age: 23 },
    { name: 'Mary Sulle', age: 17 },
    { name: 'Paul Chateaubriand', age: 18 },
    { name: 'Nicole Jhonnes', age: 74 },
    { name: 'Anny Nephew', age: 26 },
    { name: 'Luke Skywalker', age: 17 },
    { name: 'Patrick dos Santos', age: 13 },
    { name: 'Luna Spitkovics', age: 13 },
    { name: 'Andrea Parphat', age: 13 },
    { name: 'Ronald Simnpson', age: 45 },
    { name: 'Tom Broilles', age: 12 },
    { name: 'Jullius Spin FAnni', age: 08 },
    { name: 'Patrice Bruce', age: 15 },
    { name: 'Mark Kail', age: 19 },
    { name: 'Andre Void', age: 54 }
]

const recipes = [
    {
        name: 'Rice',
        ingredients: [
            {
                name: 'rice',
                amount: 250
            },
            {
                name: 'salt',
                amount: 5
            },
            {
                name: 'onion',
                amount: 50
            },
            {
                name: 'garlic',
                amount: 50
            },
            {
                name: 'pepper',
                amount: 10
            }
        ]
    },
    {
        name: 'Pancakes',
        ingredients: [
            {
                name: 'flour',
                amount: 100
            },
            {
                name: 'milk',
                amount: 300
            },
            {
                name: 'sugar',
                amount: 50
            },
            {
                name: 'eggs',
                amount: 50
            }
        ]
    },
    {
        name: 'Chicken & mushroom risotto',
        ingredients: [
            {
                name: 'butter',
                amount: 50
            },
            {
                name: 'onion',
                amount: 50
            },
            {
                name: 'mushrooms',
                amount: 250
            },
            {
                name: 'arborio risotto rice',
                amount: 300
            },
            {
                name: 'dry white wine',
                amount: 150
            }
        ]
    },
    {
        name: 'Crusty garlic bread',
        ingredients: [
            {
                name: 'butter',
                amount: 60
            },
            {
                name: 'garlic',
                amount: 35
            },
            {
                name: '1 part-baked white baguette',
                amount: 150
            }
        ]
    }
]

// FILTER, FILTER, MAP and REDUCE exercises
// 1 - Only return people of even age
const evenPeople = people.filter(({ age }) => age % 2 === 0);

console.log({ evenPeople });

// 2 - Return the person with exactly 45 years
const oldPerson = people.find(({ age }) => age === 45);
console.log({ oldPerson });

// 3 - Return people with an additional "slug" field, which should contain a friendly url string with the username
const slugify = function (text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
}

const sluggedPeople = people.map(person => ({ ...person, slug: slugify(person.name) }));
console.log({ sluggedPeople });

// 4 - Return the sum of the ages
const sumOfAges = people.reduce((acc, { age }) => acc + age, 0);
console.log({ sumOfAges });

// 5 - Return only dish names from recipes containing 5 or more ingredients
const fiveOrMoreDishes = recipes.filter(({ ingredients }) => ingredients.length >= 5).map(({ name }) => name);
console.log({ fiveOrMoreDishes });

// 6 - Return the recipe whose sum of the weight of the ingredients is the largest in the list
const heaviestRepice = recipes.map(recipe => ({
    ...recipe,
    weight: recipe.ingredients.reduce((acc, ingredient) => acc + ingredient.amount, 0)
})).reduce((bigger, recipe) => {
    if (bigger.weight > recipe.weight) {
        return bigger;
    }

    return recipe;
}, { weight: 0 });

console.log({ heaviestRepice });

// 7 - Return only a list of all ingredients of all recipes
const ingredients = recipes
    .map(recipe => recipe.ingredients)
    .map(ingredients => ingredients.map(ingredient => ingredient.name))
    .reduce((flatArray, array) => flatArray.concat(array), []);

console.log({ ingredients });

// 8 - Return the sum of the total weight of all ingredients of all recipes
const totalWeight = recipes.map(recipe => ({
    ...recipe,
    weight: recipe.ingredients.reduce((acc, ingredient) => acc + ingredient.amount, 0)
})).reduce((acc, recipe) => acc + recipe.weight, 0);

console.log({ totalWeight });