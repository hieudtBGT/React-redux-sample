import { TASK_ADD_CLICKED, TASK_INPUT_CHANGE, TASK_TOGGLE_CLICKED, TASK_UPDATE_CLICKED } from "../constants/task.constants";

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

export const taskUpdateClicked = (taskIndex, newTaskName) => {
  return {
    type: TASK_UPDATE_CLICKED,
    payload: {
      taskIndex: taskIndex,
      newTaskName: newTaskName,
    },
  };
};

export const taskToggleClicked = (index) => {
  return {
    type: TASK_TOGGLE_CLICKED,
    payload: index,
  };
};
