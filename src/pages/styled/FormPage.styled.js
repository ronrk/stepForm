import styled from "styled-components";

const FormPageWrapper = styled.div`
  padding: 1rem 4rem;
  min-height: 500px;
  display: flex;
  width: 100%;
  justify-content: flex-end;

  & .form__header {
    & .form__title {
      font-size: 3.5rem;
      color: var(--marine-blue);
      margin-bottom: 1rem;
    }
    & span {
      font-size: 1.6rem;
      color: var(--cool-gray);
    }
  }
  & .btn-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & .btn-next {
    margin-left: auto;
    background-color: var(--marine-blue);
    padding: 1.4rem 2.7rem;
    color: var(--light-gray);
    font-size: 1.6rem;
    border-radius: 8px;
    transition: all 0.2s;

    &:hover {
      filter: brightness(150%);
    }
    &:focus {
      outline: none;
      filter: brightness(150%);
    }
    &:active {
      outline: none;
      transform: scale(0.98);
    }
  }
  & .form-content {
    flex-grow: 1;
  }

  & .btn-prev {
    margin-left: auto;
    padding: 1.4rem 2.7rem;
    color: var(--cool-gray);
    font-size: 1.6rem;
    transition: all 0.2s;

    &:hover {
      color: var(--marine-blue);
    }
    &:focus {
      outline: none;
    }
    &:active {
      outline: none;
      transform: scale(0.98);
    }
  }

  & .form__flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4rem;
  }

  & .form-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

export default FormPageWrapper;
