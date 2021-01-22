import React, { Component } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends Component {
  state = {
    loading: true,
    movies: [],
  };

  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json"
    );
    console.log(movies);
    this.setState({
      movies,
      loading: false,
    });
  };

  render() {
    const { loading, movies } = this.state;

    return (
      <section className="container">
        {loading ? (
          <div className="loader">
            <span className="Loader_text">로딩중...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                year={movie.year}
                summary={movie.summary}
                genres={movie.genres}
                poster={movie.medium_cover_image}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
