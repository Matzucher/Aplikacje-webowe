let photos = null

export async function downloadPhotos() {
    if (photos) return photos
    const response = await fetch('/photosDB.json')
    if (!response.ok) throw new Error('Błąd serwera: ' + response.status)
    photos = await response.json()
    return photos
}
export async function downloadPhoto(id) {
    const lista = await downloadPhotos()
    return lista.find(z => z.id === Number(id)) ?? null
}

export function deletePhoto(id) {
    photos = photos.filter(z => z.id !== id)
    return photos
}
export function toogleFavourite(id) {
    photos = photos.map(z => (z.id === id ? { ...z, favorite: !z.favorite } : z))
    return photos
}
export function addPhoto(nowe) {
    const noweId = Math.max(...photos.map(z => z.id)) + 1
    photos = [...photos, { ...nowe, id: noweId, favorite: false }]
    return photos
}
