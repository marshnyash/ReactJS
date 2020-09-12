import React from 'react';
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

const App = () => (
  <>
    <GlobalBodyStyle/>
      <AppWrapper>
        <ErrorBoundary>
          <Header />
          <MoviesContainer />
        </ErrorBoundary>
        <Footer />
      </AppWrapper>
  </>
);

export default App;

