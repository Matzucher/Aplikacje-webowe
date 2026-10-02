import { Fragment } from 'react'
import PhotoCard from './PhotoCard.jsx'
import PhotoModal from './PhotoModal.jsx'

export default function Gallery({ photos, onDelete, onToggleFavourite }) {
    return <>
        <div id="galeria" className="row g-4">
            {photos.map(photo => (
                <Fragment key={photo.id} >
                    <div className="col-12 col-md-6 col-lg-4">
                        <PhotoCard 
                            {...photo} 
                            onDelete={() => onDelete(photo.id)} 
                            onToggleFavourite={() => onToggleFavourite(photo.id)}
                            />
                    </div>
                    <PhotoModal {...photo} />
                </Fragment>
            ))}
        </div>
    </>
}