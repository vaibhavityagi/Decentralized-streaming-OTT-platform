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
        padding:"5px 10px 5px 10px",
        borderRadius: "5px",
        marginInlineEnd: "1rem",
        display: "flex",
        justifyContent: "center",
        gap: "0.5rem",
        alignContent: "center",
        textAlign: "center",
        position: "relative",
        left: "43%",

      }}
    >
      <div>{type == "video" ? <FaPlay /> : null} </div>
      <div>{text}</div>
    </button>
  );
}
