/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export default function Navbar({ isLoggedIn }) {
  const navigate = useNavigate();
  return (
    <div style={{
      height: "100px",
      width: "auto",
      backgroundColor: "rgba(41, 34, 88, 1)",
      backgroundImage: "linear-gradient(180deg, rgba(41, 34, 88, 1),white)",

      display: "flex",
      justifyContent: "space-evenly",
      color: "white",
      alignItems: "center",
      fontSize: "20px"

      // fontWeight: "bold",
      // mixBlendMode: "normal",

    }}>
      <div style={{ display: "flex", width: "40%", gap: "2.4rem" }}>
        <a><div className="u">Movies</div></a>
        <a><div className="u">TV Shows</div></a>
        <a><div className="u">Documentaries</div></a>
      </div>
      <div style={{ width: "40%", fontSize: "30px" }}>"Website Name"</div>
      {isLoggedIn ? <input type="text" /> : null}
      {
        isLoggedIn ? (
          <div style={{ width: "10%" }}>Profile</div>
        ) : (
          <div
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </div>
        )
      }
    </div >
  );
}
