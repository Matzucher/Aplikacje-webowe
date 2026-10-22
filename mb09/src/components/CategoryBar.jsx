import Categories from "../data/categoriesDB.json"

export default function CategoryBar({ activeCategory, onChange }) {
    return (
        <div id="kategorie" className="d-flex flex-wrap gap-2 mb-4">
            <button
                type="button"
                className="btn btn-outline-primary active"
                aria-pressed="true">
                Wszystkie
            </button>
            {Categories.map(filterCategory => (
                <button
                    key={filterCategory.value}
                    type="button"
                    className={`btn btn-outline-primary${activeCategory === filterCategory.value ? ' active' : ''}`}
                    aria-pressed={activeCategory === filterCategory.value}
                    onClick={() => onChange(filterCategory.value)}>
                    {filterCategory.label}
                </button>
            ))}
        </div>
    )
}