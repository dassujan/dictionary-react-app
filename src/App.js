import './App.css';
import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import Header from './Component/Header/header.jsx';
import Definitions from './Component/Defination/definitions.jsx';

function App() {

  const [meanings, setMeanings] = useState([]);
  const [input, setInput] = useState("");

  const dictionaryApiData = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
      );
      setMeanings(data.data)
      console.log(meanings[0].phonetics)

    } catch {

    }
  }

  useEffect(
    () => {
      dictionaryApiData()
    }, [input]
  )

  return (
    <div style={{ background: 'black', color: '#fff', height: '100vh' }}>
      <Container maxWidth="md" style={{ diaplay: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Header input={input} setInput={setInput} />
        <Definitions meanings={meanings} word={input} />
      </Container>
    </div>

  );
}

export default App;