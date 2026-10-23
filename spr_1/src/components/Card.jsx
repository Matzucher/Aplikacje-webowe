import { Link } from "react-router-dom"

export default function Card({ pizza, onDelete }) {
    return <>
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">{pizza.pseudonim}</h4>
                <span className="card-text">Kategoria: {pizza.kategoria}</span><br></br>
                <span className="card-text">Ocena: {pizza.ocena}</span><br></br>
                {pizza.czynny ?
                    <span className="badge text-bg-success">Czynny</span>
                    :
                    <span className="badge text-bg-secondary">Nieczynny</span>
                }
                <div className="d-flex justify-content-between mt-2 border-top">
                    <Link className="btn btn-outline-primary mt-2" to={`/${pizza.nr}`}>Szczgóły</Link>
                    <div>
                        <button className="btn btn-outline-secondary mt-2">Dostępność</button>
                        <button className="btn btn-danger mt-2 ms-2" onClick={() => onDelete(pizza.nr)}>Usuń</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}