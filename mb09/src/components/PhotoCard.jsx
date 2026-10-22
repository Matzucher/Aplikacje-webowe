const CATEGORY_NAME = { gory: 'Góry', morze: 'Morze', miasto: 'Miasto' }
const CATEGORY_COLOR = { gory: 'success', morze: 'primary', miasto: 'dark' }

export default function PhotoCard({
    id,
    title,
    description,
    category,
    image,
    alt,
    favorite,
    onDelete,
    onToggleFavourite
}) {
    return (
        <div className="card h-100 shadow-sm">
            <img src={image} className="card-img-top" alt={alt} />
            <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start">
                    <h3 className="card-title h5">{title}</h3>
                    <button
                        type="button"
                        className="btn btn-link p-0 fs-4 lh-1"
                        onClick={onToggleFavourite}
                        aria-label={favorite ? 'Usuń z ulubionych' : 'Dodaj do ulubionych'} aria-pressed={favorite} >
                        {favorite ? (
                            <i className="bi bi-star-fill text-warning" />
                        ) : (
                            <i className="bi bi-star" />
                        )}
                    </button>
                </div>
                <p>
                    <span className={`badge text-bg-${CATEGORY_COLOR[category]}`}>
                        {CATEGORY_NAME[category]}
                    </span>
                </p>
                <p className="card-text text-body-secondary">{description}</p>
                <div className="d-flex gap-2 mt-auto">
                    <button
                        type="button"
                        className="btn btn-outline-primary mt-auto"
                        data-bs-toggle="modal"
                        data-bs-target={`#zdjecie${id}`}>
                        Powiększ
                    </button>
                    <button type="button" className="btn btn-outline-danger"
                        onClick={onDelete}>
                        Usuń
                    </button>
                </div>
            </div>
        </div >
    )
}