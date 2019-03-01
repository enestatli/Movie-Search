import React from "react";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //styles: { display: "none" },
      overviews: this.props.movie.overview,
      itemsShow: 210,
      expanded: false
    };
    //console.log(this.props)
    this.showMore = this.showMore.bind(this);
  }

  /*showMore() {
    //console.log("work?")
    const lengthOverview = this.props.movie.overview.length;
    lengthOverview >= 220
      ? this.setState({ styles: { display: "inline" } })
      : null;
  }*/

  showMore() {
    //console.log(this.state.overviews.length);
    this.state.itemsShow === 210
      ? this.setState({
          itemsShow: this.state.overviews.length,
          expanded: true
        })
      : this.setState({ itemsShow: 210, expanded: false });
  }

  render() {
    //var styles= {}
    //this.props.movie.overview.length >= 220 ? styles = { display: "none" } : null;
    //var x = this.state.overviews.slice(0, 100)
    //console.log(x)
    //console.log([this.state.overviews.slice(0, 100)])
    //console.log(this.props);
    const watchMovieUrl = this.props.movie.title
      .toLowerCase()
      .split(" ")
      .join("-");
    //console.log(watchMovieUrl); don't uncomment this!!!

    return (
      <div className="movie-row">
        <img
          alt="movie_poster"
          src={`https://image.tmdb.org/t/p/w185/${
            this.props.movie.poster_path
          }`}
        />
        <div className="text-area">
          <h3>{this.props.movie.title}</h3>
          <p /*style={this.state.styles}*/>
            {[this.state.overviews.slice(0, this.state.itemsShow)]}
            <a onClick={this.showMore}>
              {this.state.expanded ? (
                <span>Show less</span>
              ) : (
                <span>...Show more</span>
              )}
            </a>
          </p>
          <div className="extras">
            <a
              href={`https://720p-izle.com/izle/altyazi/${watchMovieUrl}.html`}
              target="_blank"
            >
              Play Movie{" "}
            </a>
            <a
              href={`https://www.themoviedb.org/movie/${this.props.movie.id}`}
              target="_blank"
            >
              Click Me
            </a>
            <span>
              {" "}
              {this.props.movie.adult ? (
                <span style={{ textDecorationLine: "line-through" }}>
                  Adult
                </span>
              ) : (
                <span>Adult</span>
              )}
            </span>
            <span> {this.props.movie.popularity}</span>
            <span> {this.props.movie.original_language.toUpperCase()} </span>
          </div>
          {/*<input type="button" value="Show More" onClick={this.showMore} />*/}
        </div>
      </div>
    );
  }
}

export default Main;
