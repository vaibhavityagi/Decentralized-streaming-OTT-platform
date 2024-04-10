/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export default function Navbar({ isLoggedIn }) {
  const navigate = useNavigate();
  return (
    <div>
      <div>I am the change</div>
      <div>Movies</div>
      <div>TV Shows</div>
      <div>Documentaries</div>
      <div>"Website Name"</div>
      {isLoggedIn ? <input type="text" /> : null}
      {isLoggedIn ? (
        <div>Profile</div>
      ) : (
        <div
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </div>
      )}
    </div>
  );
}