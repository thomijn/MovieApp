export const topThree = (movies) => {
    let values = []
    movies.map(movie => {
        return values.push(parseFloat(movie.rating))
    })
    return values
}