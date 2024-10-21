import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import Vector2 from "./Vector2";
import ClickEvent from "./ClickEvent";

type SceneData = {
  renderingContext: CanvasRenderingContext2D | undefined,
  setRenderingContext: Dispatch<SetStateAction<CanvasRenderingContext2D | undefined>>,

  canvasDimentions: Vector2,
  setCanvasDimentions: Dispatch<SetStateAction<Vector2>>,

  mousePosition: Vector2,
  setMousePosition: Dispatch<SetStateAction<Vector2>>,

  clickEvents: ClickEvent[],
  setClickEvents: Dispatch<SetStateAction<ClickEvent[]>>,

  worldSize: number,
  setWorldSize: Dispatch<SetStateAction<number>>,
  
  selectedCell: number | undefined,
  setSelectedCell: Dispatch<SetStateAction<number | undefined>>
};

type SceneDataProviderProps = {
  children: ReactNode
};

let sceneData: SceneData = {
  renderingContext: undefined,
  setRenderingContext: () => {},

  canvasDimentions: new Vector2(),
  setCanvasDimentions: () => {},

  mousePosition: new Vector2(),
  setMousePosition: () => {},

  clickEvents: [] as ClickEvent[],
  setClickEvents: () => {},

  worldSize: 0,
  setWorldSize: () => {},

  selectedCell: undefined,
  setSelectedCell: () => {}
};

const SceneDataContext = createContext(sceneData);

const SceneDataProvider = (props: SceneDataProviderProps) => {
  const [ renderingContext, setRenderingContext ] = useState<CanvasRenderingContext2D | undefined>(undefined);
  const [ canvasDimentions, setCanvasDimentions ] = useState<Vector2>(new Vector2());
  const [ mousePosition, setMousePosition ] = useState<Vector2>(new Vector2());
  const [ clickEvents, setClickEvents ] = useState<ClickEvent[]>([] as ClickEvent[]);
  const [ worldSize, setWorldSize ] = useState<number>(0);
  const [ selectedCell, setSelectedCell ] = useState<number | undefined>(undefined);

  sceneData.renderingContext = renderingContext;
  sceneData.setRenderingContext = setRenderingContext;

  sceneData.canvasDimentions = canvasDimentions;
  sceneData.setCanvasDimentions = setCanvasDimentions;

  sceneData.mousePosition = mousePosition;
  sceneData.setMousePosition = setMousePosition;

  sceneData.clickEvents = clickEvents;
  sceneData.setClickEvents = setClickEvents;

  sceneData.worldSize = worldSize;
  sceneData.setWorldSize = setWorldSize;

  sceneData.selectedCell = selectedCell;
  sceneData.setSelectedCell = setSelectedCell;
  
  return (
    <SceneDataContext.Provider value={{
      renderingContext, setRenderingContext,
      canvasDimentions, setCanvasDimentions,
      mousePosition, setMousePosition,
      clickEvents, setClickEvents,
      worldSize, setWorldSize,
      selectedCell, setSelectedCell }}>
      { props.children }
    </SceneDataContext.Provider>
  );
};

export { sceneData, SceneDataContext, SceneDataProvider };