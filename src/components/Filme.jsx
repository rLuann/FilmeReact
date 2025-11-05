import React from 'react'

function Filme({ titulo, ano, poster }) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <h3>{titulo} ({ano})</h3>
            <img src={poster} alt={titulo} width="150" />
        </div>
    )
}

export default Filme