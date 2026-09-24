var kursy = [
{ nazwa: "React", godziny: 30, aktywny: true },
{ nazwa: "Node.js", godziny: 20, aktywny: false },
{ nazwa: "MySQL", godziny: 15, aktywny: true },
{ nazwa: "Bootstrap", godziny: 10, aktywny: true }
];

function NazwyAktywnych(tablica) {
    var wynik = [];
    for (var i = 0; i < tablica.length; i++) {
        if (tablica[i].aktywny === true) {
            wynik.push(tablica[i].nazwa);
        }
    }
    return wynik;
}

function SumaGodzin(tablica) {
    var suma = 0;
    for (var i = 0; i < tablica.length; i++) 
    {
        suma = suma + tablica[i].godziny;
    }
    return suma;
}

function Opis(kurs) 
{
    return "Kurs " + kurs.nazwa + " trwa " + kurs.godziny + " godzin";
}