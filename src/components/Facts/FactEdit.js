import {getFact, editFact} from '../services/facts-api'
import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

function FactEdit() {
const {id} = useParams()
const nav = useNavigate()
const [data, setData] = useState({})

useEffect(() => {
    getFact(id)
    .then(res => setData(res.data)) 
}, [])

const editTheFact = (e) => {
    e.preventDefault()
    const updatedFact = {description: e.target.description.value, complete: e.target.complete.checked}//??
    editFact(id, updatedFact)
    nav(`/${id}`)
}
    return (
        <div>
            <form onSubmit={editTheFact}>
                <input 
                type='text' 
                name='description' 
                defaultValue={data.description}/>
                Complete: <input 
                type='checkbox' 
                name='complete' 
                defaultChecked={data.complete}/>
                <input type='submit' />
            </form>
        </div>
    )
}
export default Edit

