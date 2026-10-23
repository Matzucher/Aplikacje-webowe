import { useNavigate } from "react-router-dom"

export default function PageNotFound() {
    const navigate = useNavigate()
    return <>
        <div>
            404 - Nie znaleziono takiej strony
            <button className="btn btn-outline-primary" onClick={() => navigate(-1)}> ← Wróć na stronę główną</button>
        </div>
    </>
}