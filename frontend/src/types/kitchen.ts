export type Ingredient = string

export type SuggestionResponse = {
  _id: string;
  name: string;
  ingredients: Ingredient[];
}
