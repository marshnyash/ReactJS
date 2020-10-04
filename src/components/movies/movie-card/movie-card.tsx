import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { deleteMovieById, editMovie } from '../../../redux/actions/movie';
import Modal from '../../modal/modal';
import ModalAddEditContent from '../../modal/modal-add-edit-content';
import ModalDeleteContent from '../../modal/modal-delete-content';
import MenuList from '../menu/menu';
import { Movie } from '../movies';
import { MovieDescription } from './movie-description';
import { MovieImage } from './movie-image';
import { MovieImageSection } from './movie-image-section';
import { MovieSection } from './movie-section';
import { MovieTitle } from './movie-title';

export enum MenuOptions {
  Edit = "Edit",
  Delete = "Delete",
}

const menuOptions = [MenuOptions.Delete, MenuOptions.Edit];

interface Props extends Movie {
  onMovieCardClick?: (e: any) => void;
  className: string;
  image: string;
  title: string;
  genres: string[];
  release_date: string;
  genresOptions: string[];
  editMovie?: (e: any) => void;
  deleteMovieById?: any;
  movies: Movie[];
}

const MovieCardComponent = ({
  className,
  onMovieCardClick,
  image,
  title,
  genres,
  release_date,
  id,
  genresOptions,
  deleteMovieById,
  editMovie,
  movies,
}: Props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDeleteMovie, setIsDeleteMovie] = useState(false);
  const [clickedCardId, setClickedCardId] = useState(null);

  const [editedMovieData, setEditingMovieData] = useState(null);
  const handleModalVisibility = (e?: Event) => {
    e?.preventDefault();
    setIsModalVisible(!isModalVisible);
  };

  const handleMenuClick = ({ option, id }: any) => {
    option === MenuOptions.Edit
      ? setIsDeleteMovie(option === MenuOptions.Delete)
      : setIsDeleteMovie(option === MenuOptions.Delete);
    setClickedCardId(id);
    setEditingMovieData(movies?.find((el) => el.id === id));
    handleModalVisibility();
  };

  return (
    <section
      className={className}
      onClick={() => {
        onMovieCardClick({ id });
      }}
    >
      <MovieImageSection>
        <MovieImage src={image} alt="movie" />
        <MenuList
          menuOptions={menuOptions}
          onMenuClick={handleMenuClick}
          id={id}
        />
      </MovieImageSection>
      <MovieSection>
        <div>
          <MovieTitle title={title} />
          <MovieDescription genres={genres?.join(", ")} />
        </div>
        <MovieDescription release_date={release_date} />
      </MovieSection>

      <Modal
        showModal={isModalVisible}
        closeModal={handleModalVisibility}
        title={isDeleteMovie ? "DELETE MOVIE" : "EDIT MOVIE"}
      >
        {isDeleteMovie ? (
          <ModalDeleteContent
            onDeleteMovieHandler={() => {
              deleteMovieById(clickedCardId);
              handleModalVisibility();
            }}
          />
        ) : (
          <ModalAddEditContent
            genresOptions={genresOptions}
            onModalSubmit={(data) => {
              handleModalVisibility();
              editMovie(data);
            }}
            formData={editedMovieData}
            editableMode
          />
        )}
      </Modal>
    </section>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

const mapDispatchToProps = (dispatch) => ({
  editMovie: (data: Movie) => dispatch(editMovie(data)),
  deleteMovieById: (id: string) => dispatch(deleteMovieById(id)),
});

const MovieCard = styled(MovieCardComponent)`
  cursor: pointer;
`;

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
