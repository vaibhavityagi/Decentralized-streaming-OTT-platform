import { useEffect, useState } from "react";
import "../css/movieplay.css";
import Button from "./Button";
import axios from "axios";

export default function MoviePlay({ name, description }) {
  const [result, setResult] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://www.omdbapi.com/?i=tt3896198&apikey=fa3ff5d2"
      );
      console.log(res.data);
      setResult(res.data);
    };
    fetchData();
  }, []);
  return (
    <div className="main-body">
      <div className="bg-container">
        <div className="movie-head">
          <h2>{result.Title}</h2>
        </div>
        <div className="movie-desc">
          <p>{result.Plot}</p>
        </div>

        <img src={result.Poster} alt={result.Title} />

        <div className="movie-icons">
          <Button text="Play Now" color="blue" type="video" />
          <Button text="+" color="black" border="" />
          <Button text="👍🏾" color="black" border="" />
          <Button text="🔊" color="black" border="" />
        </div>
      </div>
    </div>
  );
}
