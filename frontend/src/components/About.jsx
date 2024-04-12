import "../css/about.css";
export default function About({ children }) {
  return (
    <div className="container">
    <div className="head">
    <h2>About Us</h2>
    </div>
      <div className="child">{children}</div>
    </div>
  );
}
