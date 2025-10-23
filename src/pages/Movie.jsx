import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((err) => console.error("Failed to load movie:", err));
  }, [id]);

  //  Loading state
  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.time} minutes</p>

      {/*  Safe check before mapping genres */}
      {Array.isArray(movie.genres) && movie.genres.length > 0 ? (
        movie.genres.map((genre, i) => <span key={i}>{genre}</span>)
      ) : (
        <p>No genres available.</p>
      )}
    </div>
  );
}

export default Movie;
