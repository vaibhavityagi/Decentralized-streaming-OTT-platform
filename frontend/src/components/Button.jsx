<<<<<<< HEAD
// eslint-disable-next-line react/prop-types
export default function Button({ text, color, border }) {

  return <button style={{ border: border, cursor: "pointer", backgroundColor: color, color: "white", padding: "10px 20px", borderRadius: "5px", marginInlineEnd: "1rem" }}>
    {text}</button>;
=======
export default function Button({ text, color }) {
  // use the color prop in css
  return <button>{text}</button>;
>>>>>>> 46679d1c2bd1f1b06ee59fb3e7542cbeeb8d9ba9
}
