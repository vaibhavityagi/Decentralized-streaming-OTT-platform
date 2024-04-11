import Button from "./Button";
import "../App.css";

// eslint-disable-next-line react/prop-types
export default function Card({ type, heading, body, icon, price }) {
  return (
    <div className="whole-body">
      <div className="card-body">
        <div>
          {type == "devices" ? <img src={icon} alt={heading} /> : null}
          <div className="card1-planname">{heading}</div>
        </div>
        <div className="card1-details">{body}</div>
        {type == "plan" ? (
          <div>
            <div className="pr">
              ₹{price}
              <span style={{ color: "#999999", fontSize: "22px" }}>/month</span>
            </div>
            <div className="butt">
              <Button
                text="Start Free Trial"
                color="#141414"
                border="1.5px solid #999999"
              ></Button>
              <Button text="Choose Plan" color="#00A3FF" border="none"></Button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
