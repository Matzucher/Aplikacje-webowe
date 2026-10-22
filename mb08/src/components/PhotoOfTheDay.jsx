import { useState, useEffect } from 'react'
function randomId() {
    return Math.floor(Math.random() * 300)
}
export default function ZdjecieDnia() {
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
    return <p>Zdjęcie dnia — tu dopiero będzie widok</p>
}