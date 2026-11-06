import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { usePhotos } from '../hooks/usePhotos.js'
import { addPhoto } from '../services/photos.js'

const EMPTY_FORM = {
    title: '',
    category: '',
    image: '',
    description: ''
}

export default function AddPhotoPage() {
    const navigate = useNavigate()
    const { isLoading, error } = usePhotos()
    const [form, setForm] = useState(EMPTY_FORM)

    function changeField(pole) {
        return event => setForm({
            ...form, [pole]:
                event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        addPhoto({
            title: form.title,
            category: form.category,
            image: form.image,
            imageLarge: form.image,
            alt: form.title,
            description: form.description,
        })
        navigate('/')
    }
    if (isLoading) return <p className="text-muted m4">Ładowanie...</p>
    if (error) return <div className="alert alert-danger m4">{error}</div>
    return (
        <div className="container mt-4">
            <h1>Dodaj zdjęcie</h1>
            <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="tytul" className="form-label">Tytuł</label>
                    <input id="tytul" className="form-control" value={form.title} onChange={changeField('title')} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="kategoria" className="formlabel">Kategoria</label>
                    <select id="kategoria" className="form-select" value={form.category} onChange={changeField('category')}>
                        <option value="" disabled>Wybierz kategorię…</option>
                        <option value="gory">Góry</option>
                        <option value="morze">Morze</option>
                        <option value="miasto">Miasto</option>
                    </select>
                </div>
                <div className="col-12">
                    <label htmlFor="obrazek" className="form-label">Adres URL zdjęcia</label>
                    <input id="obrazek" className="form-control" placeholder="https://…" value={form.image} onChange={changeField('image')} />
                </div>
                <div className="col-12">
                    <label htmlFor="opis" className="form-label">Opis</label>
                    <textarea id="opis" className="form-control" rows="3"
                        value={form.description} onChange={changeField('description')} />
                </div>
                <div className="col-12 d-flex gap-2">
                    <button type="submit" className="btn btnprimary">Zapisz</button>
                    <Link to="/" className="btn btn-secondary">Anuluj</Link>
                </div>
            </form>
        </div>
    )
}
