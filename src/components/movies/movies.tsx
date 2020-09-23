import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import { MoviesWrapper } from './movies-wrapper';

import Modal from '../modal/modal';
import ModalAddEditContent, { AddEditFormData } from '../modal/modal-add-edit-content';
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

const form: AddEditFormData = {
  genre: "horror",
  title: "Title 1",
  overview: "Overview 1",
  movieUrl: "movie url 1",
  runTime: "runtime 1",
  releaseDate: "02-09-2020",
};

interface Props {
  className: string;
  onMovieCardClick?: (e: any) => void;
}

const filters = ["All", "Documentary", "Comedy", "Horror", "Crime"];
const sort = ["Date", "Genre", "Title"];
const menuOptions = ["Edit", "Delete"];

const MoviesContainerComponent = ({ className, onMovieCardClick }: Props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formData, setFormData] = useState(form);
  const [isDeleteMovie, setDeleteMovie] = useState(false);
  const [filteredValue, setFilteredValue] = useState(null);
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("result", result);
          setMoviesList(result.data);
        },
        (error) => {
          console.log("error", error);
        }
      );
  }, []);

  const modalHandler = (e?: Event) => {
    e?.preventDefault();
    setIsModalVisible(!isModalVisible);
  };

  const modalDeleteHandler = (val: boolean) => {
    setDeleteMovie(val);
  };

  const handleFormData = (data: AddEditFormData) => {
    setFormData(data);
  };

  const handleMenu = ({ option }: any) => {
    option === "Edit" ? modalDeleteHandler(false) : modalDeleteHandler(true);
    modalHandler();
  };

  const filterMovies = useCallback((value) => {
    setFilteredValue(value?.filter);
  }, []);

  const renderMoviesList = (movies: any[]) =>
    movies.map(({ title, id, poster_path, genre, release_date }) => {
      return (
        <MovieCard
          title={title}
          key={id}
          image={poster_path}
          genre={genre}
          releaseDate={release_date}
          id={id}
          menuOptions={menuOptions}
          onMenuClick={(data) => handleMenu(data)}
          onMovieCardClick={onMovieCardClick}
        />
      );
    });

  const updateMovies = () => {
    const filteredMovie = [];
    moviesList?.filter((e) => {
      e?.genres.filter((el) => {
        if (el?.toLowerCase() === filteredValue?.toLowerCase()) {
          filteredMovie.push(e);
        }
      });
    });
    return filteredMovie;
  };

  return (
    <>
      <section className={className}>
        <Filter filters={filters} sort={sort} onFilterChange={filterMovies} />
        <MoviesResults>
          <MoviesResultsNumber>
            {
              renderMoviesList(
                filteredValue === "All" || !filteredValue
                  ? moviesList
                  : updateMovies()
              )?.length
            }{" "}
          </MoviesResultsNumber>
          movies found
        </MoviesResults>
        <MoviesWrapper>
          {renderMoviesList(
            filteredValue === "All" || !filteredValue
              ? moviesList
              : updateMovies()
          )}
        </MoviesWrapper>
      </section>

      <Modal
        showModal={isModalVisible}
        closeModal={modalHandler}
        title={isDeleteMovie ? "DELETE MOVIE" : "EDIT MOVIE"}
      >
        {isDeleteMovie ? (
          <ModalDeleteContent closeModal={modalHandler} />
        ) : (
          <ModalAddEditContent
            closeModal={modalHandler}
            onModalClick={(data) => handleFormData(data)}
            formData={formData}
            editableMode={true}
          />
        )}
      </Modal>
    </>
  );
};

const MoviesContainer = styled(MoviesContainerComponent)`
  padding: 10px 40px 40px;
  background: #232323;
`;
export default MoviesContainer;
