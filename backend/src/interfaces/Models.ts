import { Document } from "mongoose";

export enum UserEnum {
  VEGETARIAN = 'VEGETARIAN',
  VEGAN = 'VEGAN',
  MEAT_EATER = 'MEAT_EATER',
  FLEXITARIAN = 'FLEXITARIAN',
  PESCETARIAN = 'PESCETARIAN',
  FRUITARIAN = 'FRUITARIAN',
  RAW_FOODIST = 'RAW_FOODIST',
  BREATHARIAN = 'BREATHARIAN',
  PALEO_DIET = 'PALEO_DIET',
  KETO_DIET = 'KETO_DIET',
  ATKINS_DIET = 'ATKINS_DIET',
  ZONE_DIET = 'ZONE_DIET',
  DUKAN_DIET = 'DUKAN_DIET',
  SOUTH_BEACH_DIET = 'SOUTH_BEACH_DIET',
  VOLUMETRICS = 'VOLUMETRICS',
  WEIGHT_WATCHERS = 'WEIGHT_WATCHERS',
  JENNY_CRAIG = 'JENNY_CRAIG',
  NUTRISYSTEM = 'NUTRISYSTEM',
  RAW_FOOD = 'RAW_FOOD',
  MEDITERRANEAN = 'MEDITERRANEAN',
}

export enum FoodEnum {
  BREAKFAST = 'BREAKFAST',
  LUNCH = 'LUNCH',
  DINNER = 'DINNER',
  SNACK = 'SNACK',
  DESSERT = 'DESSERT',
  DRINK = 'DRINK',
  ALCOHOL = 'ALCOHOL',
  MEAT = 'MEAT',
  FISH = 'FISH',
  VEGETARIAN = 'VEGETARIAN',
  VEGAN = 'VEGAN',
  GLUTEN_FREE = 'GLUTEN_FREE',
  DAIRY_FREE = 'DAIRY_FREE',
  NUT_FREE = 'NUT_FREE',
  SOY_FREE = 'SOY_FREE',
  EGG_FREE = 'EGG_FREE',
  LOW_FAT = 'LOW_FAT',
  LOW_CARB = 'LOW_CARB',
  LOW_SODIUM = 'LOW_SODIUM',
  LOW_SUGAR = 'LOW_SUGAR',
  PALEO = 'PALEO',
  KETO = 'KETO',
  ATKINS = 'ATKINS',
  ZONE = 'ZONE',
  DUKAN = 'DUKAN',
  SOUTH_BEACH = 'SOUTH_BEACH',
  VOLUMETRICS = 'VOLUMETRICS',
  WEIGHT_WATCHERS = 'WEIGHT_WATCHERS',
  JENNY_CRAIG = 'JENNY_CRAIG',
  NUTRISYSTEM = 'NUTRISYSTEM',
  RAW_FOOD = 'RAW_FOOD',
  MEDITERRANEAN = 'MEDITERRANEAN',
  HIGH_PROTEIN = 'HIGH_PROTEIN',
  HIGH_FIBER = 'HIGH_FIBER',
  LOW_CALORIE = 'LOW_CALORIE',
  LOW_CHOLESTEROL = 'LOW_CHOLESTEROL',
  LOW_GLYCEMIC = 'LOW_GLYCEMIC',
}

export enum IngredientEnum {
  FRUIT = 'FRUIT',
  VEGETABLE = 'VEGETABLE',
  MEAT = 'MEAT',
  FISH = 'FISH',
  DAIRY = 'DAIRY',
  GRAIN = 'GRAIN',
  NUT = 'NUT',
  SEED = 'SEED',
  SPICE = 'SPICE',
  HERB = 'HERB',
  OIL = 'OIL',
  SWEETENER = 'SWEETENER',
  CONDIMENT = 'CONDIMENT',
  BEVERAGE = 'BEVERAGE',
  ALCOHOL = 'ALCOHOL',
  OTHER = 'OTHER',
}

// export firstly

export interface IIngredient extends Document {
  name: string;
  quantity?: number;
  unit: string;
  type: IngredientEnum;
  getName(): string;
  setName(name: string): void;
  getQuantity(): number;
  setQuantity(quantity: number): void;
  getUnit(): string;
  setUnit(unit: string): void;
}

export interface IFood extends Document {
  name: string;
  recipe: string;
  ratio: number;
  image: string;
  ingredients: IIngredient[];
  tags: FoodEnum[];
  getName(): string;
  setName(name: string): void;
  getRecipe(): string;
  setRecipe(recipe: string): void;
  getIngredients(): IIngredient[];
  addIngredient(ingredient: IIngredient): void;
}

export interface IUser extends Document {
  username: string;
  age: number;
  favoriteFoods?: IFood[];
  previousFoods?: IFood[];
  type: UserEnum;
  ingredients?: IIngredient[];
}



// I will look other session

// interface Measurement {
//   type: string;
//   value: number;
//   unit: string;
// }

// interface IngredientRatio {
//   measurement: Measurement;
//   ingredient: IIngredient;
//   ratio: number;
//   calculateRatio(): number;
//   getMeasurement(): Measurement;
//   setMeasurement(measurement: Measurement): void;
//   getIngredient(): IIngredient;
//   setIngredient(ingredient: IIngredient): void;
//   getRatio(): number;
//   setRatio(ratio: number): void;
// }
