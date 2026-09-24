export const kursy = [
    { nazwa: "React", godziny: 30, aktywny: true },
    { nazwa: "Node.js", godziny: 20, aktywny: false },
    { nazwa: "MySQL", godziny: 15, aktywny: true },
    { nazwa: "Bootstrap", godziny: 10, aktywny: true },
];

export const nazwyAktywnych = tablica =>
    tablica.filter(kurs => kurs.aktywny).map(kurs => kurs.nazwa);