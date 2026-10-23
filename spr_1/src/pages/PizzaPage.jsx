import { useNavigate, useParams } from "react-router-dom";
import { usePizzas } from "../../hooks/usePizzas";

export default function PizzaPage() {
    const { nr } = useParams()
    const { pizzas, status } = usePizzas()
    const navigate = useNavigate()

    if (status == "ladowanie") {
        return <>
            <div className="alert alert-warning m-4">
                Wczytywanie danych...
            </div>
        </>
    }

    const pizza = pizzas.find(p => p.nr == nr);

    if (status == "blad" || pizza == null) {
        return <>
            <div className="alert alert-danger m-4">
                Błąd wczytywania danych
            </div>
        </>
    }

    return <>
        <div className='d-flex justify-content-center mt-3'>
            <div className="card">
                <div className="card-body">
                    <div className='d-flex justify-content-between align-items-center'>
                        <h4 className="card-title">{pizza.pseudonim}</h4>
                        {pizza.czynny ?
                            <span className="badge text-bg-success">Czynny</span>
                            :
                            <span className="badge text-bg-secondary">Nieczynny</span>
                        }
                    </div>
                    <div className='card-subtitle mb-2'>
                        Numer: {nr}
                    </div>
                    <div className='card-text d-flex justify-content-between m-2'>
                        <span>Kategoria:</span>
                        <span><b>{pizza.kategoria}</b></span>
                    </div>
                    <div className='card-text d-flex justify-content-between m-2'>
                        <span>Ocena:</span>
                        <span><b>{pizza.ocena}</b></span>
                    </div>

                    <div className="d-flex mt-2 border-top w-100">
                        <button className="btn btn-outline-primary mt-2 w-100" onClick={() => navigate(-1)}>← Wróć do katalogu</button>
                    </div>
                </div>
            </div>
        </div>
    </>

}