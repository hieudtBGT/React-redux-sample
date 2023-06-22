import { TASK_ADD_CLICKED, TASK_INPUT_CHANGE, TASK_TOGGLE_CLICKED, TASK_UPDATE_CLICKED } from "../constants/task.constants";

const initialState = {
  inputString: "",
  taskList: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASK_INPUT_CHANGE:
      state.inputString = action.payload;
      break;
    case TASK_ADD_CLICKED:
      state.taskList.push({
        name: state.inputString,
        status: false,
      });

      state.inputString = "";
      break;
    case TASK_UPDATE_CLICKED:
      state.taskList[action.payload.taskIndex].name = action.payload.newTaskName;
      break;
    case TASK_TOGGLE_CLICKED:
      state.taskList[action.payload].status = !state.taskList[action.payload].status;
      break;
    default:
      break;
  }

  return { ...state };
};

export default taskReducer;
