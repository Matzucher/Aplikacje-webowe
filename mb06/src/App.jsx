import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import CategoryBar from './components/CategoryBar.jsx'
import Gallery from './components/Gallery.jsx'
import Footer from './components/Footer.jsx'
import AddPhotoModal from './components/AddPhotoModal.jsx'
import FiltersOffcanvas from './components/FiltersOffcanvas.jsx'
import photosDB from './data/photosDB.json'
import './App.css'

export default function App() {
  const [photos, setPhotoss] = useState(photosDB)
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredPhotos =
    activeCategory === "all" ? photos : photos.filter(z => z.category === activeCategory)

  function deletePhoto(id) {
    setPhotoss(photos.filter(p => p.id !== id))
  }

  function addPhoto(newPhoto) {
    const newPhotoId = Math.max(...photos.map(p => p.id)) + 1
    setPhotoss([...photos, {
      ...newPhoto, id: newPhotoId, favorite: false
    }])
  }

  function toggleFavourite(id) {
    setPhotoss(
      photos.map(p => (p.id === id ? { ...p, favorite: !p.favorite } : p))
    )
  }

  return <>
    <Navbar />
    <header className="container py-4 py-lg-5">
      <div className="row align-items-center g-3">

        <div className="col-12 col-lg-8">
          <h1 className="mb-2">Galeria zdjęć</h1>
          <p className="lead text-body-secondary mb-0">
            Zdjęcia z wypraw w góry, nad morze i po mieście.
            Wybierz kategorię,
            żeby zawęzić widok — albo powiększ zdjęcie, które Ci
            się spodoba.
          </p>
        </div>

        <div className="col-12 col-lg-4">
          <div className="d-flex flex-wrap gap-2 justify-content-lg-end">
            <button
              type="button"
              className="btn btn-outline-secondary"
              data-bs-toggle="offcanvas"
              data-bs-target="#panelFiltrow">
              Filtry
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#dodajZdjecie">
              Dodaj zdjęcie
            </button>
          </div>
        </div>
      </div>
    </header>

    <main className="container">
      <CategoryBar activeCategory={activeCategory} onChange={setActiveCategory} />
      <p className="text-body-secondary">
        Wyświetlono {filteredPhotos.length} z {photos.length} zdjęć
      </p>
      {filteredPhotos.length === 0 && (
        <div className="alert alert-warning">
          Nie znaleziono zdjęć w tej kategorii.
        </div>
      )}
      <Gallery
        photos={filteredPhotos}
        onDelete={deletePhoto}
        onToggleFavourite={toggleFavourite}
      />
    </main>

    <Footer />
    <AddPhotoModal onAdd={addPhoto} />
    <FiltersOffcanvas activeCategory={activeCategory} onChange={setActiveCategory} />
  </>
}