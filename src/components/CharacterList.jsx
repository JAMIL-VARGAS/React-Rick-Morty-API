import {useState,useEffect} from 'react'
import Character from './Character'
import NavePage from './NavePage'

function CharacterList() {
    const [character, setCharacter] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    
    async function getData(){
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        const data = await response.json()
        setLoading(false)
        setCharacter(data.results)
    }
    useEffect(()=>{
        // esto ejecutara la funcion al cargar el componente
        getData()
    },[page])

    return (
        <div className='container'>
            <NavePage page={page} setPage={setPage}/>
            {
                loading ? <h1>Loading...</h1> : 
                <div className='row'>
                {
                character.map(character=>{
                    return (
                        <div className='col-md-4' key={character.id}>
                                <Character character={character}/>
                        </div>
                )
            })}
            </div>
            }
            <NavePage page={page} setPage={setPage}/>
        </div>
    )
}

export default CharacterList
