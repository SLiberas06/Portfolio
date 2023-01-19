import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
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
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Main>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
