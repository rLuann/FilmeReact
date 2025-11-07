import React, { useState } from 'react'
import Filme from './filmes/Filme'
import Modal from './modal/modal'
import './lista.css'

function ListaFilmes({ filmes }) {
  const [filmeSelecionado, setFilmeSelecionado] = useState(null)

  return (
    <div className='lista'>
      {filmes.map((filme, index) => (
        <div key={index} onClick={() => setFilmeSelecionado(filme)}>
          <Filme
            titulo={filme.titulo}
            ano={filme.ano}
            poster={filme.poster}
            genero={filme.genero}
            streaming={filme.streaming}
            desc={filme.desc}
            link={filme.link}
          />
        </div>
      ))}

      {/* Renderiza o modal se houver um filme selecionado */}
      {filmeSelecionado && (
        <Modal
          filme={filmeSelecionado}
          onClose={() => setFilmeSelecionado(null)}
        />
      )}
    </div>
  )
}

export default ListaFilmes