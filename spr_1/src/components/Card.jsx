export default function Card({ pizza }) {
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
            </div>
        </div>
    </>
}