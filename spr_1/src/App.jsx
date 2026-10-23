import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import CatalogPage from './pages/CatalogPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<CatalogPage></CatalogPage>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
