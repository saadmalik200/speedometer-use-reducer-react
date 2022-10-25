import React, { useContext } from "react";

import ReactSpeedometer from "react-d3-speedometer";
import { CarContext } from "./Context";

export default function Car() {
  const { state, dispatchState } = useContext(CarContext);
  console.log(state);

  return (
    <div className="car">
      {state.ignition && (
        <ReactSpeedometer
          value={state.speed}
          minValue={0}
          maxValue={160}
          segments={5}
        />
      )}
      <div className="btnDiv">
        <button onClick={() => dispatchState({ type: "switchOn" })}>
          Switch On
        </button>
        <button onClick={() => dispatchState({ type: "accelerate" })}>
          Accelerate
        </button>
        <button onClick={() => dispatchState({ type: "brake" })}>Brake</button>
      </div>
    </div>
  );
}
