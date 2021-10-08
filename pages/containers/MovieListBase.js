import React, { useContext, useMemo } from "react";
import MovieCard from "../components/MovieCard";
import MovieGrid from "../components/MovieGrid";

import { getImgUrl } from "../../redux/utils";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavoriteAction } from "../../redux/actions/favoriteInfoActions";

const MovieListBase = ({ movieList }) => {
  console.log("[MovieListBase] movieList", movieList);
  const dispatch = useDispatch();

  const handleToggleFavorite = (id) => {};
  return (
    <MovieGrid>
      {movieList.map((movie) => {
        return <MovieCard />;
      })}
    </MovieGrid>
  );
};

export default MovieListBase;
