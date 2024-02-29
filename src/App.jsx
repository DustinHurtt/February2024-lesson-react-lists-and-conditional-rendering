import "./App.css";
import ImprovedMovieList from "./components/ImprovedMovieList";

import MovieList from "./components/MovieList";

import Spinner from "./components/Spinner"; // <-- add
import { useState } from "react"; // <-- add

function App() {
  // Declare a new state variable, which we'll call "isLoading"
  const [isLoading, setIsLoading] = useState(false); // <-- add

  return (
    <>
      {
        isLoading ? 

        <Spinner />

      : 

        <div className="App">
          {/* <MovieList /> */}
          <ImprovedMovieList />
        </div> 

      }
    </>
  );
}

export default App;
