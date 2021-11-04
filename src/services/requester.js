import axios from 'axios';

const requester = axios.create({
    baseURL: 'https://lorem-faker.vercel.app',
    responseType: 'json',
})

export const getApiCall = async ({ path, body = {} }) => {
    try {
        const res = await requester.get(path, { params: body });
        return res.data;
    } catch (error) {
        console.log("error", error)
    }
}