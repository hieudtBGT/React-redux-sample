import { TASK_ADD_CLICKED, TASK_INPUT_CHANGE, TASK_TOGGLE_CLICKED } from "../constants/task.constants";

export const inputChangeHandler = (inputValue) => {
  return {
    type: TASK_INPUT_CHANGE,
    payload: inputValue,
  };
};

export const taskAddClicked = () => {
  return {
    type: TASK_ADD_CLICKED,
  };
};

export const taskToggleClicked = (index) => {
  return {
    type: TASK_TOGGLE_CLICKED,
    payload: index,
  };
};
