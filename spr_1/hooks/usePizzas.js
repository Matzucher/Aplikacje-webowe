import { useEffect, useState } from "react";
import { downloadPizzas } from "../service/pizza";

export function usePizzas() {
    const [pizzas, setPizzas] = useState()
    const [status, setStatus] = useState("ladowanie")

    useEffect(() => {
        downloadPizzas()
            .then(data => setPizzas(data))
            .catch(err => setStatus("blad"))
            .finally(() => setStatus("gotowy"))
    }, [])
    return { pizzas, setPizzas, status }
}
