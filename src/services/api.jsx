import axios from "axios";

import dotenv from "dotenv";
dotenv.config();

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

function getConfig(token, type){
    return { headers: 
                    { Authorization: `Bearer ${token}`,
                    type: type}
            };
}

async function registerUser(user) {
    return await axios.post(`${BASE_URL}/sign-up`, user);
}

async function loginUser(user) {
    return await axios.post(`${BASE_URL}/sign-in`, user);
}

async function getPetsUser(token, type) {
    const config = getConfig(token, type);
    return await axios.get(`${BASE_URL}/pets`, config);
}

async function createPet(token, type, petData) {
    const config = getConfig(token, type);
    return await axios.post(`${BASE_URL}/pets/add`, petData ,config);
}

async function createPetImage(token, type, petImageData) {
    const config = getConfig(token, type);
    return await axios.post(`${BASE_URL}/pets/addImage`, petImageData ,config);
}

async function getPets(token, type) {
    const config = getConfig(token, type);
    return await axios.get(`${BASE_URL}/allPets`, config);
}

async function adoptingPet(token, type, petId) {
    const config = getConfig(token, type);
    return axios.post(`${BASE_URL}/adopting`, {petId} ,config);
}

async function getAdopterData(token, type) {
    const config = getConfig(token, type);
    return await axios.get(`${BASE_URL}/adopterData`, config);
}

async function getChats(token, type) {
    const config = getConfig(token, type);
    return await axios.get(`${BASE_URL}/chats`, config);
}


const api = { 
    registerUser,
    loginUser,
    getPetsUser,
    createPet,
    createPetImage,
    getPets,
    adoptingPet,
    getAdopterData,
    getChats
};
export default api;