import Categories from "../data/categoriesDB.json"

export default function FiltersOffcanvas({ activeCategory, onChange }) {
    function SwitchCategory(category) {
        onChange(activeCategory === category ? 'all' : category)
    }

    return <>
        <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="panelFiltrow"
            aria-labelledby="panelFiltrowLabel">
            <div className="offcanvas-header">
                <h2 className="offcanvas-title h5" id="panelFiltrowLabel">
                    Filtry
                </h2>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Zamknij"></button>
            </div>
            <div className="offcanvas-body">
                <p className="text-body-secondary">
                    Zaznacz kategorie, które chcesz zobaczyć:
                </p>
                {Categories.map(category => (
                    <div className="form-check" key={category.value}>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id={`filtr-${category.value}`}
                            checked={activeCategory === category.value || activeCategory === 'all'}
                            onChange={() => SwitchCategory(category.value)}
                        />
                        <label className="form-check-label" htmlFor={`filtr-${category.value}`}>
                            {category.label}
                        </label>
                    </div>
                ))}
                <button
                    type="button"
                    className="btn btn-primary w-100 mt-4"
                    data-bs-dismiss="offcanvas">
                    Zamknij
                </button>
            </div>
        </div>
    </>
}