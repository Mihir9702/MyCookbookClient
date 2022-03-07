export interface CategoryItem {
  _id: string
  title: string
  image: string
  description: string
}

export interface Card extends CategoryItem {
  path: string
}

interface RecipeStr {
  idMeal: string
  strMeal: string
  strMealThumb: string
}

export interface Category {
  _id: string
  title: string
  image: string
  description: string
  recipes: RecipeStr[]
}

export interface Recipe {
  _id: string
  id?: string
  title: string
  image: string
  ingredients?: [string, string][]
  instructions?: string[]
}
