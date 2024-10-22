import { useContext, useState } from "react";
import "./LeftDock.css";
import { SceneDataContext } from "../../../engine/Data";

const LeftDock = () => {
  const sceneDataContext = useContext(SceneDataContext);
  const [ isOpen, setIsOpen ] = useState(false);
  const [ isLocked, setIsLocked ] = useState(false);

  const toggleIsLocked = () => setIsLocked(!isLocked);

  const mineSelectedTile = () => {
    console.log(`Mine ${ JSON.stringify(sceneDataContext.selectedTile) }`);
  }

  return (
    <div
    id="LeftDock"
    className={ isOpen ? "UI_Dock_Open" : "UI_Dock_Closed" }
    onMouseEnter={ () => !isLocked && setIsOpen(true) }
    onMouseLeave={ () => !isLocked && setIsOpen(false) }>
      {isOpen && (
        <div>
          <p>World Dimentions: ({ sceneDataContext.worldDimentions.x }, { sceneDataContext.worldDimentions.y })</p>

          {sceneDataContext.selectedTile !== undefined && (
            <div>
              <p>Selected Tile: { `(${ sceneDataContext.selectedTile.x }, ${ sceneDataContext.selectedTile.y })` }</p>
              <p>Tile Value: { sceneDataContext.minableValues[sceneDataContext.selectedTile.x][sceneDataContext.selectedTile.x] }</p>
              <button onClick={ mineSelectedTile }>Mine</button>
            </div>
          )}

          <button onClick={ toggleIsLocked }>{ isLocked ? "Unlock" : "Lock" }</button>
        </div>
      )}
    </div>
  );
};

export default LeftDock;