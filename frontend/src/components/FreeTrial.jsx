import "../css/Freetrial.css";
import { faAlignRight } from "@fortawesome/fontawesome-free-solid";
import Button from "./Button";

export default function FreeTrial() {
  // css me background image me free trial wali image daal dena
  return (
    <div className="abc">
<div className="container">
<div className="box-0">
      <p>Start Your Free Trial Today</p>
<div className="box-1">
<p>This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</p>
</div>
      

    </div>
    <div className="box-2">
    <Button text="Start a Free Trial" color={"#00A3FF"}/>
    </div>
</div>
    </div>

  );
}
