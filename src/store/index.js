import axios from "axios"
import create from 'zustand'

axios.defaults.headers.get['Accept'] = 'application/json'

export const [useStore] = create(set => ({
    movies: [],
    selectedMovie: undefined,
    getMovies: async url => {
        const response = await axios.get(url)
        set({ movies: await response.data.items })
    },
    setSelectedMovie: movie => {
        set({ selectedMovie: movie })
    }
}))