import { useState, useMemo, useRef } from 'react';

import './App.css'

const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

function App() {
  const nameRef = useRef();
  const specializationRef = useRef();
  const experienceYearsRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");

  const isUsernameValid = useMemo(() => {
    const validChars = username.split("").every(char =>
      letters.includes(char.toLowerCase()) || numbers.includes(char)
    );
    return validChars && username.trim().length >= 6
  }, [username])

  const isPasswordValid = useMemo(() => {
    return (
      password.trim().length >= 8 &&
      password.split("").some(char => letters.includes(char)) &&
      password.split("").some(char => numbers.includes(char)) &&
      password.split("").some(char => symbols.includes(char))
    )
  }, [password])

  const isDescriptionValid = useMemo(() => {
    return (
      description.trim().length >= 100 && description.trim().length <= 1000
    )
  }, [description])

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const specialization = specializationRef.current.value;
    const experienceYears = experienceYearsRef.current.value

    if (
      !name.trim() ||
      !username.trim() ||
      !password.trim() ||
      !specialization.trim() ||
      !experienceYears.trim() ||
      experienceYears ||
      !description.trim() ||
      !isUsernameValid ||
      !isPasswordValid ||
      !isDescriptionValid
    ) {
      alert("Errore nella compilazione!")
      return;
    }
    console.log("Dati inviati correttamente:",
      name,
      username,
      password,
      specialization,
      experienceYears,
      description
    )
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Web developer Sign Up</h1>

        <input
          type='text'
          ref={nameRef}
          placeholder='Nome completo'
        />

        <input
          type='text'
          value={username}
          placeholder='Username'
          onChange={(e) => setUsername(e.target.value)}
        />
        {username.trim() && (
          <p style={{ color: isUsernameValid ? "green" : "red" }}>
            {isUsernameValid ? "Username valido" : "Inserire almeno 6 caratteri validi (numeri, lettere)"}
          </p>
        )}

        <input
          type='password'
          value={password}
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        {password.trim() && (
          <p style={{ color: isPasswordValid ? "green" : "red" }}>
            {isPasswordValid ? "Password valida" : "Deve includere lettere, numeri e simboli"}
          </p>
        )}

        <select
          ref={specializationRef}
        >
          <option>Seleziona</option>
          <option>Full Stack</option>
          <option>Frontend</option>
          <option>Backend</option>
        </select>

        <input
          type='number'
          ref={experienceYearsRef}
          placeholder='Anni di esperienza'
        />

        <textarea
          value={description}
          placeholder='Breve descrizione di te stesso'
          onChange={(e) => setDescription(e.target.value)}
        />
        {description.trim() && (
          <p style={{ color: isDescriptionValid ? "green" : "red" }}>
            {isDescriptionValid ? "Descrizione valida" : "Deve contenere tra i 100 e i 1000 cratteri"}
          </p>
        )}

        <button>Invia</button>
      </form>
    </>
  )
}

export default App
