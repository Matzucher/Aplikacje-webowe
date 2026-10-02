import './App.css'

const courses = [
  'Programowanie w C#',
  'Angular dla początkujących',
  'Kurs Django',
  'Wprowadzenie do SQL',
]
export default function App() {
  return (
    <div className="container py-4" style={{ maxWidth: 600 }}>
      <h1 className="h3 mb-4">Zapisy na kursy</h1>
      <h2 className="h5">Liczba kursów: {courses.length}</h2>
      <ol>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ol>
    </div>
  )
}