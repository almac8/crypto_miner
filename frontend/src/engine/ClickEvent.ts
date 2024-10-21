import Vector2 from "./Vector2";

class ClickEvent {
  position: Vector2;

  constructor(position: Vector2) {
    this.position = position;
  }
}

export default ClickEvent;