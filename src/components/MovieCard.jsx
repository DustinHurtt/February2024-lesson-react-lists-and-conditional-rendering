
const MovieCard = ({ movie, deleteMovie }) => {

    const generateScoreLabel = (score) => {
        if (score > 9) {
          return <span className="green">9+</span>;
        } else if (score < 7) {
          return <span className="red">{score}</span>;
        } else {
          return <span className="black">{score}</span>;
        }
      }

  return (
    <div className="MovieCard">
      <h2>{movie.title}</h2>
      <p>Director: {movie.director}</p>
      <p>Oscar: {movie.hasOscars ? <span>🏆</span> : <span>❌</span>}</p>

      {/* {movie.hasOscars && <p>Got the Oscar Award! </p>}
      {!movie.hasOscars && <p>Great movie but no Oscars! </p>} */}

      {movie.hasOscars ? <p>Got the Oscar Award! </p> : <p>Great movie but no Oscars! </p>}
      <p>Rating: {generateScoreLabel(movie.IMDBRating)}</p>
      <button onClick={() => deleteMovie(movie._id)} className="btn-delete">
        Delete
      </button>
    </div>
  );
};

export default MovieCard;
