import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import CatalogPage from './pages/CatalogPage'
import PageNotFound from './pages/PageNotFound'
import PizzaPage from './pages/PizzaPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<CatalogPage></CatalogPage>}></Route>
          <Route path="/dodaj"></Route>
          <Route path="/:nr" element={<PizzaPage></PizzaPage>}></Route>
          <Route path="/*" element={<PageNotFound></PageNotFound>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
