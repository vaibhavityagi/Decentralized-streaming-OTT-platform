import Card from "../components/Card";
import sp from "../assets/smartphone.png";
// import "./App.css";

export default function Login() {
  return (
    <div>
      <Card
        type="plan"
        heading="Basic Plan"
        body="Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles."
        price="99"
        icon={sp}
      />
    </div>
  );
}
