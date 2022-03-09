import React, { useState } from 'react'
import Navbar from './pages/Home/components/Navbar'
import HomePage from './pages/Home/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import LogoutPage from './pages/LogoutPage'
import RecipePage from './pages/Recipes/RecipePage'
import RecipesPage from './pages/Recipes/RecipesPage'
import SettingsPage from './pages/SettingsPage'
import CategoryPage from './pages/Categories/CategoryPage'
import CategoriesPage from './pages/Categories/CategoriesPage'
import LoggedInNavbar from './global/LoggedInNavbar'
import { Route, Routes } from 'react-router-dom'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Center, useColorMode, Button } from '@chakra-ui/react'
import './App.scss'

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const username = localStorage.getItem('username')

  return (
    <>
      <Center w={'100%'} pos={'absolute'} top={2}>
        <Button onClick={toggleColorMode} zIndex={100} variant={'ghost'}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Center>

      {username ? <LoggedInNavbar /> : <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<LogoutPage />} />

        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/categories/:category" element={<CategoryPage />} />

        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/recipes/:recipe" element={<RecipePage />} />

        <Route path="/:user/settings" element={<SettingsPage />} />
      </Routes>
    </>
  )
}

export default App
