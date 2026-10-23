let pizzas = null
let lastNr = 5

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

export function newPizzaNr() {
    lastNr++;
    return lastNr
}

export function switchAccessibility(nr) {
    let pizza = pizzas.find(pizza => pizza.nr == nr)
    pizza.czynny = !pizza.czynny

    return pizzas
}