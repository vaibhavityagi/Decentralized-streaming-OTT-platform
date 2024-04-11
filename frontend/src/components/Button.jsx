/* eslint-disable react/prop-types */
import "../css/Freetrial.css";
export default function Button({ text, color, border }) {
  return (
    <button
      style={{
        border: border,
        cursor: "pointer",
        backgroundColor: color,
        color: "white",
        padding: "10px 10px",
        borderRadius: "5px",
        marginInlineEnd: "1rem",

      }}
    >
      {text}
    </button>
  );
}
