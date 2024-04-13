import React from "react";
import { useState } from "react";

const ProfileComponent = ({
  heading,
  type,
  open = "false",
  children,
  onclick,
}) => {
  // const [isOpen, setIsOpen] = useState(open);
  // function showAnswer() {
  //   setIsOpen((prev) => !prev);
  // }

  return (
    <div>
      <div
        className=" bg-richblack-1000 w-full items-center border rounded p-3 flex justify-between mb-5 cursor-pointer"
        onClick={onclick}
      >
        <div className="  text-lg font-semibold">{heading}</div>
        {/* <div onClick={showAnswer}>
          {type == "yourPlan" ? (
            !isOpen ? (
              <FontAwesomeIcon icon={faChevronDown} />
            ) : (
              <FontAwesomeIcon icon={faChevronUp} />
            )
          ) : null}
        </div> */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ProfileComponent;
