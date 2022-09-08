import axios from 'axios'

const baseURL = 'http://localhost:3001'

export const getFacts = () => {
    const URL = `${baseURL}/facts`
    const response = axios.get(URL)
    return response
}

export const getFact = (id) => {
    const URL = `${baseURL}/facts/${id}`
    const response = axios.get(URL)
    return response
}

export const deleteFact = (id) => {
    const URL = `${baseURL}/facts/${id}`
    const response = axios.delete(URL)
    return response
}

export const editFact = (id, updatedFact) => {
    const URL = `${baseURL}/facts/${id}`
    console.log('sending: ', URL, updatedFact);

    const response = axios.put(URL, updatedFact)
    return response
}

export const createFact = (fact) => {
    const URL = `${baseURL}/facts` 
    const response = axios.post(URL, fact)
    return response
}

//Character API

export const getCharacter = () => {
    const URL = `${baseURL}/characters`
    const response = axios.get(URL)
    return response
}

export const getCharacters = (id) => {
    const URL = `${baseURL}/characters/${id}`
    const response = axios.get(URL)
    return response
}

export const deleteCharacter = (id) => {
    const URL = `${baseURL}/characters/${id}`
    const response = axios.delete(URL)
    return response
}

export const editCharacter = (id, updatedCharacter) => {
    const URL = `${baseURL}/characters/${id}`
    console.log('sending: ', URL, updatedCharacter);

    const response = axios.put(URL, updatedCharacter)
    return response
}

export const createCharacter = (character) => {
    const URL = `${baseURL}/characters` 
    const response = axios.post(URL, character)
    return response
}