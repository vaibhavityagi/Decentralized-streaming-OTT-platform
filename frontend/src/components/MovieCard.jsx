import { FaClock } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";

export default function MovieCard({ duration, ratings, image }) {
  return (
    <div>
      <img src={image} alt="movie" />
      <div className="flex gap-1">
        <div className="flex gap-1 items-center">
          <div>
            <FaClock />
          </div>
          <div>{duration}</div>
        </div>
        <div className="flex gap-1 items-center">
          <FaRegEye />
          {ratings}
        </div>
      </div>
    </div>
  );
}
