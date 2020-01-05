import axios from "axios"
import create from 'zustand'
import { toast } from "react-toastify"

axios.defaults.headers.get['Accept'] = 'application/json'
axios.defaults.headers.post['Accept'] = 'application/json'
axios.defaults.headers.delete['Accept'] = 'application/json'
axios.defaults.headers.put['Accept'] = 'application/json'

export const [useHomeStore] = create(set => ({
    movies: {},
    selectedMovie: undefined,
    getMovies: async url => {
        try {
            const response = await axios.get(url)
            set({ movies: await response.data.items })
        } catch (error) {
            toast.error("Er is iets misgegaan")
        }
    },
    setSelectedMovie: movie => {
        set({ selectedMovie: movie })
    }
}))

export const [useAppStore] = create(set => {
    return {
        movies: [],
        selectedMovie: undefined,
        pagination: "?start=1&limit=5",
        getMoviesPaginated: async url => {
            try {
                const response = await axios.get(url)
                set({ movies: await response.data })
            } catch (error) {
                toast.error("Something went wrong")
            }
        },
        setSelectedMovie: movie => {
            set({ selectedMovie: movie })
        },
        addMovie: async data => {
            try {
                await axios.post(`http://78.141.212.87:8000/movies`, data)
                const response = await axios.get(`http://78.141.212.87:8000/movies?start=1&limit=5`)
                set({ movies: await response.data })
                toast.success("Movie added")
            } catch (error) {
                toast.error("Something went wrong")
            }
        },
        editMovie: async (data, movie) => {
            try {
                await axios.put(`http://78.141.212.87:8000/movies/${movie._id}`, data)
                const response = await axios.get(`http://78.141.212.87:8000/movies?start=1&limit=5`)
                set({ movies: await response.data })
                set({ selectedMovie: data })
                toast.success("Movie edited")
            } catch (error) {
                toast.error("Something went wrong")
            }
        },
        deleteMovie: async id => {
            try {
                await axios.delete(`http://78.141.212.87:8000/movies/${id}`)
                const response = await axios.get(`http://78.141.212.87:8000/movies?start=1&limit=5`)
                set({ movies: await response.data })
                set({ selectedMovie: undefined })
                toast.success("Movie deleted")
            } catch (error) {
                toast.error("Something went wrong")
            }
        }
    }
})
