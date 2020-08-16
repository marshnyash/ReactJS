import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import './styles/main.scss';

import Footer from './components/footer/footer';
import Header from './components/header/header';
import Movies from './components/movies/movies';
import ErrorBoundary from './shared/error-boundary/error-boundary';

const Wrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

const rootElement = document.getElementById("app");
ReactDOM.render(
  <Wrapper>
    <ErrorBoundary>
      <Header />
    </ErrorBoundary>
    <ErrorBoundary>
      <Movies />
    </ErrorBoundary>
    <Footer />
  </Wrapper>,
  rootElement
);
