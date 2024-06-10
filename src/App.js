import './App.css'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'

import { Container , Login} from './components/index.js'
import {Header , Slider, Hero , Actualities , Admin } from './Sections/index.js'

import {LoginPage , AdminPage, Home} from './Pages/index.js'
const App = () => {
  return (
    <>

        <AdminPage />
        
    </>
  )
}

export default App
