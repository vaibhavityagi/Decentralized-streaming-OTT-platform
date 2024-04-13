import { useEffect, useState } from "react";
import Button from "./Button";
import axios from "axios";
import "../css/moviePlay.css";
import { FaThumbsUp } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { GiSpeaker } from "react-icons/gi";

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
    <div className="MoviesPlay-main-body">
      <div className="Movie-Poster"><img src={result.Poster} alt={result.Title} /></div>
      <div className="Movie-details">
        <h2>{result.Title}</h2>
        <p>{result.Plot}</p>
        <div className="Movie-icons">
          <Button text="Play Now" color="#00a3ff" type="video" />
          <Button text={<FaPlus size="1rem"/>} color="#99999973" border="1px solid white" />
          <Button text={<FaThumbsUp size="1.3rem"/>}  color="#99999973" border="1px solid white" />
          <Button text={<GiSpeaker size="2rem"/>} color="#99999973" border="1px solid white" />
        </div>
      </div>
    </div>
  );
}
