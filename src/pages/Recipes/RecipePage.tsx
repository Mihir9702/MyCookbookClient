import React, { FC } from 'react'
import RecipeComponent from './components/RecipeComponent'
import type { Cart } from 'src/components/interfaces'

const RecipePage: FC<Cart> = ({ name, cart, setCart }) => {
  return <RecipeComponent name={name} cart={cart} setCart={setCart} />
}

export default RecipePage
