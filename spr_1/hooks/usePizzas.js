import { useEffect, useState } from "react";
import { downloadPizza } from "../service/pizza";

export function usePizzas() {
    const [pizzas, setPizzas] = useState()
    const [status, setStatus] = useState("ladowanie")

    useEffect(() => {
        downloadPizza()
            .then(data => setPizzas(data))
            .catch(err => setStatus("blad"))
            .finally(() => setStatus("gotowy"))
    }, [])
    return { pizzas, setPizzas, status }
}
