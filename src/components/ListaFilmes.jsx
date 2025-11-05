import React from 'react'
import Filme from './Filme'

function ListaFilmes({ filmes }) {
    return (
        <div>
            {filmes.map((filme, index) => (
                <Filme
                    key={index}
                    titulo={filme.titulo}
                    ano={filme.ano}
                    poster={filme.poster}
                />
            ))}
        </div>
    )
}

export default ListaFilmes
