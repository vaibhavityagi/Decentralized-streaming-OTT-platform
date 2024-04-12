import "../css/landingpage.css";
import VideoButton from "./VideoButton";

export default function Title() {
  return (
    <div className="container-0">
    <div className="box-0">
      <p>The Best Streaming Experience</p>
    </div>
    <div className="box-1">
      <p>Now only at ₹99/-</p>
    </div>
    <div className="box-2">
      <VideoButton text="Start Watching Now" color="#00A3FF" border="" />
    </div>
      
    </div>
  );
}
