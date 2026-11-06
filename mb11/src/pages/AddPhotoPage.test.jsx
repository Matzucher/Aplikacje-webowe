import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import AddPhotoPage from './AddPhotoPage.jsx'
import { addPhoto } from '../services/photos.js'

const navigateMock = vi.fn()
vi.mock('react-router-dom', async () => {
    const trueRouter = await vi.importActual('react-router-dom')
    return { ...trueRouter, useNavigate: () => navigateMock }
})

vi.mock('../services/photos.js', () => ({
    downloadPhotos: () => Promise.resolve([]),
    addPhoto: vi.fn(),
}))

describe('AddPhotoPage', () => {
    it('wysyła wypełnione dane i przechodzi na stronę główną', async () => {
        render(
            <MemoryRouter>
                <AddPhotoPage />
            </MemoryRouter>
        )

        await screen.findByLabelText('Tytuł')
        await userEvent.type(screen.getByLabelText('Tytuł'), 'Nowe zdjęcie')
        await userEvent.selectOptions(screen.getByLabelText('Kategoria'), 'gory')
        await userEvent.type(
            screen.getByLabelText('Adres URL zdjęcia'),
            'https://przyklad.pl/zdjecie.jpg'
        )
        await userEvent.click(screen.getByRole('button', {
            name: 'Zapisz'
        }))

        expect(addPhoto).toHaveBeenCalledWith(
            expect.objectContaining({
                title: 'Nowe zdjęcie',
                category: 'gory'
            })
        )
        expect(navigateMock).toHaveBeenCalledWith('/')
    })
})