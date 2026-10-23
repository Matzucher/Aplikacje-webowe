import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { usePizzas } from "../../hooks/usePizzas"
import { newPizzaNr } from "../../service/pizza"

export default function AddPizzaPage() {
    const { pizzas, setPizzas } = usePizzas()
    const navigate = useNavigate()

    const pseudonim = useRef("")
    const kategoria = useRef("")
    const ocena = useRef(1)

    function handleSubmit(event) {
        event.preventDefault()
        setPizzas(pizzas.push({
            nr: newPizzaNr(),
            pseudonim: pseudonim.current.value,
            kategoria: kategoria.current.value,
            ocena: ocena.current.value,
            czynny: true
        }))
        navigate("/")
    }

    return <>
        <h1>Dodaj Kwiat</h1>
        <form className="p-2" onSubmit={(event) => handleSubmit(event)}>
            <label className="form-label mt-2">Pseudonim:</label>
            <input className="form-control" type="text" ref={pseudonim}></input>

            <label className="form-label mt-2">Kategoria:</label>
            <select className="form-select" defaultValue={1} ref={kategoria}>
                <option>Mięsne</option>
                <option>Klasyczne</option>
                <option>Wegetariańskie</option>
            </select>

            <label className="form-label mt-2">Ocena (1-100):</label>
            <input className="form-control" type="number" max={100} min={1} ref={ocena}></input>

            <button className="btn btn-primary mt-3">Zatwierdź wybór</button>
        </form>
    </>
}