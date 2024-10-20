import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type SceneData = {
  renderingContext: CanvasRenderingContext2D | undefined,
  setRenderingContext: Dispatch<SetStateAction<CanvasRenderingContext2D | undefined>>,
  worldSize: number,
  setWorldSize: Dispatch<SetStateAction<number>>
};

type SceneDataProviderProps = {
  children: ReactNode
};

let sceneData: SceneData = {
  renderingContext: undefined,
  setRenderingContext: () => {},
  worldSize: 0,
  setWorldSize: () => {}
};

const SceneDataContext = createContext(sceneData);

const SceneDataProvider = (props: SceneDataProviderProps) => {
  const [ renderingContext, setRenderingContext ] = useState<CanvasRenderingContext2D | undefined>(undefined);
  const [ worldSize, setWorldSize ] = useState<number>(0);

  sceneData.renderingContext = renderingContext;
  sceneData.setRenderingContext = setRenderingContext;
  sceneData.worldSize = worldSize;
  sceneData.setWorldSize = setWorldSize;
  
  return (
    <SceneDataContext.Provider value={{ renderingContext, setRenderingContext, worldSize, setWorldSize }}>
      { props.children }
    </SceneDataContext.Provider>
  );
};

export { sceneData, SceneDataContext, SceneDataProvider };