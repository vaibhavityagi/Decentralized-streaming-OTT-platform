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
        marginInlineEnd: " 1rem",
        display: type == "noVideo" ? "block" : "flex",
        justifyContent: "center",
        gap: type == "noVideo" ? "0rem" : "0.5rem",
        alignContent: "center",
        textAlign: "center",
      }}
    >
      <div>{type == "video" ? <FaPlay /> : null} </div>
      <div>{text}</div>
    </button>
  );
}
