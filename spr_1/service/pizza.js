let pizzas = null

export async function downloadPizzas() {
    if (pizzas) return pizzas
    const response = await fetch('/dane.json')
    if (!response.ok) throw new Error('Błąd serwera: ' + response.status)
    pizzas = await response.json()
    return pizzas
}

export function deletePizza(nr) {
    pizzas = pizzas.filter(pizza => pizza.nr != nr)
    return pizzas
}