import Button from "./Button";
import { FaPlay } from "react-icons/fa";

export default function VideoButton({ text, color, border }) {
  return (
    <div>
      <FaPlay />
      <Button text={text} color={color} border={border} />
    </div>
  );
}
