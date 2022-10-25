import { createContext, useReducer } from "react";

export const CarContext = createContext();

const initialState = {
  speed: 0,
  ignition: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "switchOn":
      if (!state.ignition && state.speed === 0) {
        return { ...state, ignition: true };
      } else if (state.ignition && state.speed !== 0) {
        return state;
      } else {
        return { ...state, ignition: false };
      }
    case "accelerate":
      if (state.ignition && state.speed < 300) {
        return { ...state, speed: state.speed + 10 };
      } else {
        return state;
      }

    case "brake":
      if (state.ignition && state.speed > 0) {
        return { ...state, speed: state.speed - 10 };
      } else {
        return state;
      }
    default:
      return state;
  }
};
const CarContextProvider = ({ children }) => {
  const [state, dispatchState] = useReducer(reducer, initialState);

  return (
    <CarContext.Provider value={{ state, dispatchState }}>
      {children}
    </CarContext.Provider>
  );
};

export default CarContextProvider;
