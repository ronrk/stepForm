import React, { useReducer, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import stepFormReducer from "../reducer/stepForm-reducer";

const stepFormContext = React.createContext();

const initialState = {
  page: 1,
  values: {
    name: "",
    email: "",
    phone: "",
    duration: "",
    plan: "",
    addOns: [],
    total: 0,
  },
};

const StepFormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stepFormReducer, initialState);

  const progressNextStep = (values) => {
    dispatch({ type: "ADD_VALUES", payload: values });
    nextPage();
  };

  const nextPage = () => {
    dispatch({ type: "NEXT_PAGE" });
  };
  const prevPage = () => {
    dispatch({ type: "PREV_PAGE" });
  };

  return (
    <stepFormContext.Provider
      value={{ ...state, nextPage, prevPage, progressNextStep }}
    >
      {children}
    </stepFormContext.Provider>
  );
};

export const useFormStepContext = () => useContext(stepFormContext);

export default StepFormProvider;
