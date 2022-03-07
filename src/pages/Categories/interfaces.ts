export interface CategoryItem {
  _id: string
  title: string
  image: string
  description: string
}

export interface Card extends CategoryItem {
  path: string
}

interface Recipe {
  idMeal: string
  strMeal: string
  strMealThumb: string
}

export interface Category {
  _id: string
  title: string
  image: string
  description: string
  recipes: Recipe[]
}
