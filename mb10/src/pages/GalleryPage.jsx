import { useState } from 'react'
import { Link } from 'react-router-dom'
import { deletePhoto, toggleFavourite } from '../services/photos.js'
import { usePhotos } from '../hooks/usePhotos.js'
import CategoryBar from '../components/CategoryBar.jsx'
import Gallery from '../components/Gallery.jsx'
import PhotoOfTheDay from '../components/PhotoOfTheDay.jsx'

export default function GalleryPage() {
    const { photos, setPhotos, isLoading, error } = usePhotos()
    const [activeCategory, setActiveCategory] = useState('wszystkie')
    if (isLoading) {
        return (
            <div className="text-center mt-5">
                <div className="spinner-border text-primary" role="status" />
                <p className="mt-2 text-muted">Ładowanie galerii...</p>
            </div>
        )
    }
    if (error) {
        return <div className="alert alert-danger m-4">Nie udało się pobrać danych: {error}</div>
    }
    if (photos.length === 0) {
        return <div className="alert alert-secondary m-4">Katalog jest na razie pusty.</div>
    }
    const filteredPhotos = activeCategory === 'wszystkie' ? photos : photos.filter(z => z.category === activeCategory)
    return (
        <>
            <header className="container py-4 d-flex justify-content-between align-items-center">
                <h1 className="mb-0">Galeria zdjęć</h1>
                <Link to="/dodaj" className="btn btn-primary">Dodaj zdjęcie</Link>
            </header>
            <main className="container">
                <CategoryBar activeCategory={activeCategory} onChange={setActiveCategory} />
                <p className="text-body-secondary">
                    Wyświetlono {filteredPhotos.length} z {photos.length} zdjęć
                </p>
                {filteredPhotos.length === 0 && (
                    <div className="alert alert-warning">Nie znaleziono zdjęć w tej kategorii.</div>
                )}
                <Gallery
                    photos={filteredPhotos}
                    onDelete={id => setPhotos(deletePhoto(id))}
                    onToggleFavourite={id => setPhotos(toggleFavourite(id))}
                />
                <div className="mt-5">
                    <PhotoOfTheDay />
                </div>
            </main>
        </>
    )
}
