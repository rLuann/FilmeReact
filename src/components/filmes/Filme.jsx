import React from 'react'
import './filmes.css'

function Filme({ titulo, ano, poster, genero, streaming, desc, link }) {
    return (
        <div className='filmes'>
            <h3>{titulo} ({ano})</h3>
            <img src={poster} alt={titulo} width="150" />
            {/* <p className='genero'>Gênero: {genero}</p>
            <p className='streaming'>Streaming: {streaming} </p>
            <p className='desc'>{desc}</p>
            <a className='link' href={link}>Saiba mais</a> */}
        </div>
    )
}

export default Filme