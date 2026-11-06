# Galeria zdjęć
Aplikacja w React do przeglądania, filtrowania i dodawania zdjęć z
kategoriami oraz stroną szczegółów każdego zdjęcia.
## Funkcjonalności
- przeglądanie galerii z filtrem po kategorii
- strona szczegółów pojedynczego zdjęcia (`/zdjecie/:id`)
- dodawanie nowego zdjęcia przez formularz (`/dodaj`)
- obsługa stanu ładowania i błędu przy pobieraniu danych
## Uruchomienie
```bash
npm install
npm run dev
```
Aplikacja działa pod `http://localhost:5173`.
## Struktura projektu
- `src/components/` — komponenty wielokrotnego użytku (karty, pasek kategorii)
- `src/pages/` — strony podpięte pod routing (`GaleriaPage`, `DodajPage`, `SzczegolyPage`)
- `src/services/` — warstwa komunikacji z danymi (`zdjecia.js`)
## Technologie
React, React Router, Bootstrap, Vite