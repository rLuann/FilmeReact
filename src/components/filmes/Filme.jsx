import React from 'react'
import './filmes.css'


function Filme({ titulo, ano, poster, genero, streaming }) {
    return (
        <div className='filmes'>
            <h3>{titulo} ({ano})</h3>
            <img src={poster} alt={titulo} width="150" />
            <p className='genero'>Gênero: {genero}</p>
            <p>Streaming: {streaming} </p>
        </div>
    )
}

export default Filme