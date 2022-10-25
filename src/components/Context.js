import { createContext, useReducer } from "react";

export const CarContext = createContext();

const initialState = {
  speed: 0,
  ignition: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "switchOn":
      return { ...state, ignition: true };
    case "accelerate":
      if (state.ignition) {
        return { ...state, speed: state.speed + 10 };
      } else {
        return state;
      }
      break;
    case "brake":
      if (state.ignition && state.speed > 0) {
        return { ...state, speed: state.speed - 10 };
      } else {
        return { ...state, ignition: false };
      }
      break;
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
