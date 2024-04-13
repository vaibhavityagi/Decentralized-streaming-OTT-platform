import kantaraFull from "../assets/kantaraFullPage.jpg";
import "../css/movieplay.css";
import Button from "./Button";

export default function MoviePlay({ name, description }) {
  return (
    <div className="main-body">
    <div className="bg-container">
    <div className="kantara-head">
    <h2>{name}</h2>
    </div>
    <div className="kantara-desc">
    <p>{description}</p>
    </div>
   
  <div className="kantara-icons">
  <Button text="Play Now" color="blue" type="video" />
      <Button text="+" color="black" border="" />
      <Button text="👍🏾" color="black" border="" />
      <Button text="🔊" color="black" border="" />
    
  </div>
      

    </div>
    </div>
  );
}
