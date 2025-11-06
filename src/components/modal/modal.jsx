import React from 'react'
import './modal.css'

export default function Modal({ filme, onClose }) {
    if (!filme) return null // se não tiver filme, não renderiza o modal

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>X</button>

                <div>
                    <h3>{filme.titulo} ({filme.ano})</h3>
                    <img src={filme.poster} alt={filme.titulo} width="250" />
                </div>

                <div className='descricao'>
                    <p><strong>Gênero:</strong> {filme.genero}</p>
                    <p><strong>Streaming:</strong> {filme.streaming}</p>
                    <p>{filme.desc}</p>
                    <a href={filme.link} target="_blank" rel="noreferrer">Saiba mais</a>
                </div>

            </div>
        </div>
    )
}