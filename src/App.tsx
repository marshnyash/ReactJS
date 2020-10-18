import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Footer from './components/footer/footer';
import MovieDetailsHeader from './components/header/movie-details-header';
import MovieSearchHeader from './components/header/movie-search-header';
import MoviesContainer from './components/movies/movies';
import NotFound from './components/not-found/not-found';
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

const App = () => (
  <Router>
    <GlobalBodyStyle />
    <AppWrapper>
      <ErrorBoundary>
        <Switch>
          <Route path={["/", "/search/:searchQuery"]} exact>
            <MovieSearchHeader genresOptions={GENRES_OPTIONS} />
            <MoviesContainer genresOptions={GENRES_OPTIONS} />
          </Route>
          <Route path="/movie/:id">
            <MovieDetailsHeader genresOptions={GENRES_OPTIONS} />
            <MoviesContainer genresOptions={GENRES_OPTIONS} />
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
      </ErrorBoundary>
      <Footer />
    </AppWrapper>
  </Router>
);
export default App;
