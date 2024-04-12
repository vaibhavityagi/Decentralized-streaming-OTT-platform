import MovieCard from "../components/MovieCard";
import kantara from "../assets/kantara.jpeg";

export default function Dashboard() {
  return (
    <div>
      <MovieCard duration="1h 05 mins" ratings="2.3k" image={kantara} />
    </div>
  );
}
