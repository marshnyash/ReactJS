import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { RouteProps } from 'react-router';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { createMovie, searchMovie } from '../../redux/actions/movie';
import Logo from '../logo/logo';
import Modal from '../modal/modal';
import ModalAddEditContent from '../modal/modal-add-edit-content';
import { Movie } from '../movies/movies';
import { HeaderAddBtn } from './header-add-btn';
import { HeaderSearchBlock } from './header-search-block';
import { HeaderSearchBtn } from './header-search-btn';
import { HeaderSearchInput } from './header-search-input';
import { HeaderSearchLine } from './header-search-line';
import { useStyles } from './header-styles';
import { HeaderTitle } from './header-title';
import { HeaderTop } from './header-top';

interface Props extends RouteProps {
  className?: string;
  createMovie?: (e: any) => void;
  searchMovie?: (e: any) => void;
  genresOptions?: string[];
}

const MovieSearchHeaderComponent = ({
  className,
  createMovie,
  searchMovie,
  genresOptions,
}: Props) => {
  let history = useHistory();
  let match = useParams();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState(match?.searchQuery);

  const handleModalVisibility = () => {
    setIsModalVisible(!isModalVisible);
  };

  const classes = useStyles();

  const handleSearch = () => {
    searchMovie(inputValue);
    history.push(inputValue ? `/search/${inputValue}` : `/`);
  };
  return (
    <header className={className}>
      <HeaderTop>
        <Logo />
        <HeaderAddBtn onClick={handleModalVisibility}>+ ADD MOVIE</HeaderAddBtn>
      </HeaderTop>
      <HeaderSearchBlock>
        <HeaderTitle>FIND YOUR MOVIE</HeaderTitle>
        <HeaderSearchLine>
          <HeaderSearchInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="What do you want to watch?"
          />
          <HeaderSearchBtn onClick={handleSearch}>SEARCH</HeaderSearchBtn>
        </HeaderSearchLine>
      </HeaderSearchBlock>

      <Modal
        showModal={isModalVisible}
        closeModal={handleModalVisibility}
        title={"ADD MOVIE"}
      >
        <ModalAddEditContent
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

const mapStateToProps = (state) => ({
  search: state.movies.search,
});

const mapDispatchToProps = (dispatch) => ({
  createMovie: (data: Movie) => dispatch(createMovie(data)),
  searchMovie: (data: string) => dispatch(searchMovie(data)),
});

const MovieSearchHeader = styled(MovieSearchHeaderComponent)`
  display: flex;
  flex-direction: column;
  background: url("/src/assets/images/header-bg-01.png");
  width: 100%;
  height: 450px;
  background-position: center;
  background-size: cover;
`;

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearchHeader);
