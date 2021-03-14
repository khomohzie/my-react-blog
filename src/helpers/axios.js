import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:4000/api'
})

export const createBlog = (payload) => api.post('/blog', payload)

const apis = {
    createBlog,
}

export default apis