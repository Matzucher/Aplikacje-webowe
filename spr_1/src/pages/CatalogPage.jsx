import { useState } from "react"
import { usePizzas } from "../../hooks/usePizzas"
import { deletePizza, switchAccessibility } from "../../service/pizza"
import Card from "../components/Card"

export default function CatalogPage() {
    const { pizzas, setPizzas, status } = usePizzas()
    const [from, setFrom] = useState(0)
    const [to, setTo] = useState(100)

    if (status == "ladowanie") {
        return <>
            <div className="alert alert-warning m-4">
                Wczytywanie danych...
            </div>
        </>
    }

    if (status == "blad") {
        return <>
            <div className="alert alert-danger m-4">
                Błąd wczytywania danych
            </div>
        </>
    }

    let filteredPizzas = pizzas.filter(pizza => pizza.ocena <= to && pizza.ocena >= from)
    return <>
        <h1 className="mb-2">Liczba dostępnych rodzajów: {pizzas.length}</h1>
        <h4>Ocena:</h4>
        <div className="d-flex align-items-center m-3">
            <div className="form-label">Od: </div>
            <input className="form-control m-2" style={{ width: 100 + "px" }} type="number" max={100} min={0} value={from} onChange={(e) => { setFrom(e.target.value) }}></input>
            <div className="form-label">Do: </div>
            <input className="form-control m-2" style={{ width: 100 + "px" }} type="number" max={100} min={0} value={to} onChange={(e) => { setTo(e.target.value) }}></input>
        </div>
        <div className="container">
            <div className='row g-4'>
                {filteredPizzas.map((pizza, index) => (
                    <div className="col-12 col-md-6 col-lg-4" key={index}>
                        <Card pizza={pizza} onDelete={nr => setPizzas(deletePizza(nr))} onAccessSwitch={nr => setPizzas(switchAccessibility(nr))} ></Card>
                    </div>
                ))}
            </div>
        </div >
    </>
}