import PhotoCard from './PhotoCard.jsx'

export default function Gallery({ photos, onDelete, onToggleFavourite }) {
    return <>
        <div id="galeria" className="row g-4">
            {photos.map(photo => (
                <div className="col-12 col-md-6 col-lg-4">
                    <PhotoCard
                        {...photo}
                        onDelete={() => onDelete(photo.id)}
                        onToggleFavourite={() => onToggleFavourite(photo.id)}
                    />
                </div>
            ))}
        </div>
    </>
}