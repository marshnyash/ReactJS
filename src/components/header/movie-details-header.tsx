import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { connect } from 'react-redux';
import { RouteProps } from 'react-router';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

import Logo from '../logo/logo';
import MovieDetails from '../movies/movie-details/movie-details';
import { useStyles } from './header-styles';
import { HeaderTop } from './header-top';

interface Props extends RouteProps {
  className?: string;
  search: string;
}

const MovieDetailsHeaderComponent = ({ className, search }: Props) => {
  const classes = useStyles();
  let history = useHistory();
  let match = useParams();
  return (
    <header className={className}>
      <HeaderTop>
        <Logo />
        <SearchIcon
          className={classes.searchIconBtn}
          fontSize="large"
          onClick={() => history.push(search ? `/search/${search}` : `/`)}
        />
      </HeaderTop>
      <MovieDetails id={match?.id}></MovieDetails>
    </header>
  );
};

const mapStateToProps = (state) => ({
  search: state.movies.search,
});

const MovieDetailsHeader = styled(MovieDetailsHeaderComponent)`
  display: flex;
  flex-direction: column;
  background: url("../src/assets/images/header-bg-01.png");
  width: 100%;
  height: 450px;
  background-position: center;
  background-size: cover;
`;

export default connect(mapStateToProps, null)(MovieDetailsHeader);
