import React from 'react'
import ListaFilmes from './components/ListaFilmes'
import './App.css'
import Logo from './img/LogoSEEnema.png'

const filmes = [
  {
    titulo: 'O Poderoso Chefão',
    ano: 1972,
    poster: 'https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg',
    genero: 'Drama',
    streaming: 'Prime Video',
    desc: 'O patriarca idoso de uma dinastia do crime organizado transfere o controle de seu império clandestino para seu filho relutante.',
    link: 'https://www.imdb.com/pt/title/tt0068646/?ref_=nv_sr_srsg_3_tt_8_nm_0_in_0_q_godfa'
  },
  {
    titulo: 'Matrix',
    ano: 1999,
    poster: 'https://upload.wikimedia.org/wikipedia/pt/c/c1/The_Matrix_Poster.jpg',
    genero: 'Ficção Científica',
    streaming: 'HBO MAX',
    desc: 'Um hacker aprende com os misteriosos rebeldes sobre a verdadeira natureza de sua realidade e seu papel na guerra contra seus controladores.',
    link: 'https://www.imdb.com/pt/title/tt0133093/?ref_=fn_i_1'
  },
  {
    titulo: 'Inception',
    ano: 2010,
    poster: 'https://m.media-amazon.com/images/M/MV5BMTM0MjUzNjkwMl5BMl5BanBnXkFtZTcwNjY0OTk1Mw@@._V1_.jpg',
    genero: 'Ficção Científica',
    streaming: 'HBO MAX',
    desc: 'Um ladrão que rouba segredos corporativos através da tecnologia de entrar no subconsciente recebe a tarefa inversa de plantar uma idéia na mente do diretor de uma grande empresa.',
    link: 'https://www.imdb.com/pt/title/tt1375666/?ref_=fn_i_1'
  },
  {
    titulo: 'Interstellar',
    ano: 2014,
    poster: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg',
    genero: 'Ficção Científica',
    streaming: 'HBO MAX',
    desc: 'Uma equipe de exploradores viaja através de um buraco de minhoca no espaço, na tentativa de garantir a sobrevivência da humanidade.',
    link: 'https://www.imdb.com/pt/title/tt0816692/?ref_=nv_sr_srsg_0_tt_7_nm_0_in_1_q_inte'
  }
]

function App() {
  return (
    <div className='background'>
      {/* <img src={Background} alt="Não sei" /> */}

      <div className='conteudo'>

        <img className='logo' src={Logo} alt="" />
        <ListaFilmes filmes={filmes} />

      </div>

    </div>

  )
}

export default App
