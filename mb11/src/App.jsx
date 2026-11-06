import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import GalleryPage from './pages/GalleryPage'
import AddPhotoPage from './pages/AddPhotoPage'
import PhotoPage from './pages/PhotoPage'
import NotFoundPage from './pages/PageNotFound'
import './App.css'

export default function App() {
  return <>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<GalleryPage />} />
        <Route path="/zdjecie/:id" element={<PhotoPage />} />
        <Route path="/dodaj" element={<AddPhotoPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>

  </>
}