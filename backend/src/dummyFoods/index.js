const dummyFoods = [
  {
    "name": "spaghetti carbonara",
    "ingredients": ["spaghetti", "egg", "bacon", "parmesan cheese", "black pepper"]
  },
  {
    "name": "caesar salad",
    "ingredients": ["lettuce", "chicken", "croutons", "parmesan cheese", "caesar dressing"]
  },
  {
    "name": "vegetable stir-fry",
    "ingredients": ["broccoli", "carrot", "bell pepper", "tofu", "soy sauce"]
  },
  {
    "name": "grilled salmon",
    "ingredients": ["salmon", "lemon", "olive oil", "garlic", "dill"]
  },
  {
    "name": "chicken alfredo pasta",
    "ingredients": ["chicken", "fettuccine", "cream", "parmesan cheese", "garlic"]
  },
  {
    "name": "mushroom risotto",
    "ingredients": ["arborio rice", "mushrooms", "onion", "vegetable broth", "white wine"]
  },
  {
    "name": "taco salad",
    "ingredients": ["ground beef", "lettuce", "tomato", "cheddar cheese", "taco seasoning"]
  },
  {
    "name": "tomato basil soup",
    "ingredients": ["tomato", "onion", "garlic", "basil", "vegetable broth"]
  },
  {
    "name": "vegetarian pizza",
    "ingredients": ["pizza dough", "tomato sauce", "bell pepper", "mushrooms", "onion"]
  },
  {
    "name": "beef stir-fry",
    "ingredients": ["beef", "broccoli", "carrot", "soy sauce", "sesame oil"]
  },
  {
    "name": "spinach and feta omelette",
    "ingredients": ["spinach", "feta cheese", "egg", "onion", "olive oil"]
  },
  {
    "name": "shrimp scampi",
    "ingredients": ["shrimp", "garlic", "butter", "lemon juice", "parsley"]
  },
  {
    "name": "chicken curry",
    "ingredients": ["chicken", "curry powder", "coconut milk", "onion", "garlic"]
  },
  {
    "name": "honey garlic glazed salmon",
    "ingredients": ["salmon", "honey", "garlic", "soy sauce", "sesame seeds"]
  },
  {
    "name": "avocado toast",
    "ingredients": ["avocado", "bread", "lemon juice", "salt", "red pepper flakes"]
  },
  {
    "name": "quinoa salad",
    "ingredients": ["quinoa", "cucumber", "tomato", "red onion", "lemon vinaigrette"]
  },
  {
    "name": "pasta primavera",
    "ingredients": ["pasta", "asparagus", "peas", "bell pepper", "cream sauce"]
  },
  {
    "name": "grilled chicken salad",
    "ingredients": ["chicken", "lettuce", "tomato", "cucumber", "balsamic vinaigrette"]
  },
  {
    "name": "sweet potato fries",
    "ingredients": ["sweet potato", "olive oil", "paprika", "garlic powder", "salt"]
  },
  {
    "name": "garlic butter shrimp",
    "ingredients": ["shrimp", "butter", "garlic", "lemon", "parsley"]
  },
  {
    "name": "caprese salad",
    "ingredients": ["tomato", "mozzarella cheese", "basil", "balsamic glaze", "olive oil"]
  },
  {
    "name": "vegetable soup",
    "ingredients": ["carrot", "celery", "onion", "potato", "vegetable broth"]
  },
  {
    "name": "black bean tacos",
    "ingredients": ["black beans", "tortillas", "corn", "avocado", "salsa"]
  },
  {
    "name": "chocolate chip cookies",
    "ingredients": ["flour", "butter", "sugar", "chocolate chips", "vanilla extract"]
  },
  {
    "name": "greek salad",
    "ingredients": ["lettuce", "tomato", "cucumber", "feta cheese", "olive oil"]
  },
  {
    "name": "banana bread",
    "ingredients": ["banana", "flour", "sugar", "butter", "egg"]
  },
  {
    "name": "chicken noodle soup",
    "ingredients": ["chicken", "noodles", "carrot", "celery", "chicken broth"]
  },
  {
    "name": "margarita pizza",
    "ingredients": ["pizza dough", "tomato sauce", "mozzarella cheese", "basil"]
  },
  {
    "name": "roast beef sandwich",
    "ingredients": ["roast beef", "bread", "lettuce", "tomato", "mayonnaise"]
  },
  {
    "name": "pumpkin soup",
    "ingredients": ["pumpkin", "onion", "garlic", "vegetable broth", "cream"]
  },
  {
    "name": "kebab",
    "ingredients": ["beef", "onion", "tomato", "bell pepper", "sumac"]
  },
  {
    "name": "köfte",
    "ingredients": ["ground beef", "onion", "garlic", "parsley", "cumin"]
  },
  {
    "name": "mantı",
    "ingredients": ["dough", "ground beef", "onion", "yogurt", "butter"]
  },
  {
    "name": "pilav",
    "ingredients": ["rice", "butter", "onion", "chicken broth", "salt"]
  },
  {
    "name": "lahmacun",
    "ingredients": ["dough", "ground beef", "onion", "tomato", "parsley"]
  },
  {
    "name": "sarma",
    "ingredients": ["grape leaves", "rice", "pine nuts", "currants", "olive oil"]
  },
  {
    "name": "çorba",
    "ingredients": ["chicken broth", "onion", "carrot", "celery", "flour"]
  },
  {
    "name": "tavuk şiş",
    "ingredients": ["chicken", "bell pepper", "onion", "sumac", "olive oil"]
  },
  {
    "name": "işkembe çorbası",
    "ingredients": ["tripe", "garlic", "butter", "flour", "vinegar"]
  },
  {
    "name": "kumpir",
    "ingredients": ["potato", "butter", "cheese", "corn", "olives"]
  },
  {
    "name": "kuzu tandır",
    "ingredients": ["lamb", "yogurt", "onion", "garlic", "paprika"]
  },
  {
    "name": "kısır",
    "ingredients": ["bulgur", "tomato", "cucumber", "parsley", "pomegranate syrup"]
  },
  {
    "name": "muhallebi",
    "ingredients": ["milk", "sugar", "cornstarch", "rose water", "pistachios"]
  },
  {
    "name": "börek",
    "ingredients": ["phyllo dough", "feta cheese", "parsley", "egg", "olive oil"]
  },
  {
    "name": "kuzu etli pilav",
    "ingredients": ["rice", "lamb", "onion", "currants", "cinnamon"]
  },
  {
    "name": "kısır",
    "ingredients": ["bulgur", "tomato", "cucumber", "parsley", "pomegranate syrup"]
  },
  {
    "name": "muhallebi",
    "ingredients": ["milk", "sugar", "cornstarch", "rose water", "pistachios"]
  },
  {
    "name": "börek",
    "ingredients": ["phyllo dough", "feta cheese", "parsley", "egg", "olive oil"]
  },
  {
    "name": "kuzu etli pilav",
    "ingredients": ["rice", "lamb", "onion", "currants", "cinnamon"]
  },
  {
    "name": "keşkek",
    "ingredients": ["wheat", "chicken", "butter", "garlic", "red pepper flakes"]
  },
  {
    "name": "tavuklu pilav",
    "ingredients": ["rice", "chicken", "onion", "carrot", "garlic"]
  },
  {
    "name": "su böreği",
    "ingredients": ["phyllo dough", "feta cheese", "milk", "egg", "olive oil"]
  },
  {
    "name": "mercimek çorbası",
    "ingredients": ["red lentils", "onion", "carrot", "garlic", "cumin"]
  },
  {
    "name": "kabak çiçeği dolması",
    "ingredients": ["zucchini flowers", "rice", "onion", "dill", "lemon"]
  },
  {
    "name": "kuzu tandır",
    "ingredients": ["lamb", "yogurt", "onion", "garlic", "paprika"]
  },
  {
    "name": "tarator",
    "ingredients": ["yogurt", "cucumber", "garlic", "dill", "olive oil"]
  },
  {
    "name": "baklava",
    "ingredients": ["phyllo dough", "walnuts", "sugar", "butter", "honey"]
  },
  {
    "name": "kuru fasulye",
    "ingredients": ["white beans", "onion", "tomato", "paprika", "olive oil"]
  },
  {
    "name": "patlıcan kebabı",
    "ingredients": ["eggplant", "lamb", "onion", "tomato", "sumac"]
  },
  {
    "name": "mantar sote",
    "ingredients": ["mushrooms", "onion", "bell pepper", "garlic", "thyme"]
  },
  {
    "name": "lazanya",
    "ingredients": ["lasagna noodles", "ground beef", "tomato sauce", "mozzarella cheese", "ricotta cheese"]
  },
  {
    "name": "musakka",
    "ingredients": ["eggplant", "ground beef", "onion", "tomato", "cheese"]
  },
  {
    "name": "şehriyeli tavuk çorbası",
    "ingredients": ["chicken broth", "vermicelli pasta", "chicken", "carrot", "celery"]
  },
  {
    "name": "mantar çorbası",
    "ingredients": ["mushrooms", "onion", "butter", "flour", "milk"]
  },
  {
    "name": "kuzu tandır",
    "ingredients": ["lamb", "yogurt", "onion", "garlic", "paprika"]
  },
  {
    "name": "közde patlıcan salatası",
    "ingredients": ["eggplant", "tomato", "pepper", "garlic", "olive oil"]
  },
  {
    "name": "çılbır",
    "ingredients": ["eggs", "yogurt", "butter", "garlic", "paprika"]
  },
  {
    "name": "piyaz",
    "ingredients": ["beans", "onion", "tomato", "parsley", "olive oil"]
  },
  {
    "name": "karnıyarık",
    "ingredients": ["eggplant", "ground beef", "tomato", "onion", "garlic"]
  },
  {
    "name": "paella",
    "ingredients": ["rice", "seafood mix", "chicken", "onion", "bell pepper"]
  },
  {
    "name": "lasagna",
    "ingredients": ["lasagna noodles", "ground beef", "tomato sauce", "mozzarella cheese", "ricotta cheese"]
  },
  {
    "name": "sushi",
    "ingredients": ["rice", "fish", "seaweed", "soy sauce", "wasabi"]
  },
  {
    "name": "ramen",
    "ingredients": ["noodles", "broth", "pork", "egg", "green onion"]
  },
  {
    "name": "kimchi",
    "ingredients": ["napa cabbage", "radish", "garlic", "ginger", "red pepper flakes"]
  },
  {
    "name": "gyros",
    "ingredients": ["pita bread", "lamb", "tzatziki sauce", "tomato", "onion"]
  },
  {
    "name": "moussaka",
    "ingredients": ["eggplant", "ground beef", "tomato", "béchamel sauce", "parmesan cheese"]
  },
  {
    "name": "borscht",
    "ingredients": ["beets", "potato", "cabbage", "beef", "sour cream"]
  },
  {
    "name": "goulash",
    "ingredients": ["beef", "potato", "onion", "bell pepper", "paprika"]
  },
  {
    "name": "bratwurst",
    "ingredients": ["pork", "sausage casing", "onion", "mustard", "sauerkraut"]
  },
  {
    "name": "schnitzel",
    "ingredients": ["veal", "breadcrumbs", "egg", "lemon", "butter"]
  },
  {
    "name": "couscous",
    "ingredients": ["couscous", "vegetables", "chickpeas", "raisins", "olive oil"]
  },
  {
    "name": "falafel",
    "ingredients": ["chickpeas", "parsley", "garlic", "cumin", "tzatziki sauce"]
  },
  {
    "name": "pad thai",
    "ingredients": ["rice noodles", "shrimp", "tofu", "peanuts", "tamarind sauce"]
  },
  {
    "name": "pho",
    "ingredients": ["rice noodles", "beef", "bean sprouts", "basil", "lime"]
  },
  {
    "name": "souvlaki",
    "ingredients": ["pita bread", "pork", "tzatziki sauce", "tomato", "onion"]
  },
  {
    "name": "risotto",
    "ingredients": ["arborio rice", "chicken broth", "mushrooms", "parmesan cheese", "white wine"]
  },
  {
    "name": "spanakopita",
    "ingredients": ["phyllo dough", "spinach", "feta cheese", "onion", "dill"]
  },
  {
    "name": "pierogi",
    "ingredients": ["dough", "potato", "cheese", "onion", "butter"]
  },
  {
    "name": "ratatouille",
    "ingredients": ["eggplant", "zucchini", "bell pepper", "tomato", "garlic"]
  },
  {
    "name": "baba ghanoush",
    "ingredients": ["eggplant", "tahini", "garlic", "lemon", "olive oil"]
  },
  {
    "name": "schnitzel",
    "ingredients": ["veal", "breadcrumbs", "egg", "lemon", "butter"]
  },
  {
    "name": "wonton soup",
    "ingredients": ["wonton wrappers", "pork", "broth", "bok choy", "green onion"]
  },
  {
    "name": "paella",
    "ingredients": ["rice", "seafood mix", "chicken", "onion", "bell pepper"]
  },
  {
    "name": "croissant",
    "ingredients": ["flour", "butter", "yeast", "milk", "egg"]
  },
  {
    "name": "gazpacho",
    "ingredients": ["tomato", "cucumber", "bell pepper", "onion", "garlic"]
  },
  {
    "name": "moussaka",
    "ingredients": ["eggplant", "ground beef", "tomato", "béchamel sauce", "parmesan cheese"]
  },
  {
    "name": "borscht",
    "ingredients": ["beets", "potato", "cabbage", "beef", "sour cream"]
  },
  {
    "name": "goulash",
    "ingredients": ["beef", "potato", "onion", "bell pepper", "paprika"]
  },
  {
    "name": "bratwurst",
    "ingredients": ["pork", "sausage casing", "onion", "mustard", "sauerkraut"]
  },
  {
    "name": "schnitzel",
    "ingredients": ["veal", "breadcrumbs", "egg", "lemon", "butter"]
  },
  {
    "name": "couscous",
    "ingredients": ["couscous", "vegetables", "chickpeas", "raisins", "olive oil"]
  },
  {
    "name": "falafel",
    "ingredients": ["chickpeas", "parsley", "garlic", "cumin", "tzatziki sauce"]
  },
  {
    "name": "pad thai",
    "ingredients": ["rice noodles", "shrimp", "tofu", "peanuts", "tamarind sauce"]
  },
  {
    "name": "pho",
    "ingredients": ["rice noodles", "beef", "bean sprouts", "basil", "lime"]
  },
  {
    "name": "souvlaki",
    "ingredients": ["pita bread", "pork", "tzatziki sauce", "tomato", "onion"]
  },
  {
    "name": "risotto",
    "ingredients": ["arborio rice", "chicken broth", "mushrooms", "parmesan cheese", "white wine"]
  },
  {
    "name": "spanakopita",
    "ingredients": ["phyllo dough", "spinach", "feta cheese", "onion", "dill"]
  },
  {
    "name": "pierogi",
    "ingredients": ["dough", "potato", "cheese", "onion", "butter"]
  },
  {
    "name": "ratatouille",
    "ingredients": ["eggplant", "zucchini", "bell pepper", "tomato", "garlic"]
  },
]
