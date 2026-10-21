import { useState } from 'react'
import { Modal } from 'bootstrap'
const EMPTY_FORM = {
    title: '',
    category: '',
    image: '',
    alt: '',
    description: '',
}

export default function AddPhotoModal({ onAdd }) {
    const [form, setForm] = useState(EMPTY_FORM)
    function changeField(field) {
        return function (event) {
            setForm({ ...form, [field]: event.target.value })
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        onAdd({
            title: form.title,
            category: form.category,
            image: form.image,
            imageLarge: form.image,
            alt: form.alt,
            description: form.description,
        })
        setForm(EMPTY_FORM)
        Modal.getInstance(document.getElementById('dodajZdjecie'))?.hide()
    }
    return (
        <div
            className="modal fade"
            id="dodajZdjecie"
            tabIndex="-1"
            aria-labelledby="dodajZdjecieLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title h5" id="dodajZdjecieLabel">
                            Dodaj zdjęcie
                        </h2>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Zamknij"
                        ></button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="modal-body">
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="tytul" className="form-label">
                                        Tytuł
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"

                                        id="tytul"

                                        value={form.title}
                                        onChange={changeField('title')}

                                    />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="kategoria" className="form-label">
                                        Kategoria
                                    </label>
                                    <select
                                        className="form-select"

                                        id="kategoria"
                                        value={form.category}
                                        onChange={changeField('category')}

                                    >
                                        <option value="" disabled>
                                            Wybierz kategorię...
                                        </option>
                                        <option value="gory">Góry</option>
                                        <option value="morze">Morze</option>
                                        <option value="miasto">Miasto</option>

                                    </select>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="obrazek" className="form-label">
                                        Adres URL zdjęcia
                                    </label>
                                    <input
                                        type="text"

                                        className="form-control"
                                        id="obrazek"
                                        placeholder="https://..."
                                        value={form.image}
                                        onChange={changeField('image')}

                                    />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="alt" className="form-label">
                                        Tekst alternatywny
                                    </label>
                                    <input
                                        type="text"

                                        className="form-control"
                                        id="alt"
                                        value={form.alt}
                                        onChange={changeField('alt')}

                                    />
                                    <div className="form-text">
                                        Krótki opis zdjęcia dla osób korzystających z

                                        czytnika ekranu.
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="opis" className="form-label">
                                        Opis
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="opis"
                                        rows="3"

                                        value={form.description}
                                        onChange={changeField('description')}

                                    ></textarea>
                                    <div className="form-text">
                                        Jedno–dwa zdania: gdzie i kiedy powstało zdjęcie.
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-check">
                                        <input className="form-check-input"
                                            type="checkbox" id="zgoda" />
                                        <label className="form-check-label"
                                            htmlFor="zgoda">
                                            Zgadzam się na publikację zdjęcia w galerii
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary"
                                data-bs-dismiss="modal">
                                Anuluj
                            </button>
                            <button type="submit" className="btn btn-primary">
                                Zapisz
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}