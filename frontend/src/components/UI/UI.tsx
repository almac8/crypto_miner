import "./UI.css";
import LeftDock from "./LeftDock/LeftDock";
import RightDock from "./RightDock/RightDock";

const UI = () => {
  return (
    <div id="UI">
      <LeftDock />
      <RightDock />
    </div>
  )
};

export default UI;