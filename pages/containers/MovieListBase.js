import React, { useContext, useMemo } from "react";
import MovieCard from "../components/MovieCard";
import MovieGrid from "../components/MovieGrid";

import { getImgUrl } from "../../redux/utils";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavoriteAction } from "../../redux/actions/favoriteInfoActions";

const MovieListBase = ({ movieList }) => {
  const dispatch = useDispatch();

  const handleToggleFavorite = (id) => {};
  return (
    <MovieGrid>
      {movieList.map((movie) => {
        return (
          <MovieCard
            key={movie.id}
            // id={}
            // imgSrc={}
            // title={}
            // rating={}
            // myRating={}
            // favorite={}
            // onToggleFavorite={}
          />
        );
      })}
    </MovieGrid>
  );
};

export default MovieListBase;
