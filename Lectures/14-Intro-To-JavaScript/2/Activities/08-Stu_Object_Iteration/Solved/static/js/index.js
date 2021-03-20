var recipes = [
  { dish: "Fried fish", spice: "Dorrigo" },
  { dish: "Crab Rangoon", spice: "Akudjura" },
  { dish: "Pickled Okra", spice: "Chili pepper" },
  { dish: "Macaroni salad", spice: "Pepper" },
  { dish: "Apple butter", spice: "Avens" },
  { dish: "Pepperoni Pizza", spice: "Asafoetida" },
  { dish: "Hog fry", spice: "Peppermint" },
  { dish: "Corn chowder", spice: "Akudjura" },
  { dish: "Home fries", spice: "Celery leaf" },
  { dish: "Hot chicken", spice: "Boldo" }];

// Create empty arrays to store the dish and spice values
var dishes = [];
var spices = [];

// Iterate through each recipe object
recipes.forEach((recipe) => {

  // Iterate through each key and value
  Object.entries(recipe).forEach(([key, value]) => {

    // Use the key to determine which array to push the value to
    if (key === "dish") {
      dishes.push(value);
    }
    else {
      spices.push(value);
    }
   });
});

// BONUS - Use map to build both arrays of dish and spice values
var dishesMapped = recipes.map(recipe => recipe.dish);
var spicesMapped = recipes.map(recipe => recipe.spice);

console.log(dishesMapped);
console.log(spicesMapped);
