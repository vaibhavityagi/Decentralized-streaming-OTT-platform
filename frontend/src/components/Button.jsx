import { FaPlay } from "react-icons/fa";
export default function Button({
  text,
  color,
  border = "none",
  type = "noVideo",
}) {
  return (
    <button
      style={{
        border: border,
        cursor: "pointer",
        backgroundColor: color,
        color: "white",
        padding: "5px 10px 5px 10px",
        borderRadius: "5px",
        display: type == "noVideo" ? "block" : "flex",
        justifyContent: type == "noVideo" ? "none" : "center",
        gap: type == "noVideo" ? "0rem" : "0.5rem",
        alignContent: type == "noVideo" ? "none" : "center",
        textAlign: "center",
      }}
    >
      <div>{type == "video" ? <FaPlay /> : null} </div>
      <div>{text}</div>
    </button>
  );
}
