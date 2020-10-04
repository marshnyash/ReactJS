import SearchIcon from '@material-ui/icons/Search';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { createMovie } from '../../redux/actions/movie';
import Logo from '../logo/logo';
import Modal from '../modal/modal';
import ModalAddEditContent from '../modal/modal-add-edit-content';
import MovieDetails from '../movies/movie-details/movie-details';
import { Movie } from '../movies/movies';
import { HeaderAddBtn } from './header-add-btn';
import HeaderSearchBlock from './header-search-block';
import { useStyles } from './header-styles';
import { HeaderTop } from './header-top';

interface Props {
  className?: string;
  movieDetailsId?: string;
  createMovie: (e: any) => void;
  genresOptions: string[];
}

const HeaderComponent = ({
  className,
  movieDetailsId,
  createMovie,
  genresOptions,
}: Props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isMovieDetailsVisible, setIsMovieDetailsVisible] = useState(false);

  useEffect(
    () =>
      movieDetailsId
        ? setIsMovieDetailsVisible(true)
        : setIsMovieDetailsVisible(false),
    [movieDetailsId]
  );

  const handleModalVisibility = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleSearchIconClick = () => {
    setIsMovieDetailsVisible(false);
  };

  const classes = useStyles();

  return (
    <header className={className}>
      <HeaderTop>
        <Logo />
        {isMovieDetailsVisible ? (
          <SearchIcon
            className={classes.searchIconBtn}
            fontSize="large"
            onClick={handleSearchIconClick}
          />
        ) : (
          <HeaderAddBtn onClick={handleModalVisibility}>
            + ADD MOVIE
          </HeaderAddBtn>
        )}
      </HeaderTop>

      {isMovieDetailsVisible ? (
        <MovieDetails id={movieDetailsId}></MovieDetails>
      ) : (
        <HeaderSearchBlock />
      )}

      <Modal
        showModal={isModalVisible}
        closeModal={handleModalVisibility}
        title={"ADD MOVIE"}
      >
        <ModalAddEditContent
          closeModal={handleModalVisibility}
          onModalSubmit={(data) => {
            createMovie(data);
            handleModalVisibility();
          }}
          editableMode={false}
          genresOptions={genresOptions}
        />
      </Modal>
    </header>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createMovie: (data: Movie) => dispatch(createMovie(data)),
});

const Header = styled(HeaderComponent)`
  display: flex;
  flex-direction: column;
  background: url("src/assets/images/header-bg-01.png");
  width: 100%;
  height: 450px;
  background-position: center;
  background-size: cover;
`;

export default connect(null, mapDispatchToProps)(Header);
