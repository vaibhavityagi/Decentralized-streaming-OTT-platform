import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
} from "@fortawesome/fontawesome-free-solid";
import { useState } from "react";
import Number from "./Number";

// eslint-disable-next-line react/prop-types
export default function Faq({ question, children, num, open }) {
  const [isOpen, setIsOpen] = useState(open);
  function showAnswer() {
    setIsOpen((prev) => !prev);
  }
  return (
    <div className="faqq">
      <div className="numm"><Number number={num} /></div>
      <div>{question}</div>
      <div onClick={showAnswer}>
        {!isOpen ? (
          <FontAwesomeIcon icon={faChevronDown} />
        ) : (
          <FontAwesomeIcon icon={faChevronUp} />
        )}
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  );
}
