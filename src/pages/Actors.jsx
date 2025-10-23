import { useEffect, useState } from "react";

export default function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("/actors")
      .then((res) => res.json())
      .then(setActors);
  }, []);

  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor) => (
        <div key={actor.name}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, i) => (
              <li key={i}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
