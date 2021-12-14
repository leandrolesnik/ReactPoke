import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import { pokemon } from './types/pokemon'
import * as C from "./App.styles";
import './App.css'
import 'antd/dist/antd.css'
import api from './api'


function App() {
  
  const [pokemon, setPokemon] = useState<pokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const [generation, setGeneration] = useState("");
  const [pageNumber, setPageNumber] = useState(0)
  const pokemonsPerPage = 10;
  const pagesVisted = pageNumber * pokemonsPerPage;
  const [progressBar, setProgressBar] = useState(0);
  const [progressBarMax, setProgressBarMax] = useState(0);

  const getPokemonGeracao1 = async () => {
    setPokemon([]);
    setLoading(true);
    for (let i = 1; i <= 151; i++) {
      const response = await api.get(`/pokemon/${i}`)
      setPokemon(pokemon => [...pokemon, response.data])
      setProgressBar(151 - i)
      setProgressBarMax(151);
    }
    setLoading(false);
  }

  const getPokemonGeracao2 = async () => {
    setPokemon([]);
    setLoading(true);
    for (let i = 152; i <= 251; i++) {
      const response = await api.get(`/pokemon/${i}`)
      setPokemon(pokemon => [...pokemon, response.data])
      setProgressBar(251 - i)
      setProgressBarMax(99);
    }
    setLoading(false);
  }

  const getPokemonGeracao3 = async () => {
    setPokemon([]);
    setLoading(true);
    for (let i = 252; i <= 386; i++) {
      const response = await api.get(`/pokemon/${i}`)
      setPokemon(pokemon => [...pokemon, response.data])
      setProgressBar(386 - i);
      setProgressBarMax(134);
    }
    setLoading(false);
  }

  const getPokemonGeracao4 = async () => {
    setPokemon([]);
    setLoading(true);
    for (let i = 387; i <= 493; i++) {
      const response = await api.get(`/pokemon/${i}`)
      setPokemon(pokemon => [...pokemon, response.data])
      setProgressBar(493 - i)
      setProgressBarMax(106);
    }
    setLoading(false);
  }

  const getPokemonGeracao5 = async () => {
    setPokemon([]);
    setLoading(true);
    for (let i = 494; i <= 649; i++) {
      const response = await api.get(`/pokemon/${i}`)
      setPokemon(pokemon => [...pokemon, response.data])
      setProgressBar(649 - i)
      setProgressBarMax(155);
    }
    setLoading(false);
  }

  const getPokemonGeracao6 = async () => {
    setPokemon([]);
    setLoading(true);
    for (let i = 650; i <= 721; i++) {
      const response = await api.get(`/pokemon/${i}`)
      setPokemon(pokemon => [...pokemon, response.data])
      setProgressBar(720 - i)
      setProgressBarMax(71);
    }
    setLoading(false);
  }

  const getPokemonGeracao7 = async () => {
    setPokemon([]);
    setLoading(true);
    for (let i = 722; i <= 809; i++) {
      const response = await api.get(`/pokemon/${i}`)
      setPokemon(pokemon => [...pokemon, response.data])
      setProgressBar(809 - i)
      setProgressBarMax(87);
    }
    setLoading(false);
  }

  const getPokemonGeracao8 = async () => {
    setPokemon([]);
    setLoading(true);
    for (let i = 810; i <= 898; i++) {
      const response = await api.get(`/pokemon/${i}`)
      setPokemon(pokemon => [...pokemon, response.data])
      setProgressBar(898 - i)
      setProgressBarMax(88);
    }
    setLoading(false);
  }
  
  
  const pageCount = Math.ceil(pokemon.length / pokemonsPerPage);
  const changePage = ({selected}:any) => {
    setPageNumber(selected)
  }
  return (
      <C.Container id="topo">
        <h1>Choose the generation</h1>
        <C.Menu>
          <button onMouseDown={getPokemonGeracao1} onClick={()=>setGeneration("Generation I")}>Generation I</button>
          <button onMouseDown={getPokemonGeracao2} onClick={()=>setGeneration("Generation II")}>Generation II</button>
          <button onMouseDown={getPokemonGeracao3} onClick={()=>setGeneration("Generation III")}>Generation III</button>
          <button onMouseDown={getPokemonGeracao4} onClick={()=>setGeneration("Generation VI")}>Generation IV</button>
          <button onMouseDown={getPokemonGeracao5} onClick={()=>setGeneration("Generation V")}>Generation V</button>
          <button onMouseDown={getPokemonGeracao6} onClick={()=>setGeneration("Generation VI")}>Generation VI</button>
          <button onMouseDown={getPokemonGeracao7} onClick={()=>setGeneration("Generation VII")}>Generation VII</button>
          <button onMouseDown={getPokemonGeracao8} onClick={()=>setGeneration("Generation VIII")}>Generation VIII</button>
        </C.Menu>
        {loading && 
          <C.Loading>
            <h1>Carregando...</h1>
            <progress value={progressBar} max={progressBarMax} />
          </C.Loading>}
        {!loading && pokemon.length > 0 && (
          <>
            <C.Geracao>
              <h1>{generation}</h1>
            </C.Geracao>
            {pokemon
            .slice(pagesVisted, pagesVisted + pokemonsPerPage)
            .map((pokemon, index) => {
              return (
                  <C.Corpo>
                    <C.Topo key={index} cor={
                        pokemon.types[0].type.name === 'fire' ? "#E7625F" : 
                        pokemon.types[0].type.name === 'water' ? "#A0E7E5" : 
                        pokemon.types[0].type.name === 'grass' ? "#7AC74C" : 
                        pokemon.types[0].type.name === 'poison' ? "#A9A9EF" :
                        pokemon.types[0].type.name === 'bug' ? "#A6B91A" :
                        pokemon.types[0].type.name === 'flying' ? "#A98FF3" :
                        pokemon.types[0].type.name === 'poison' ? "#A33EA1" :
                        pokemon.types[0].type.name === 'normal' ? "#A8A77A" :
                        pokemon.types[0].type.name === 'fighting' ? "#C22E28" :
                        pokemon.types[0].type.name === 'rock' ? "#B6A136" :
                        pokemon.types[0].type.name === 'electric' ? "#F7D02C" :
                        pokemon.types[0].type.name === 'ground' ? "#E2BF65" :
                        pokemon.types[0].type.name === 'fairy' ? "#D685AD" :
                        pokemon.types[0].type.name === 'dark' ? "#705746" :
                        pokemon.types[0].type.name === 'steel' ? "#B7B7CE" :
                        pokemon.types[0].type.name === 'psychic' ? "#F95587" :
                        pokemon.types[0].type.name === 'ghost' ? "#735797" :
                        pokemon.types[0].type.name === 'ice' ? "#96D9D6" :
                        pokemon.types[0].type.name === 'dragon' ? "#6F35FC" : " "
                        }>
                      <h2>{pokemon.order > 0 ? pokemon.order : ''}</h2>
                      <img src={pokemon.sprites.other.home.front_default} alt=""/>
                      <h1>{pokemon.name.toUpperCase()}</h1>
                    </C.Topo>
                    <C.DescricaoContainer>
                      <C.Descricao>
                        <h3>TYPE</h3>
                        {pokemon.types.length >= 2 ?
                          <p>{pokemon.types[0].type.name.toUpperCase()} / {pokemon.types[1].type.name.toUpperCase() }</p>
                          :
                          <p>{pokemon.types[0].type.name.toUpperCase()}</p>
                        }
                        <p>HEIGHT: {(pokemon.height / 10)} M<br /> WEIGHT: {(pokemon.weight / 10)} Kg</p>
                        
                        <h3>BASE ABILITIES</h3>
                        <p>{pokemon.abilities.map(abil => (
                          <p key={abil.ability.name}>{abil.ability.name.toUpperCase()}</p>
                        ))}</p>
                        
                      </C.Descricao>
                      
                      <C.Descricao>
                        <div style={{display:"flex", flexDirection: "column"}}>
                          <h3>SPRITES</h3>
                          <div>
                            <div style={{display: "flex", justifyContent: 'space-around'}}>
                              <p>Normal</p><p>Shiny</p>
                            </div>
                            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                            <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
                          </div>
                          <div>
                            <img src={pokemon.sprites.back_default} alt={pokemon.name} />
                            <img src={pokemon.sprites.back_shiny} alt={pokemon.name} />
                          </div>
                        </div>
                      </C.Descricao>

                      <C.Descricao>
                        <h3>BASE STATS</h3>
                        {pokemon.stats.map(stat => (
                          <C.Progress>
                            <div style={{minWidth: "150px", maxWidth: "150px", textAlign: "right" }}>{stat.stat.name.toUpperCase()}: </div>
                            <div style={{minWidth: "100px", maxWidth: "100px", }}><progress style={{width: '100%', height: "24px",}} max="255" value={stat.base_stat} /></div>
                            <div style={{minWidth: "30px", maxWidth: "30px", }}>{stat.base_stat}</div>
                          </C.Progress>  
                          ))}
                      </C.Descricao>
                    </C.DescricaoContainer>
                  </C.Corpo>
                );
              })
            }
            <br />
            <ReactPaginate 
            pageCount={pageCount}
            onPageChange={changePage }
            containerClassName={'pagination'}
            previousClassName={'previousPageButton'}
            nextClassName={'nextPageButton'}
            activeClassName={'activePageButton'}
            />
            <div style={{width: "100%", display: "flex", justifyContent: "right",}}>
              <a href="#topo"><p>^ voltar ao topo ^</p></a>
            </div>
          </>
        )}
      </C.Container>

  );
}


export default App
