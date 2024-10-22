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

  worldDimentions: Vector2,
  setWorldDimentions: Dispatch<SetStateAction<Vector2>>,
  
  selectedTile: Vector2 | undefined,
  setSelectedTile: Dispatch<SetStateAction<Vector2 | undefined>>,

  minableValues: number[][],
  setMinableValues: Dispatch<SetStateAction<number[][]>>
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

  worldDimentions: new Vector2(),
  setWorldDimentions: () => {},

  selectedTile: undefined,
  setSelectedTile: () => {},

  minableValues: [] as number[][],
  setMinableValues: () => {}
};

const SceneDataContext = createContext(sceneData);

const SceneDataProvider = (props: SceneDataProviderProps) => {
  const [ renderingContext, setRenderingContext ] = useState<CanvasRenderingContext2D | undefined>(undefined);
  const [ canvasDimentions, setCanvasDimentions ] = useState<Vector2>(new Vector2());
  const [ mousePosition, setMousePosition ] = useState<Vector2>(new Vector2());
  const [ clickEvents, setClickEvents ] = useState<ClickEvent[]>([] as ClickEvent[]);
  const [ worldDimentions, setWorldDimentions ] = useState<Vector2>(new Vector2());
  const [ selectedTile, setSelectedTile ] = useState<Vector2 | undefined>(undefined);
  const [ minableValues, setMinableValues ] = useState<number[][]>([]);
  
  sceneData.renderingContext = renderingContext;
  sceneData.setRenderingContext = setRenderingContext;

  sceneData.canvasDimentions = canvasDimentions;
  sceneData.setCanvasDimentions = setCanvasDimentions;

  sceneData.mousePosition = mousePosition;
  sceneData.setMousePosition = setMousePosition;

  sceneData.clickEvents = clickEvents;
  sceneData.setClickEvents = setClickEvents;

  sceneData.worldDimentions = worldDimentions;
  sceneData.setWorldDimentions = setWorldDimentions;

  sceneData.selectedTile = selectedTile;
  sceneData.setSelectedTile = setSelectedTile;

  sceneData.minableValues = minableValues;
  sceneData.setMinableValues = setMinableValues;
  
  return (
    <SceneDataContext.Provider value={{
      renderingContext, setRenderingContext,
      canvasDimentions, setCanvasDimentions,
      mousePosition, setMousePosition,
      clickEvents, setClickEvents,
      worldDimentions, setWorldDimentions,
      selectedTile, setSelectedTile,
      minableValues, setMinableValues }}>
      { props.children }
    </SceneDataContext.Provider>
  );
};

export { sceneData, SceneDataContext, SceneDataProvider };