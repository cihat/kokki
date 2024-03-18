const someFoods = [
  {
    name: "Kebab",
    ingredients: ["onion", "tomato", "met"]
  },
  {
    name: "Pasta",
    ingredients: ["flour", "egg", "water"]
  },
  {
    name: "Pizza",
    ingredients: ["flour", "tomato", "cheese"]
  },
  {
    name: "Salad",
    ingredients: ["lettuce", "tomato", "cucumber"]
  },
  {
    name: "Hamburger",
    ingredients: ["bread", "meat", "onion"]
  },
  {
    name: "Soup",
    ingredients: ["water", "flour", "meat"]
  },
  {
    name: "Rice",
    ingredients: ["rice", "water", "salt"]
  },
  {
    name: "Bread",
    ingredients: ["flour", "water", "salt"]
  }
];

class Food {
  constructor(name) {
    this.name = name;
    //? this.foods = someFoods;
  }

  getFoodInfo() {
    //? return this.foods.find(food => food.name === this.name)
    return someFoods.find(food => food.name === this.name);
  }
}

class Chef {
  constructor(name, ingredients) {
    this.name = name;
    this.ingredients = ingredients;
    this.favoriteFood = null;
  }
}

class Cooking {
  constructor(chef) {
    this.chef = chef;
  }

  foodSuggestions(similarity = 0.5) {
    const suggestions = someFoods.filter(food => {
      const foodIngredients = food.ingredients;
      const matchingIngredients = foodIngredients.filter(ingredient => this.chef.ingredients.includes(ingredient));

      return matchingIngredients.length / foodIngredients.length > similarity;
    });

    return suggestions;
  }

  missingIngredients(food) {
    const foodIngredients = food.ingredients;
    const missingIngredients = foodIngredients.filter(ingredient => !this.chef.ingredients.includes(ingredient));

    return missingIngredients;
  }
}


function main() {
  const cihatChef = new Chef('Cihat', ["flour", "cucumber", "meat"]);
  const cooking = new Cooking(cihatChef);
  console.log(`Chef ${cihatChef.name}'s have these ingredients: ${cihatChef.ingredients.join(', ')}`);


  const similarity = 0.1;
  const suggestions = cooking.foodSuggestions(similarity);
  if (suggestions.length === 0) {
    console.log(`No food suggestions with similarity ratio ${similarity} for Chef ${cihatChef.name}`);
    return
  }

  console.log(`Chef ${cihatChef.name} can cook these foods: ${suggestions.map(food => food.name).join(', ')}`);

  const missingIngredients = cooking.missingIngredients(suggestions[0])
  console.log(`Missing ingredients: ${missingIngredients} for ${suggestions[0].name}`);
}

main()
