import { useRef } from 'react'
import parki from './data/wariant15'
import Pozycja from './components/Pozycja'

function App() {
  const nameRef = useRef(null)
  const numberRef = useRef(null)

  function handleSubmit() {
    event.preventDefault()
    const name = nameRef.current.value;
    const number = numberRef.current.value;
    console.log(`${name}`)
    if (parki[number - 1] != null) {
      console.log(parki[number - 1])
    }
    else {
      console.log("Nieprawidłowy numer parku narodowego")
    }
  }

  return (
    <>
      <h1>Liczba parków narodowych: {parki.length}</h1>
      <ol>
        {parki.map((park, key) => (
          <li key={key}><Pozycja text={park} /></li>
        ))}
      </ol>
      <form className=''>
        <div className='d-flex flex-column m-2'>
          <label className='form-label'>Imię i Nazwisko:</label>
          <input name="name" className='form-control p-1' type="text" ref={nameRef}></input>
        </div>
        <div className='d-flex flex-column m-2'>
          <label className='form-label'>Numer parku narodowego:</label>
          <input name="number" className='form-control p-1' type="number" ref={numberRef}></input>
        </div>
        <button className='btn btn-primary m-1' onClick={handleSubmit}>Zatwierdź wybór </button>
      </form>
    </>
  )
}

export default App
