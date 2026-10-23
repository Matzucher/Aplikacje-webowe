let pizzas = null

export async function downloadPizza() {
    if (pizzas) return pizzas
    const response = await fetch('/dane.json')
    if (!response.ok) throw new Error('Błąd serwera: ' + response.status)
    pizzas = await response.json()
    return pizzas
}