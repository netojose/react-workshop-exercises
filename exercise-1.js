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
console.log(EvenAge)
const EvenAge = people.filter(p => {
    if( (p.age % 2) === 0) 
        return p
})
console.log('EvenAge: ')


// 2 - Return the person with exactly 45 years
console.log('ExactAge: ')
const ExactAge = people.filter( p => (p.age == 45)  )
console.log(ExactAge)

// 3 - Return people with an additional "slug" field, which should contain a friendly url string with the username
console.log('FriendlyField: ')
const newPeople = people.map( p => ({...p, slug: "www.friendlyurl.com/"+ p.name }) )
console.log(newPeople)

// 4 - Return the sum of the ages
console.log('SumOfAges: ')
const sumOfAges = people.reduce((acc, curr) => acc += curr.age, 0)
console.log(sumOfAges)

// 5 - Return only dish names from recipes containing 5 or more ingredients
console.log('MoreIngredients: ')
const moreIngred = recipes.filter(item => item.ingredients.length >= 5)
console.log(moreIngred)

// 6 - Return the recipe whose sum of the weight of the ingredients is the largest in the list
console.log('MaxWeight: ')
recipes.reduce( (max, curr, index) =>{
    
    currAmount = curr.ingredients.reduce((acc, curr) => acc += curr.amount, 0)
    
    if(max < currAmount){
        max = currAmount
        maxIndex = index
    }

}, 0) 
console.log(recipes[maxIndex])


// 7 - Return only a list of all ingredients of all recipes
console.log('Ingredients list: ')
const ingredients = recipes.reduce( (array, curr) => { 

    array.push( curr.ingredients.map(ingred => ingred) ) 

}, [] )
console.log(ingredients)

// 8 - Return the sum of the total weight of all ingredients of all recipes
console.log("SumOfStuff")
const SumOfStuff = recipes.reduce( (acc, curr) => {
    acc.push( { Recipe: curr.name,  Amount: curr.ingredients.reduce( (acc, curr) => acc += curr.Amount, 0) } )
}, [])

