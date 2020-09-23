import SearchIcon from '@material-ui/icons/Search';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Logo from '../logo/logo';
import Modal from '../modal/modal';
import ModalAddEditContent, { AddEditFormData } from '../modal/modal-add-edit-content';
import MovieDetails from '../movies/movie-details/movie-details';
import { HeaderAddBtn } from './header-add-btn';
import HeaderSearchBlock from './header-search-block';
import { useStyles } from './header-styles';
import { HeaderTop } from './header-top';

interface Props {
  className?: string;
  movieDetailsId?: string;
}

const HeaderComponent = ({ className, movieDetailsId }: Props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isMovieDetailsVisible, setIsMovieDetailsVisible] = useState(false);

  useEffect(
    () =>
      movieDetailsId
        ? setIsMovieDetailsVisible(true)
        : setIsMovieDetailsVisible(false),
    [movieDetailsId]
  );

  const modalHandler = (e: Event) => {
    e.preventDefault();
    setIsModalVisible(!isModalVisible);
  };

  const handleSearchIconClick = () => {
    setIsMovieDetailsVisible(false);
  };

  const handleFormData = (data: AddEditFormData) => {
    console.log("data", data);
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
          <HeaderAddBtn onClick={modalHandler}>+ ADD MOVIE</HeaderAddBtn>
        )}
      </HeaderTop>

      {isMovieDetailsVisible ? (
        <MovieDetails id={movieDetailsId}></MovieDetails>
      ) : (
        <HeaderSearchBlock />
      )}

      <Modal
        showModal={isModalVisible}
        closeModal={modalHandler}
        title={"ADD MOVIE"}
      >
        <ModalAddEditContent
          closeModal={modalHandler}
          onModalClick={(data) => handleFormData(data)}
          editableMode={false}
        />
      </Modal>
    </header>
  );
};

const Header = styled(HeaderComponent)`
  display: flex;
  flex-direction: column;
  background: url("src/assets/images/header-bg-01.png");
  width: 100%;
  height: 450px;
  background-position: center;
  background-size: cover;
`;

export default Header;
