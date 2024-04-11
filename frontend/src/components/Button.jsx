// eslint-disable-next-line react/prop-types
export default function Button({ text, color, border }) {
  console.log("hit")
  return <button style={{ border: border, cursor: "pointer", backgroundColor: color, color: "white", padding: "10px 15px", borderRadius: "5px", marginInlineEnd: "1rem" }}>
    {text}</button>;
}
