/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export default function Navbar({ isLoggedIn }) {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navbar1">
        <a><div className="u">Movies</div></a>
        <a><div className="u">TV Shows</div></a>
        <a><div className="u">Documentaries</div></a>
      </div>
      <div className="websiteName">"Website Name"</div>
      <div className="nav-profile-s">
        <div className="inputtt">{isLoggedIn ? <input type="text" /> : null}</div>
        {
          isLoggedIn ? (
            <div>Profile</div>
          ) : (
            <div
              onClick={() => {
                navigate("/login");
              }}
            >
              <a><div className="u">Login</div></a>
            </div>
          )
        }
      </div>
    </div >
  );
}
