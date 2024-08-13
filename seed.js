const mongoose = require('mongoose');

const Product = require('./models/Product');


Array = {
  Search: [
    {
      Title: "The Avengers",
      Year: "2012",
      imdbID: "tt0848228",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Endgame",
      Year: "2019",
      imdbID: "tt4154796",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Infinity War",
      Year: "2018",
      imdbID: "tt4154756",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Age of Ultron",
      Year: "2015",
      imdbID: "tt2395427",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    },
    {
      Title: "The Avengers",
      Year: "1998",
      imdbID: "tt0118661",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZTQ4NmIzMTktOTdjOC00NzE4LWIzNTgtODkwNzM5ZjUzZDkxXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_SX300.jpg",
    },
    {
      Title: "The Avengers: Earth's Mightiest Heroes",
      Year: "2010–2012",
      imdbID: "tt1626038",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYzA4ZjVhYzctZmI0NC00ZmIxLWFmYTgtOGIxMDYxODhmMGQ2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg",
    },
    {
      Title: "Ultimate Avengers: The Movie",
      Year: "2006",
      imdbID: "tt0491703",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYyMjk0NTMwMl5BMl5BanBnXkFtZTgwNzY0NjAwNzE@._V1_SX300.jpg",
    },
    {
      Title: "Ultimate Avengers II",
      Year: "2006",
      imdbID: "tt0803093",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZjI3MTI5ZTYtZmNmNy00OGZmLTlhNWMtNjZiYmYzNDhlOGRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "The Avengers",
      Year: "1961–1969",
      imdbID: "tt0054518",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZWQwZTdjMDUtNTY1YS00MDI0LWFkNjYtZDA4MDdmZjdlMDRlXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
    },
    {
      Title: "Avengers Assemble",
      Year: "2012–2019",
      imdbID: "tt2455546",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTY0NTUyMDQwOV5BMl5BanBnXkFtZTgwNjAwMTA0MDE@._V1_SX300.jpg",
    },
    {
      Title: "Avatar",
      Year: "2009",
      imdbID: "tt0499549",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
    },
    {
      Title: "Avatar: The Way of Water",
      Year: "2022",
      imdbID: "tt1630029",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_SX300.jpg",
    },
    {
      Title: "Avatar: The Last Airbender",
      Year: "2005–2008",
      imdbID: "tt0417299",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BODc5YTBhMTItMjhkNi00ZTIxLWI0YjAtNTZmOTY0YjRlZGQ0XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_SX300.jpg",
    },
    {
      Title: "Avatar: The Last Airbender",
      Year: "2024–",
      imdbID: "tt9018736",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTViNTY2MjMtYmUwOC00ZGYxLThjOWEtYjNjZWU3MTYwYzZmXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_SX300.jpg",
    },
    {
      Title: "The King's Avatar",
      Year: "2019",
      imdbID: "tt10732794",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMWU1NDdhNmUtYzk4Ni00MzgxLTk3MDUtMWNiNWQ3ODdhZjZiXkEyXkFqcGdeQXVyMjI2ODE1NTA@._V1_SX300.jpg",
    },
    {
      Title: "The King's Avatar",
      Year: "2017–",
      imdbID: "tt6859260",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZjIyMjE5ZDYtMTQxNC00NTEzLTgwYzYtMmM0NDg3OWFlYWM5XkEyXkFqcGdeQXVyNjMxNzQ2NTQ@._V1_SX300.jpg",
    },
    {
      Title: "Dasham Avatar",
      Year: "2023",
      imdbID: "tt27561990",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYzE3NTNjNTgtY2MzOC00MDgwLTk0MjktNzVjNmQzMjc3YTQ3XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_SX300.jpg",
    },
    {
      Title: "Avatar: The Last Airbender - The Legend of Aang",
      Year: "2006",
      imdbID: "tt0959552",
      Type: "game",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNjUwNzA5Nzc4N15BMl5BanBnXkFtZTgwNjM1ODY4MDE@._V1_SX300.jpg",
    },
    {
      Title: "Avatar: The Game",
      Year: "2009",
      imdbID: "tt1517155",
      Type: "game",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYxODI2OTI4MF5BMl5BanBnXkFtZTcwNjI1NzMwMw@@._V1_SX300.jpg",
    },
    {
      Title: "Avatar: The Last Airbender - The Legend So Far",
      Year: "2005",
      imdbID: "tt1605838",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZGQ1ZTNmNzItNGYyMC00MDk2LWJiZDAtZTkwZDFlNWJlYTVjXkEyXkFqcGdeQXVyODUxNDExNTg@._V1_SX300.jpg",
    },
    {
      Title: "Inception",
      Year: "2010",
      imdbID: "tt1375666",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    },
    {
      Title: "Inception: The Cobol Job",
      Year: "2010",
      imdbID: "tt5295894",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjE0NGIwM2EtZjQxZi00ZTE5LWExN2MtNDBlMjY1ZmZkYjU3XkEyXkFqcGdeQXVyNjMwNzk3Mjk@._V1_SX300.jpg",
    },
    {
      Title: "Inception: Jump Right Into the Action",
      Year: "2010",
      imdbID: "tt5295990",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZGFjOTRiYjgtYjEzMS00ZjQ2LTkzY2YtOGQ0NDI2NTVjOGFmXkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_SX300.jpg",
    },
    {
      Title: "The Crack: Inception",
      Year: "2019",
      imdbID: "tt6793710",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZTU1M2U4OWUtZTQ5OS00OWM1LTljN2EtMWJmZDgxNzUwZGNkXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_SX300.jpg",
    },
    {
      Title: "Inception: Motion Comics",
      Year: "2010–",
      imdbID: "tt1790736",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGRkYzkzZmEtY2YwYi00ZTlmLTgyMTctODE0NTNhNTVkZGIxXkEyXkFqcGdeQXVyNjE4MDMwMjk@._V1_SX300.jpg",
    },
    {
      Title: "Inception",
      Year: "2014",
      imdbID: "tt7321322",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYWJmYWJmNWMtZTBmNy00M2MzLTg5ZWEtOGU5ZWRiYTE0ZjVmXkEyXkFqcGdeQXVyNzkyOTM2MjE@._V1_SX300.jpg",
    },
    {
      Title: "Madness Inception",
      Year: "2022",
      imdbID: "tt29258696",
      Type: "movie",
      Poster: "N/A",
    },
    {
      Title: "Inception: 4Movie Premiere Special",
      Year: "2010",
      imdbID: "tt1686778",
      Type: "movie",
      Poster: "N/A",
    },
    {
      Title: "WWA: The Inception",
      Year: "2001",
      imdbID: "tt0311992",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNTEyNGJjMTMtZjZhZC00ODFkLWIyYzktN2JjMTcwMmY5MDJlXkEyXkFqcGdeQXVyNDkwMzY5NjQ@._V1_SX300.jpg",
    },
    {
      Title: "Cyberalien: Inception",
      Year: "2017",
      imdbID: "tt7926130",
      Type: "movie",
      Poster: "N/A",
    },
  ],
  totalResults: "35",
  Response: "True",
};
