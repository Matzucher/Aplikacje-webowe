import { usePizzas } from "../../hooks/usePizzas"
import { deletePizza } from "../../service/pizza"
import Card from "../components/Card"

export default function CatalogPage() {
    const { pizzas, setPizzas, status } = usePizzas()

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
    return <>
        <h1 className="mb-2">Liczba dostępnych rodzajów: {pizzas.length}</h1>
        <div className="container">
            <div className='row g-4'>
                {pizzas.map((pizza, index) => (
                    <div className="col-12 col-md-6 col-lg-4" key={index}>
                        <Card pizza={pizza} onDelete={id => setPizzas(deletePizza(id))} ></Card>
                    </div>
                ))}
            </div>
        </div>
    </>
}