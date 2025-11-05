import React from 'react'
import './filmes.css'

function Filme({ titulo, ano, poster, genero }) {
    return (
        <div className='filmes'>
            <h3>{titulo} ({ano})</h3>
            <img src={poster} alt={titulo} width="150" />
            <p>Gênero: {genero}</p>
        </div>
    )
}

export default Filme