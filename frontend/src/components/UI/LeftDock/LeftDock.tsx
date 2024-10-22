import { useContext, useState } from "react";
import "./LeftDock.css";
import { SceneDataContext } from "../../../engine/Data";

const LeftDock = () => {
  const sceneDataContext = useContext(SceneDataContext);
  const [ isOpen, setIsOpen ] = useState(false);
  const [ isLocked, setIsLocked ] = useState(false);

  const toggleIsLocked = () => setIsLocked(!isLocked);

  return (
    <div
    id="LeftDock"
    className={ isOpen ? "UI_Dock_Open" : "UI_Dock_Closed" }
    onMouseEnter={ () => !isLocked && setIsOpen(true) }
    onMouseLeave={ () => !isLocked && setIsOpen(false) }>
      {isOpen && <p>World Dimentions: ({ sceneDataContext.worldDimentions.x }, { sceneDataContext.worldDimentions.y })</p>}
      {isOpen && sceneDataContext.selectedTile !== undefined && <p>Selected Cell: { `(${ sceneDataContext.selectedTile.x }, ${ sceneDataContext.selectedTile.y })` }</p>}
      {isOpen && sceneDataContext.selectedTile !== undefined && <p>Value: { sceneDataContext.minableValues[sceneDataContext.selectedTile.x][sceneDataContext.selectedTile.x] }</p>}
      {isOpen && <button onClick={ toggleIsLocked }>{ isLocked ? "Unlock" : "Lock" }</button>}
    </div>
  );
};

export default LeftDock;