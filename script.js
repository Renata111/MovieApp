//"use strict"
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?')

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

const firstFilm = prompt('Один из последних просмотренных фильмов?', ''),
    evalFirstFilm = prompt('На сколько оцените его', ''),
    secondFilm = prompt('Один из последних просмотренных фильмов?', ''),
    evalSecondFilm = prompt('На сколько оцените его', '')

personalMovieDB.movies[firstFilm] = evalFirstFilm
personalMovieDB.movies[secondFilm] = evalSecondFilm

console.log(personalMovieDB)