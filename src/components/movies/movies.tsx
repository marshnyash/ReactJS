import React, { useState } from 'react';
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
  title: string;
  image: string;
  genre: string;
  date: number;
  id: string;
}

const movies: Movie[] = [
  {
    title: "How to train your dragon",
    image: "src/assets/images/how-to-train-your-dragon.jpg",
    genre: "cartoon",
    date: 2019,
    id: "rick001",
  },
  {
    title: "Harry Potter",
    image: "src/assets/images/HP.jpg",
    genre: "cartoon",
    date: 2019,
    id: "rick002",
  },
  {
    title: "Khumba",
    image: "src/assets/images/khumba.jpg",
    genre: "cartoon",
    date: 2019,
    id: "rick003",
  },
  {
    title: "Movie",
    image: "src/assets/images/movie-1.jpg",
    genre: "cartoon",
    date: 2019,
    id: "rick004",
  },
  {
    title: "How to train your dragon",
    image: "src/assets/images/how-to-train-your-dragon.jpg",
    genre: "cartoon",
    date: 2019,
    id: "rick005",
  },
  {
    title: "Harry Potter",
    image: "src/assets/images/HP.jpg",
    genre: "cartoon",
    date: 2019,
    id: "rick006",
  },
  {
    title: "Khumba",
    image: "src/assets/images/khumba.jpg",
    genre: "cartoon",
    date: 2019,
    id: "rick007",
  },
  {
    title: "Movie",
    image: "src/assets/images/movie-1.jpg",
    genre: "cartoon",
    date: 2019,
    id: "rick008",
  },
];

const form: AddEditFormData = {
  gendre: "horror",
  title: "Title 1",
  overview: "Overview 1",
  movieUrl: "movie url 1",
  runTime: "runtime 1",
  releaseDate: "02-09-2020",
};

interface Props {
  className: string;
}

const filter = ["all", "documentary", "comedy", "horror", "crime"];
const sort = ["Date", "Genre", "Title"];
const menuOptions = ["Edit", "Delete"];

const MoviesContainerComponent = ({ className }: Props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formData, setFormData] = useState(form);
  const [isDeleteMovie, setDeleteMovie] = useState(false);

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

  const handleMenu = (data: { option: string }) => {
    data?.option === "Edit"
      ? modalDeleteHandler(false)
      : modalDeleteHandler(true);
    modalHandler();
  };
  return (
    <>
      <section className={className}>
        <Filter filter={filter} sort={sort} />
        <MoviesResults>
          <MoviesResultsNumber>{movies?.length} </MoviesResultsNumber>
          movies found
        </MoviesResults>
        <MoviesWrapper>
          {movies.map((movie) => (
            <MovieCard
              title={movie.title}
              key={movie.id}
              image={movie?.image}
              genre={movie?.genre}
              date={movie?.date}
              id={movie?.id}
              menuOptions={menuOptions}
              onMenuClick={(data) => handleMenu(data)}
            />
          ))}
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
