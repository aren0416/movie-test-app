import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import { Link } from "react-router-dom";

const Movie = ({ id, title, year, summary, genres, poster }) => {
  return (
    <Link
      to={{
        pathname: `/movie-detail${id}`,
        state: {
          title,
          year,
          summary,
          genres,
          poster,
        },
      }}
    >
      <div className="movie">
        <img src={poster} alt={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul>
            {genres.map((genres, index) => (
              <li key={index}>{genres}</li>
            ))}
          </ul>
          <p className="movie__sumary">{summary.slice(0, 140) + "..."}</p>
        </div>
      </div>
    </Link>
  );
};

Movie.prototype = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
