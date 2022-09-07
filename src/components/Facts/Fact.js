import { getFact, deleteFact } from '../services/facts-api'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import FactDate from './FactDate'


function Todo() {
    const nav = useNavigate()
    const { id } = useParams()
    const [fact, setFact] = useState({})
    
    useEffect(() => {
        getFact(id)
        .then(res => setFact(res.data))
    }, [])

    const deleteTheFact = () => {
        deleteFact(id) // service in todos-api
        nav('/') // take us back to home screen
    }

    return (
        <div>
            <h1>Fact:</h1>
            <h3>{fact.description}</h3>
            <button onClick={() => {nav(`/${id}/edit`)}}>Edit</button>
            <button onClick={deleteTheFact}>Delete</button>
        </div>
    )
}

export default FactDate;