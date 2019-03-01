import React from "react";
import Main from "./Main";

class MovieSearcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
    //this.searchMovie();
    this.handleChange = this.handleChange.bind(this);
    //this.showMore = this.showMore.bind(this)
  }

  componentDidMount() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        //console.log(data.results[0].title)
        const movies = data.results;
        var movieRows = [];
        //console.log(movies[0].title);
        //const onlyTitle = movies.map(m => m.title);
        movies.forEach(movie => {
          const movieRow = <Main key={movie.id} movie={movie} />;
          movieRows.push(movieRow);
        });
        this.setState({
          rows: movieRows
        });
      });
  }

  componentDidUpdate() {
    const urlX = `https://api.themoviedb.org/3/search/movie?api_key=e3f837392d787d0037964a5dfebfba90&query=${
      this.state.searchTerm
    }`;
    //console.log(urlX)
    fetch(urlX)
      .then(response => response.json())
      .then(data => {
        //console.log(data.results[0].title)
        const movies = data.results;
        var movieRows = [];
        //console.log(movies[0].title);
        //const onlyTitle = movies.map(m => m.title);
        movies.forEach(movie => {
          const movieRow = <Main key={movie.id} movie={movie} />;
          movieRows.push(movieRow);
        });
        this.setState({
          rows: movieRows
        });
      });
  }

  /*searchMovie(searchTerm) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=e3f837392d787d0037964a5dfebfba90&query=${searchTerm}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const movies = data.results;
        var movieRows = [];
        movies.forEach(movie => {
          const movieRow = <Main key={movie.id} movie={movie} />;
          movieRows.push(movieRow);
        });
      });
  }*/

  handleChange(event) {
    //console.log(event.target.value)
    //event.preventDefault();
    //const searchTerm = event.target.value;
    //this.searchMovie(searchTerm);
    this.setState({ searchTerm: event.target.value });
    console.log(event.target.value);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          name="search"
          placeholder="Enter the movie"
          onChange={this.handleChange}
        />
        {this.state.rows}
      </div>
    );
  }
}

export default MovieSearcher;
