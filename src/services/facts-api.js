import axios from 'axios'
const baseURL = ''


export const getFacts = () => {
    const URL = 'http://localhost:3001/facts'
    // const URL = `${baseURL}/${id}`
    const response = axios.get(URL)
    return response
}

export const getFact = (id) => {
    const URL = `http://localhost:3001/facts/${id}`
    const response = axios.get(URL)
    return response
}

export const deleteFact = (id) => {
    const URL = `http://localhost:3001/facts/${id}`
    const response = axios.delete(URL)
    return response
}

export const editFact = (id, updatedFact) => {
    const URL = `http://localhost:3001/facts/${id}`
    console.log('sending: ', URL, updatedFact);

    const response = axios.put(URL, updatedFact)
    return response
}

export const createFact = (fact) => {
    const URL = 'http://localhost:3001/facts' 
    const response = axios.post(URL, fact)
    return response
}