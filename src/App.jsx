/* Import Setup inicial */
import React from 'react'
import './App.scss' 

/* Import Material Ui */

  /* Roboto Font */
  import '@fontsource/roboto/300.css'
  import '@fontsource/roboto/400.css'
  import '@fontsource/roboto/500.css'
  import '@fontsource/roboto/700.css'

// Rotas
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Componentes Fixos
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

// Pages
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'

const App = () => {
  return (

    <BrowserRouter>
      <Header />
      <Routes>  
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login  />} />
          <Route path="/" element={<Register  />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App