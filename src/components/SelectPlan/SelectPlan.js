import React from "react";
import Wrapper from "./SelectPlan.styled";

const SelectPlan = () => {
  const handleSubmit = () => {};
  return (
    <Wrapper className="form__flex">
      <div className="form__header">
        <h2 className="form__title">Select your plan</h2>
        <span>You have the option of monthly or yearly billing.</span>
      </div>
      <div className="form-content"></div>
      <div className="btn-container">
        <button className="btn btn-prev" onClick={handleSubmit}>
          Go Back
        </button>
        <button className="btn btn-next" onClick={handleSubmit}>
          Next Step
        </button>
      </div>
    </Wrapper>
  );
};

export default SelectPlan;
