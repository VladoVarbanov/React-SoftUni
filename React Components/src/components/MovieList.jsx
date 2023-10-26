import Heading from "./Headinfg.jsx";
import Movie from "./Movie.jsx";

export default function MovieList(props) {
  return (
    <div className="movie-list">
      <Heading>Some heading here</Heading>
      <h2>{props.headingText}</h2>
      <ul>
        <Movie data={props.movies[0]} />
        <Movie data={props.movies[1]} />
        <Movie data={props.movies[2]} />
      </ul>
    </div>
  );
}
