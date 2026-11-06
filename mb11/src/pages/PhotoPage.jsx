import { useParams, useNavigate } from 'react-router-dom'
import { usePhotos } from '../hooks/usePhotos.js'

export default function PhotoPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { photos, isLoading, error } = usePhotos()

    if (isLoading) return <p className="text-muted m4">Ładowanie...</p>
    if (error) return <div className="alert alert-danger m4">{error}</div>

    const photo = photos.find(z => z.id === Number(id))
    if (!photo) {
        return (
            <div className="container mt-4">
                <div className="alert alert-warning">Nie ma zdjęcia o numerze {id}.</div>
                <button className="btn btn-outline-secondary" onClick={() => navigate(-1)}>Wstecz</button>
            </div>
        )
    }

    return (
        <div className="container mt-4">
            <h1>{photo.title}</h1>
            <img src={photo.imageLarge} className="img-fluid rounded" alt={photo.alt} />
            <p className="mt-3">{photo.description}</p>
            <button className="btn btn-outline-secondary" onClick={() => navigate(-1)}>Wstecz</button>
        </div>
    )
}
