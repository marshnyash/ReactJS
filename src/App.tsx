import React, { useState } from 'react';
import styled from 'styled-components';

import Footer from './components/footer/footer';
import Header from './components/header/header';
import MoviesContainer from './components/movies/movies';
import ErrorBoundary from './shared/error-boundary/error-boundary';
import { GlobalBodyStyle } from './styles/main-styles';

const AppWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

export const GENRES_OPTIONS = [
  "Documentary",
  "Animation",
  "Adventure",
  "Family",
  "Comedy",
  "Science Fiction",
  "Drama",
  "Romance",
];

const App = () => {
  const [movieId, setMovieId] = useState(null);

  const handleMovieCardClick = (movieIdDetails: string) =>
    setMovieId(movieIdDetails);

  return (
    <>
      <GlobalBodyStyle />
      <AppWrapper>
        <ErrorBoundary>
          <Header movieDetailsId={movieId} genresOptions={GENRES_OPTIONS} />
          <MoviesContainer
            onMovieCardClick={handleMovieCardClick}
            genresOptions={GENRES_OPTIONS}
          />
        </ErrorBoundary>
        <Footer />
      </AppWrapper>
    </>
  );
};
export default App;
