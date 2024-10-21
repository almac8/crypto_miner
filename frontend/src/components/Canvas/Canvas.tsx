import { useEffect, useRef } from "react";
import { sceneData } from "../../engine/Data";

import "./Canvas.css";
import Vector2 from "../../engine/Vector2";
import ClickEvent from "../../engine/ClickEvent";

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(initializeCanvas, [ canvasRef ]);
  window.onresize = initializeCanvas;

  window.onclick = (e) => {
    sceneData.setClickEvents(sceneData.clickEvents.concat([ new ClickEvent(new Vector2(e.clientX, e.clientY)) ]));
  };

  window.onmousemove = (e) => {
    sceneData.setMousePosition(new Vector2(e.clientX, e.clientY));
  };

  function initializeCanvas() {
    const canvas = canvasRef.current;

    if(canvas !== null) {
      resizeCanvas(canvas);
      sceneData.setRenderingContext(canvas.getContext("2d"));
    }
  }

  function resizeCanvas(canvas: HTMLCanvasElement) {
    sceneData.setCanvasDimentions(new Vector2(window.innerWidth, window.innerHeight));
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  return (
    <canvas id="Canvas" ref={ canvasRef } />
  );
};

export default Canvas;