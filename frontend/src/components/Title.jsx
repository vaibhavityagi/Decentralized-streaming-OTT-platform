import "../css/landingpage.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function Title() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate("/login");
  };
  return (
    <div className="container-0">
      <div className="box-0">
        <p>The Best Streaming Experience</p>
      </div>
      <div className="box-1">
        <p>Now only at ₹99/-</p>
      </div>
      <div className="box-2">
        <Button
          text="Start Watching Now"
          color="#00A3FF"
          border=""
          type="video"
          align="no"
          onclick={handleClick}
        />
      </div>
    </div>
  );
}
