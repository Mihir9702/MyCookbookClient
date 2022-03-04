import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home/HomePage'
import SignupPage from './pages/Signup/SignupPage'
import LoginPage from './pages/Login/LoginPage'
import CategoriesPage from './pages/Categories/CategoriesPage'
import RecipesPage from './pages/Recipes/RecipesPage'
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
	return (
		<ChakraProvider>
			<Routes>
				<Route path={'/'} element={<HomePage />} />

				<Route path="/signup" element={<SignupPage />} />
				<Route path="/login" element={<LoginPage />} />

				<Route path="/categories" element={<CategoriesPage />} />
				{/* <Route path="/categories/:category" element={null} /> */}

				<Route path="/recipes" element={<RecipesPage />} />
				{/* <Route path="/recipes/:recipe" element={null} /> */}
			</Routes>
		</ChakraProvider>
	)
}

export default App
