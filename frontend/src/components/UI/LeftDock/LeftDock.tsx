import { useContext, useState } from "react";
import "./LeftDock.css";
import { SceneDataContext } from "../../../engine/Data";

const LeftDock = () => {
  const [ isOpen, setIsOpen ] = useState(false);
  const sceneDataContext = useContext(SceneDataContext);

  return (
    <div
    id="LeftDock"
    className={ isOpen ? "UI_Dock_Open" : "UI_Dock_Closed" }
    onMouseEnter={ () => setIsOpen(true) }
    onMouseLeave={ () => setIsOpen(false) }>
      {isOpen && <p>World Dimentions: ({ sceneDataContext.worldSize.x }, { sceneDataContext.worldSize.y })</p>}
      {isOpen && sceneDataContext.selectedCell !== undefined && <p>Selected Cell: { sceneDataContext.selectedCell }</p>}
    </div>
  );
};

export default LeftDock;