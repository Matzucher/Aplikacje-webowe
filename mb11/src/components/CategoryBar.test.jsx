import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import CategoryBar from './CategoryBar.jsx'

describe('CategoryBar', () => {
    it('wywołuje onWybierz z poprawną kategorią po kliknięciu', async () => {
        const onChange = vi.fn()
        render(<CategoryBar activeCategory="wszystkie" onChange={onChange} />)
        await userEvent.click(screen.getByRole('button', {
            name: 'Góry'
        }))
        expect(onChange).toHaveBeenCalledWith('gory')
    })
    it('oznacza aktywną kategorię przez aria-pressed', () => {
        render(<CategoryBar activeCategory="gory" onChange={() => { }} />)
        expect(screen.getByRole('button', {
            name: 'Góry'
        })).toHaveAttribute('aria-pressed', 'true')
        expect(screen.getByRole('button', {
            name: 'Morze'
        })).toHaveAttribute('aria-pressed', 'false')
    })
})