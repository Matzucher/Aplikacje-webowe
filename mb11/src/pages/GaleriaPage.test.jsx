import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import GalleryPage from './GalleryPage'

vi.mock('../services/photos.js', () => ({
    downloadPhotos: () => Promise.reject(new Error('Brak sieci')),
}))
describe('GalleryPage', () => {
    it('pokazuje komunikat błędu zamiast pustej strony', async () => {
        render(<GalleryPage />)
        expect(await screen.findByText(/Nie udało się pobrać danych/)).toBeInTheDocument()
    })
})