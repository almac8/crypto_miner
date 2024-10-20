import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type SceneData = {
  renderingContext: CanvasRenderingContext2D | undefined;
  setRenderingContext: Dispatch<SetStateAction<CanvasRenderingContext2D | undefined>>
};

type SceneDataProviderProps = {
  children: ReactNode
};

let sceneData: SceneData = {
  renderingContext: undefined,
  setRenderingContext: () => {}
};

const SceneDataContext = createContext(sceneData);

const SceneDataProvider = (props: SceneDataProviderProps) => {
  const [ renderingContext, setRenderingContext ] = useState<CanvasRenderingContext2D | undefined>(undefined);

  sceneData.renderingContext = renderingContext;
  sceneData.setRenderingContext = setRenderingContext;
  
  return (
    <SceneDataContext.Provider value={{ renderingContext, setRenderingContext }}>
      { props.children }
    </SceneDataContext.Provider>
  );
};

export { sceneData, SceneDataProvider };