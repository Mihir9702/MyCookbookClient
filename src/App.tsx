import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home/HomePage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import CategoriesPage from './pages/Categories/CategoriesPage'
import CategoryPage from './pages/Categories/CategoryPage'
import RecipesPage from './pages/Recipes/RecipesPage'
import LoggedInNavbar from './global/LoggedInNavbar'
import Navbar from './pages/Home/components/Navbar'
import { Center, useColorMode, Button } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import './App.scss'
import './pages/Categories/CategoriesPage.scss'

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <div>
      <Center w={'100%'} pos={'absolute'} top={2}>
        <Button onClick={toggleColorMode} variant={'ghost'}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Center>

      {loggedIn ? <LoggedInNavbar /> : <Navbar />}
      <Routes>
        <Route path={'/'} element={<HomePage />} />

        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/categories/:category" element={<CategoryPage />} />

        <Route path="/recipes" element={<RecipesPage />} />
        {/* <Route path="/recipes/:recipe" element={null} /> */}
      </Routes>
    </div>
  )
}

export default App
