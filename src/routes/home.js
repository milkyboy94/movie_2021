import React from "react";
import axios from "axios";
import Movie from "../component/movie";
import "./home.css";

class home extends React.Component {
  // function이 아니므로 return이 없다. 따라서 render method를 사용
  //state를 이용하기위해서 className component를 사용합니다.
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    //ES6에서의 기능으로 오브젝트 안에 있는 값을 불러올 수 있습니다.
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };
  //async await을 하는 것은 javascript에게 getMovies function에게 조금 시간이
  //필요하고 우리는 그걸 기다려야만 하다는 것을 말한다.
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
                //위와 같이 object를 풀어줄 때 map함수를 사용하고, 또, jsx에서는 props를 통해서 값을 전달합니다. key는 표현되지 않지만 필수props입니다.
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}
export default home;
