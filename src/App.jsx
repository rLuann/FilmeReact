import React from 'react'
import ListaFilmes from './components/ListaFilmes'
import './App.css'

const filmes = [
  {
    titulo: 'O Poderoso Chefão',
    ano: 1972,
    poster: 'https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg',
    genero: 'Drama'
  },
  {
    titulo: 'Matrix',
    ano: 1999,
    poster: 'https://upload.wikimedia.org/wikipedia/pt/c/c1/The_Matrix_Poster.jpg',
    genero: 'Ficção Científica'
  },
  {
    titulo: 'Inception',
    ano: 2010,
    poster: 'https://m.media-amazon.com/images/M/MV5BMTM0MjUzNjkwMl5BMl5BanBnXkFtZTcwNjY0OTk1Mw@@._V1_.jpg',
    genero: 'Ficção Científica'
  },
  {
    titulo: 'Interstellar',
    ano: 2014,
    poster: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg',
    genero: 'Ficção Científica'
  }
]

function App() {
  return (
    <div>
      <h1>SEEnema</h1>
      <ListaFilmes filmes={filmes} />
    </div>
  )
}

export default App
