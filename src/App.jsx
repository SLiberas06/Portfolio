import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Accueil from './pages/Accueil'
import Projets from './pages/Projets'
import Header from './components/Header'
import Footer from './components/Footer'
import { Main } from './utils/Atoms'
import { ThemeProvider } from './utils/Context'
import GlobalStyle from './utils/GlobalStyle'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <GlobalStyle />
        <Main>
          <Header />
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/Projets" element={<Projets />} />
          </Routes>
          <Footer />
        </Main>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
