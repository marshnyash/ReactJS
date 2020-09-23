import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { MoviesWrapper } from './movies-wrapper';

import { deleteMovieById, editMovie, fetchMovies, updateFilters, updateSorting } from '../../redux/actions/movie';
import Modal from '../modal/modal';
import ModalAddEditContent from '../modal/modal-add-edit-content';
import ModalDeleteContent from '../modal/modal-delete-content';
import Filter from './filter/filter';
import MovieCard from './movie-card/movie-card';
import { MoviesResults } from './movies-results';
import { MoviesResultsNumber } from './movies-results-number';

export interface Movie {
  budget: number;
  genres: string[];
  id: string;
  overview: string;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  tagline: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

interface Props {
  className: string;
  fetchMovies: any;
  movies: Movie[];
  onMovieCardClick?: (e: any) => void;
  editMovie?: (e: any) => void;
  updateFilters: any;
  updateSorting: any;
  deleteMovieById: any;
  genresOptions: string[];
  sorting: string;
}

export enum Filters {
  All = "All",
  Documentary = "Documentary",
  Comedy = "Comedy",
  Horror = "Horror",
  Crime = "Crime",
}

export enum Sorting {
  release_date = "release_date",
  title = "title",
  genres = "genres",
}

export enum MenuOptions {
  Edit = "Edit",
  Delete = "Delete",
}

const filters = [
  Filters.All,
  Filters.Documentary,
  Filters.Comedy,
  Filters.Crime,
  Filters.Horror,
];
const sort = [Sorting.release_date, Sorting.genres, Sorting.title];
const menuOptions = [MenuOptions.Delete, MenuOptions.Edit];

const MoviesContainerComponent = ({
  className,
  onMovieCardClick,
  fetchMovies,
  movies,
  updateFilters,
  updateSorting,
  deleteMovieById,
  editMovie,
  genresOptions,
  sorting,
}: Props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDeleteMovie, setIsDeleteMovie] = useState(false);
  const [clickedCardId, setClickedCardId] = useState(null);
  const [editedMovieData, setEditingMovieData] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleModalVisibility = (e?: Event) => {
    e?.preventDefault();
    setIsModalVisible(!isModalVisible);
  };

  const handleMenuClick = ({ option, id }: any) => {
    // e.stopPropagation();
    option === MenuOptions.Edit
      ? setIsDeleteMovie(option === MenuOptions.Delete)
      : setIsDeleteMovie(option === MenuOptions.Delete);
    setClickedCardId(id);
    setEditingMovieData(movies.find((el) => el.id === id));
    handleModalVisibility();
  };

  const handleFilterMovies = useCallback((filter) => {
    updateFilters(filter);
  }, []);

  return (
    <>
      <section className={className}>
        <Filter
          filters={filters}
          sort={sort}
          sortedValue={sorting}
          onFilterChange={(filter: string) => handleFilterMovies(filter)}
          onSortingChange={(sorting: string) => updateSorting(sorting)}
        />
        <MoviesResults>
          <MoviesResultsNumber moviesCount={movies?.length} />
          &nbsp;movies found
        </MoviesResults>
        <MoviesWrapper>
          {movies?.map(({ title, id, poster_path, genres, release_date }) => (
            <MovieCard
              title={title}
              key={id}
              image={poster_path}
              genres={genres}
              release_date={release_date}
              id={id}
              menuOptions={menuOptions}
              onMenuClick={handleMenuClick}
              onMovieCardClick={onMovieCardClick}
            />
          ))}
        </MoviesWrapper>
      </section>

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
            closeModal={handleModalVisibility}
            onModalSubmit={(data) => {
              handleModalVisibility();
              editMovie(data);
            }}
            formData={editedMovieData}
            editableMode
          />
        )}
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  loading: state.movies.loading,
  filter: state.movies.filter,
  sorting: state.movies.sorting,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: () => dispatch(fetchMovies()),
  editMovie: (data: Movie) => dispatch(editMovie(data)),
  deleteMovieById: (id: string) => dispatch(deleteMovieById(id)),
  updateFilters: (filter: string) => dispatch(updateFilters(filter)),
  updateSorting: (sorting: string) => dispatch(updateSorting(sorting)),
});

const MoviesContainer = styled(MoviesContainerComponent)`
  padding: 10px 40px 40px;
  background: #232323;
`;
export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
