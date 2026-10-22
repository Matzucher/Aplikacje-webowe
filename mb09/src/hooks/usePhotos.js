import { useState, useEffect } from 'react'
import { downloadPhotos } from '../services/photos.js'

export function usePhotos() {
    const [photos, setPhotos] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        downloadPhotos()
            .then(dane => setPhotos(dane))
            .catch(err => setError(err.message))
            .finally(() => setIsLoading(false))
    }, [])
    return { photos, setPhotos, isLoading, error }
}