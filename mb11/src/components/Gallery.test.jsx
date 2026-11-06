import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import Gallery from './Gallery.jsx'
const przykladoweZdjecia = [
    { id: 1, title: 'Morskie Oko', description: 'Tafla jeziora oświcie.', category: 'gory', image: 'https://przyklad.pl/1.jpg', alt: 'Morskie Oko', favorite: false },
    { id: 2, title: 'Latarnia morska', description: 'Biała latarnia naklifie.', category: 'morze', image: 'https://przyklad.pl/2.jpg', alt: 'Latarnia morska', favorite: false },
    { id: 3, title: 'Starówka nocą', description: 'Rynek oświetlonylatarniami.', category: 'miasto', image: 'https://przyklad.pl/3.jpg', alt: 'Starówka nocą', favorite: true },
]

describe('Gallery', () => {
    it('renderuje dokładnie tyle kart, ile elementów w danych', () => {
        render(
            <MemoryRouter>
                <Gallery photos={przykladoweZdjecia} onDelete={() => { }} onToggleFavourite={() => { }} />
            </MemoryRouter>
        )
        expect(screen.getAllByRole('link', {
            name: 'Powiększ'
        })).toHaveLength(3)
    })
    it('nie renderuje żadnej karty dla pustej listy', () => {
        render(
            <MemoryRouter>
                <Gallery photos={[]} onDelete={() => { }} onToggleFavourite={() => { }} />
            </MemoryRouter>
        )
        expect(screen.queryAllByRole('link', {
            name: 'Powiększ'
        })).toHaveLength(0)
    })
})
