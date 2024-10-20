import { useState } from "react";
import "./RightDock.css";

const RightDock = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <div
    id="RightDock"
    className={ isOpen ? "UI_Dock_Open" : "UI_Dock_Closed" }
    onMouseEnter={ () => setIsOpen(true) }
    onMouseLeave={ () => setIsOpen(false) }>
      {isOpen && <h1>Right Dock</h1>}
    </div>
  )
};

export default RightDock;