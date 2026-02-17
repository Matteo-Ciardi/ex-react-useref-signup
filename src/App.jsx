import { useState } from 'react';

import './App.css'

function App() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [experienceYears, setExperienceYears] = useState("");
  const [deescription, setDescription] = useState("");

  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~";

  const handleSubmit = (e) => {
    e.preventDefault();

    if(
      !name.trim() ||
      !username.trim() ||
      !password.trim() ||
      !specialization.trim() ||
      !experienceYears.trim() ||
      experienceYears ||
      !deescription.trim()
    ){
      alert("Errore nella compilazione!")
      return;
    }
    console.log("Dati inviati correttamente:",
      name,
      username,
      password,
      specialization,
      experienceYears,
      deescription
    )
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Web developer Sign Up</h1>

        <input
          type='text'
          value={name}
          placeholder='Nome completo'
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type='text'
          value={username}
          placeholder='Username'
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type='password'
          value={password}
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />

        <select
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
        >
          <option>Full Stack</option>
          <option>Frontend</option>
          <option>Backend</option>
        </select>

        <input
          type='number'
          value={experienceYears}
          placeholder='Anni di esperienza'
          onChange={(e) => setExperienceYears(e.target.value)}
        />

        <textarea
          value={deescription}
          placeholder='Breve descrizione di te stesso'
          onChange={(e) => setDescription(e.target.value)}
        />

        <button>Invia</button>
      </form>
    </>
  )
}

export default App
