import React from 'react';
import styled from 'styled-components';

import Filter from './filter/filter';
import MovieCard from './movie-card/movie-card';

interface Movie {
  title: string;
  image: string;
  genre: string;
  date: number;
  id: string;
}

const movies: Movie[] = [
  {
    title: "How to train your dragon",
    image: "src/assets/images/how-to-train-your-dragon.jpg",
    genre: "cartoon",
    date: 2019,
    id: "rick001",
  },
  {
    title: "Harry Potter",
    image: "src/assets/images/HP.jpg",
    genre: "cartoon",
    date: 2019,
    id: "rick002",
  },
  {
    title: "Khumba",
    image: "src/assets/images/khumba.jpg",
    genre: "cartoon",
    date: 2019,
    id: "rick003",
  },
  {
    title: "Movie",
    image: "src/assets/images/movie-1.jpg",
    genre: "cartoon",
    date: 2019,
    id: "rick004",
  },
  {
    title: "How to train your dragon",
    image: "src/assets/images/how-to-train-your-dragon.jpg",
    genre: "cartoon",
    date: 2019,
    id: "rick005",
  },
  {
    title: "Harry Potter",
    image: "src/assets/images/HP.jpg",
    genre: "cartoon",
    date: 2019,
    id: "rick006",
  },
  {
    title: "Khumba",
    image: "src/assets/images/khumba.jpg",
    genre: "cartoon",
    date: 2019,
    id: "rick007",
  },
  {
    title: "Movie",
    image: "src/assets/images/movie-1.jpg",
    genre: "cartoon",
    date: 2019,
    id: "rick008",
  },
];

const Wrapper = styled.section`
  padding: 10px 40px 40px;
  background: #232323;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;

const Results = styled.div`
  color: #ffffff;
  font-size: 18px;
  margin-bottom: 20px;
`;
const ResultsNumber = styled.span`
  font-size: 22px;
  font-weight: bold;
`;

// const FilterBlock = styled.div``;
// const FilterItem = styled.div``;
// const Results = styled.div``;
// const Results = styled.div``;
// const Results = styled.div``;

const Movies = () => (
  <Wrapper>
    <Filter />
    <Results>
      <ResultsNumber>{movies?.length} </ResultsNumber>
      movies found
    </Results>
    <Container>
      {movies.map((movie) => (
        <MovieCard
          title={movie.title}
          key={movie.id}
          image={movie?.image}
          genre={movie?.genre}
          date={movie?.date}
        />
      ))}
    </Container>
  </Wrapper>
);

export default Movies;
