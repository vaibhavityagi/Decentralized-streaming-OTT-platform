import kantaraFull from "../assets/kantaraFullPage.jpg";
import Button from "./Button";

export default function MoviePlay({ name, description }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <Button text="Play Now" color="blue" type="video" align="no" />
      <Button text="+" color="black" border="" align="no"/>
      <Button text="👍🏾" color="black" border="" align="no"/>
      <Button text="🔊" color="black" border="" align="no"/>
    </div>
  );
}
