// eslint-disable-next-line react/prop-types
export default function Button({ text, color, border }) {

  return <button style={{ border: border, cursor: "pointer", backgroundColor: color, color: "white", padding: "10px 20px", borderRadius: "5px", marginInlineEnd: "1rem" }}>
    {text}</button>;
}
