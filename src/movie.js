import React from "react";
import PropTypes from "prop-types";
import "./movie.css";

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title} </h3>
        <h5 className="movie__year">{year}</h5>

        <ul className="movie__genres">
          {genres.map((genres, index) => (
            <li key={index} className="genres__genre">
              {genres}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{summary.slice(0, 140)}...</p>
      </div>
    </div>
  );
}
//위와 같이 Movie라는 component를 생성하면 사용할 수 있습니다.
// props는 아래 propsTypes를 통해서 정의할 수 있습니다.
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,

  //propsTypes는 number, string, bool, func, node등 다양하게 존재합니다.
};

export default Movie;
//export해줘야 다른 js에서 Movie라는 component를 사용할 수 있습니다.
