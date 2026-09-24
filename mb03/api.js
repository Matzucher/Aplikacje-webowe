const ADRES = "https://jsonplaceholder.typicode.com/users";
const wynik = document.querySelector("#wynik");
const filtr = document.querySelector("#filtr");
const licznik = document.querySelector("#licznik");

let uzytkownicy = [];

async function pobierzUzytkownikow() {
    try {
        const odpowiedz = await fetch(ADRES);
        if (!odpowiedz.ok) {
            throw new Error(`Błąd HTTP: ${odpowiedz.status} ${odpowiedz.statusText}`);
        }
        return await odpowiedz.json();
    } catch (blad) {
        console.error("Nie udało się pobrać danych:", blad);
        throw blad;
    }
}

function bezpieczny(tekst) {
    return String(tekst)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

