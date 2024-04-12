import MovieCard from "../components/MovieCard";
import kantara from "../assets/kantara.jpeg";
import MoviePlay from "../components/MoviePlay";

export default function Dashboard() {
  return (
    <div>
      <MovieCard duration="1h 05min" ratings="2.3k" image={kantara} />
      <MoviePlay name="Kantara" description="this is kantara movie" />
    </div>
  );
}
