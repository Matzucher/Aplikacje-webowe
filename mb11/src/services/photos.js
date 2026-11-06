let photos = null

/**
 * Funkcja pobiera z serwera bazę zdjęć 
 * @returns tablica obiektów zdjęć
 */
export async function downloadPhotos() {
    if (photos) return photos
    const response = await fetch('/photosDB.json')
    if (!response.ok) throw new Error('Błąd serwera: ' + response.status)
    photos = await response.json()
    return photos
}

/**
 * Funkcja pobiera z serwera pojedyncze zdjęcie o podanym id
 * @param id Identyfikator zdjęcia które chcemy pobrać 
 * @returns pojedynczy obiekt zdjęcia
 */
export async function downloadPhoto(id) {
    const lista = await downloadPhotos()
    return lista.find(z => z.id === Number(id)) ?? null
}

/**
 * Funkcja usuwa zdjęcie o podanym id z tablicy
 * @param id Identyfikator zdjęcia, które chcemy usunąć
 * @returns Nowa tablica obiektów zdjęć
 */
export function deletePhoto(id) {
    photos = photos.filter(z => z.id !== id)
    return photos
}

/**
 * Funkcja zmienia status flagi "Favourite" wskazanego zdjęcia
 * @param id Identyfikator zdjęcia, któremu chcemy zmienić status flagi 
 * @returns Nowa tablica obiektów zdjęć
 */
export function toggleFavourite(id) {
    photos = photos.map(z => (z.id === id ? { ...z, favorite: !z.favorite } : z))
    return photos
}

/**
 * Funkcja dodaje nowe zdjęcie do tablicy i przypisuje mu nowe unikatowe id
 * @param nowe Obiekt nowego zdjęcia, które chcemy dodać 
 * @returns Nowa tablica obiektów zdjęć
 */
export function addPhoto(nowe) {
    const noweId = Math.max(...photos.map(z => z.id)) + 1
    photos = [...photos, { ...nowe, id: noweId, favorite: false }]
    return photos
}
