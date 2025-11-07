import React from 'react'
import './modal.css'

export default function Modal({ filme, onClose }) {
    if (!filme) return null // se não tiver filme, não renderiza o modal

    return (
        <div className="modal-fundo" onClick={onClose}>
            <div className="modal-conteudo" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>X</button>

                <div className='poster-titulo'>
                    <h3>{filme.titulo} ({filme.ano})</h3>
                    <img src={filme.poster} alt={filme.titulo} width="250" />
                </div>

                <div className='descricao'>
                    <p><strong>Gênero:</strong> {filme.genero}</p>
                    <p><strong>Streaming:</strong> {filme.streaming}</p>
                    <p> Sinopse: {filme.desc}</p>
                    <a href={filme.link} target="" rel="">Saiba mais</a>
                </div>

            </div>
        </div>
    )
}