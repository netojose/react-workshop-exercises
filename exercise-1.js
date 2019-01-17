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
// 2 - Return the person with exactly 45 years
// 3 - Return people with an additional "slug" field, which should contain a friendly url string with the username
// 4 - Return the sum of the ages
// 5 - Return only dish names from recipes containing 5 or more ingredients
// 6 - Return the recipe whose sum of the weight of the ingredients is the largest in the list
// 7 - Return only a list of all ingredients of all recipes
// 8 - Return the sum of the total weight of all ingredients of all recipes
