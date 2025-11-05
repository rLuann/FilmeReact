# 🎬 Aula React Props - Catálogo de Filmes

![Banner do Projeto](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Film_reel_icon.svg/320px-Film_reel_icon.svg.png)

## Descrição

Este é um projeto de **exemplo em React** criado com **Vite**, desenvolvido por **Claudeny Nivaldo Avelino**.  
O objetivo é demonstrar o uso de **props e componentes reutilizáveis** em React, criando um catálogo de filmes.

Cada filme é representado por um componente `<Filme />` que recebe propriedades (`props`) como:

- `titulo` – título do filme  
- `ano` – ano de lançamento  
- `poster` – imagem do poster  

Os filmes são exibidos em um componente `<ListaFilmes />` que renderiza múltiplos componentes `<Filme />`.

> Todos os estilos estão organizados em **CSS externo** (`index.css`) para manter o código limpo e separado da lógica dos componentes.

---

## Estrutura do Projeto



```
aula-react-props/
├── src/
│ ├── components/
│ │ ├── Filme.jsx
│ │ └── ListaFilmes.jsx
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── package.json
└── vite.config.js
```

---

## Funcionalidades

- Exibição de filmes com título, ano e poster  
- Componentes reutilizáveis  
- Estilos organizados externamente em CSS (`index.css`)  
- Layout responsivo simples  

---

## Como Rodar o Projeto

1. Clone o repositório:

```bash
git clone https://github.com/ClaudenyAvelino/aula-react-props.git
```

**1️⃣ Criar o projeto com Vite**

No terminal, rode:
```
npm create vite@latest aula-react-props -- --template react
```
`aula-react-props` → nome do projeto

`--template react` → configura React com JavaScript (para TypeScript, use `--template react-ts`)

>💡 O Vite cria um projeto React super rápido e moderno.

**2️⃣ Entrar na pasta do projeto**
```
cd aula-react-props
```
**3️⃣ Instalar dependências**
```
npm install
```

**4️⃣ Rodar o projeto**
```
npm run dev
```
>Abra o link exibido no terminal (geralmente http://localhost:5173
) para ver o catálogo de filmes.

**Contato**

* Claudeny Nivaldo Avelino

* GitHub: ClaudenyAvelino

* LinkedIn: Claudeny Nivaldo Avelino

* E-mail: claudeny.avelino@gmail.com

# Licença

Este projeto é de uso educacional, livre para estudo e prática de React com Vite.

**1️⃣ src/components/Filme.jsx**

```
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
```
**2️⃣ src/components/ListaFilmes.jsx**
```
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
```
**3️⃣ src/index.css**
```
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
}

h1 {
  text-align: center;
  margin-top: 20px;
  color: #333;
}

/* Estilo da lista de filmes */
.lista-filmes {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
}

/* Estilo do card de cada filme */
.filme-card {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  width: 200px;
  text-align: center;
  background-color: #fff;
  box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}

.filme-card:hover {
  transform: scale(1.05);
}

.filme-poster {
  width: 150px;
  border-radius: 3px;
  margin-top: 10px;
}
```

**4️⃣ src/App.jsx**
```
import React from 'react'
import ListaFilmes from './components/ListaFilmes'

const filmes = [
  {
    titulo: 'O Poderoso Chefão',
    ano: 1972,
    poster: 'https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg'
  },
  {
    titulo: 'Matrix',
    ano: 1999,
    poster: 'https://upload.wikimedia.org/wikipedia/pt/c/c1/The_Matrix_Poster.jpg'
  },
  {
    titulo: 'Inception',
    ano: 2010,
    poster: 'https://m.media-amazon.com/images/M/MV5BMTM0MjUzNjkwMl5BMl5BanBnXkFtZTcwNjY0OTk1Mw@@._V1_.jpg'
  },
  {
    titulo: 'Interstellar',
    ano: 2014,
    poster: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg'
  }
]

function App() {
  return (
    <div>
      <h1>Catálogo de Filmes</h1>
      <ListaFilmes filmes={filmes} />
    </div>
  )
}

export default App
```

**✅ Resultado:**
* Todo o estilo está no index.css
* Os componentes Filme e ListaFilmes estão limpos e reutilizáveis
* Layout responsivo simples com hover no card