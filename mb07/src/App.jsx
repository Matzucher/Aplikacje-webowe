import './App.css'
import { useRef, useState } from "react"

const courses = [
  'Programowanie w C#',
  'Angular dla początkujących',
  'Kurs Django',
  'Wprowadzenie do SQL',
]
export default function App() {
  const nameRef = useRef(null);
  const courseNumberRef = useRef(null);
  const [search, setSearch] = useState('')

  const filteredCourses = courses
    .map((course, id) => ({ course, number: id + 1 }))
    .filter(({ course }) => course.toLowerCase().includes(search.toLowerCase()))

  function handleSubmit(event) {
    event.preventDefault()
    const name = nameRef.current.value
    const courseNumber = Number(courseNumberRef.current.value)
    const course = courses[courseNumber - 1]
    console.log(name)
    if (course !== undefined) {
      console.log(course)
    } else {
      console.log('Nieprawidłowy numer kursu')
    }
  }

  return (
    <div className="container py-4" style={{ maxWidth: 600 }}>
      <h1 className="h3 mb-4">Zapisy na kursy</h1>
      <h2 className="h5">Liczba kursów: {courses.length}</h2>

      <input
        type="text"
        className="form-control mb-2"
        placeholder="Szukaj kursu..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <ol>
        {filteredCourses.map(({ course, number }) => (
          <li key={number} value={number}>{course}</li>
        ))}
      </ol>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Imię i nazwisko:</label>
          <input
            type="text"
            id="name"
            className="form-control"
            ref={nameRef}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="courseNumber">Numer kursu:</label>
          <input
            type="number"
            id="courseNumber"
            className="form-control"
            ref={courseNumberRef}
          />
        </div>
        <div className="form-group mt-3">
          <button type="submit" className="btn btn-primary">
            Zapisz do kursu
          </button>
        </div>
      </form>
    </div>
  )
}