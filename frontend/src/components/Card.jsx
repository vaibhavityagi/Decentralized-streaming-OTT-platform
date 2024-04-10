import Button from "./Button";

export default function Card({ type, heading, body, icon, price }) {
  return (
    <div>
      <div>
        {type == "devices" ? <img src={icon} alt={heading} /> : null}
        <div>{heading}</div>
      </div>
      <div>{body}</div>
      {type == "plan" ? (
        <div>
          <div>{price}/month</div>
          <div>
            <Button text="Start Free Trial" color="black"></Button>
            <Button text="Choose Plan" color="blue"></Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
