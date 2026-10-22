import { useState, useEffect } from 'react'
function randomId() {
    return Math.floor(Math.random() * 300)
}
export default function PhotoOfTheDay() {
    const [id, setId] = useState(randomId)
    const [photo, setPhoto] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        async function downoladPhoto() {
            setIsLoading(true)
            try {
                const response = await fetch(`https://picsum.photos/id/${id}/info`)
                if (!response.ok) throw new Error('Błąd serwera: ' + response.status)
                const data = await response.json()
                setPhoto(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setIsLoading(false)
            }
        }
        downoladPhoto()
    }, [id])

    return <>
        <div className="container mt-5 mb-5">
            <h2>Zdjęcie dnia</h2>
            {photo && (
                <>
                    <img
                        src={`https://picsum.photos/id/${id}/400/250`}
                        className="img-fluid rounded"
                        alt={photo.author}
                    />
                    <p className="text-muted mt-2">Autor: {photo.author}</p>
                </>
            )}
            <button
                className="btn btn-outline-primary"
                disabled={isLoading}
                onClick={() => setId(randomId())}
            >
                {isLoading ? 'Losuję...' : 'Losuj nowe zdjęcie'}
            </button>
        </div>
    </>

}