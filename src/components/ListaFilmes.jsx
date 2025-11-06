import React from 'react'
import Filme from './filmes/Filme'


function ListaFilmes({ filmes }) {
    return (
        <div>
            {filmes.map((filme, index) => (
                <Filme
                    key={index}
                    titulo={filme.titulo}
                    ano={filme.ano}
                    poster={filme.poster}
                    genero={filme.genero}
                />
            ))}
        </div>
    )
}

export default ListaFilmes
