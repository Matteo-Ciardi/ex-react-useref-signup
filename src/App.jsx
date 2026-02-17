import './App.css'

function App() {
  return (
    <>
      <form>
        <input type='text' placeholder='Nome' />
        <input type='text' placeholder='Username' />
        <input type='password' placeholder='Password' />
        <select>
          <option>Full Stack</option>
          <option>Frontend</option>
          <option>Backend</option>
        </select>
        <input type='number' placeholder='Anni di esperienza'/>
        <textarea placeholder='Breve descrizione di te stesso'/>
        <button>Invia</button>
      </form>
    </>
  )
}

export default App
