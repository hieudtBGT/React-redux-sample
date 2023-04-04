import { Container, Grid, TextField, Button, List, ListItem } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { inputChangeHandler, taskAddClicked, taskToggleClicked } from "../actions/task.actions";

const Task = () => {
  const dispatch = useDispatch();

  const { inputString, taskList } = useSelector((reduxData) => {
    return reduxData.taskReducer;
  });

  const inputTaskChangeHandler = (event) => {
    dispatch(inputChangeHandler(event.target.value));
  };

  const taskButtonClick = () => {
    dispatch(taskAddClicked());
  };

  const taskClickToggleHandler = (index) => {
    dispatch(taskToggleClicked(index));
  };

  return (
    <Container>
      <Grid container mt={5} alignItems="center">
        <Grid item xs={12} md={6} lg={8} sm={12}>
          <TextField label="Input task here" variant="outlined" fullWidth value={inputString} onChange={inputTaskChangeHandler} />
        </Grid>

        <Grid item xs={12} md={6} lg={4} sm={12} textAlign="center">
          <Button variant="contained" onClick={taskButtonClick}>
            Add task
          </Button>
        </Grid>
      </Grid>

      <Grid>
        <List>
          {taskList.map((element, index) => {
            return (
              <ListItem key={index} onClick={() => taskClickToggleHandler(index)} style={{ color: element.status ? "green" : "red" }}>
                {index + 1}. {element.name}
              </ListItem>
            );
          })}
        </List>
      </Grid>
    </Container>
  );
};

export default Task;
