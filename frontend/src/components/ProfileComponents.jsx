import React from "react";
import "../css/profile.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
} from "@fortawesome/fontawesome-free-solid";

const ProfileComponents = ({heading,type,open}) => {
    const [isOpen, setIsOpen] = useState(open);
    function showAnswer() {
        setIsOpen((prev) => !prev);
    }

    
  return (
    <div>
         <div className="box-n">{heading}</div>
        <div onClick={showAnswer}>
          {/* {(type==yourPlan)?  (``):""}
                       */}

        {!isOpen ? (
            <FontAwesomeIcon icon={faChevronDown} />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} />
          )}
      
        </div>
        

        
    </div>
    
  )
}

export default ProfileComponents