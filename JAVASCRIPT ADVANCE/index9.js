const favouriteFilm={
    title:"Top Gun",
    year:"1986",
    genre:"action",
    star:"Tom Cruise",
    director:"Tony Scott"
}

// Destructuring
const { title, year, genre, star, director } = favouriteFilm;

// Without destructuring (old way)
// const title = favouriteFilm.title
// const year = favouriteFilm.year
// const genre = favouriteFilm.genre
// const star = favouriteFilm.star
// const director = favouriteFilm.director

console.log(`My favourite film is ${title} starring ${star}. It's a ${genre} directed by ${director} and released in ${year}.`);