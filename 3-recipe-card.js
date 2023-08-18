/**
 * Ever wondered how to make a certain meal? Let's create a recipe list with JavaScript!
 *   
 *   Declare a variable that holds an empty object literal (your meal recipe).
 *   Give the object 3 properties: a title (string), a servings (number) and an
 *   ingredients (array of strings) property.
 *   Log each property out separately, using a loop (for, while or do/while)
 *   
 * Expected result:
 *   
 *   Meal name: Omelette
 *   Serves: 2
 *   Ingredients: 4 eggs, 2 strips of bacon, 1 tsp salt/pepper
 */

let recipe = {};

recipe.title = "Omelette";
recipe.servings = 2;
recipe.ingredients = ["4 eggs", "2 strips of bacon", "1 tsp salt/pepper"];

for (const key in recipe) {
    console.log(key+' : '+recipe[key]);
}

//I am not sure how to print it out as same as the expected result?