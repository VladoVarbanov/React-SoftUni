import MovieList from "./components/MovieList.jsx";
import movies from "./assets/movies.js";
import "./App.css";
import Counter from "./components/Counter.jsx";
import Timer from "./components/Timer.jsx";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>My first Dynamic React Application</h1>
        <Timer startTime={5} />
        <Counter />
        <MovieList movies={movies} headingText="Movie List" />
      </div>
    </>
  );
}

export default App;
