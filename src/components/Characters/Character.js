import { getFact, deleteFact } from '../services/facts-api'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function Character() {
    const nav = useNavigate()
    const { id } = useParams()
    const [character, setCharacter] = useState({})
    
    useEffect(() => {
        getCharacter(id)
        .then(res => setCharacter(res.data))
    }, [])

    const deleteTheCharacter = () => {
        deleteCharacter(id)
        nav('/')
    }

    return (
        <div>
            <h1>Character:</h1>
            <h3>{character.name}</h3>
            <button onClick={() => {nav(`/${id}/edit`)}}>Edit</button>
            <button onClick={deleteTheFact}>Delete</button>
        </div>
    )
}

export default Character;