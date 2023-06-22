import { Container, Grid, TextField, Button, List, ListItem, Stack, Dialog, DialogTitle, DialogContent, DialogActions, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { inputChangeHandler, taskAddClicked, taskToggleClicked, taskUpdateClicked } from "../actions/task.actions";
import { useState } from "react";

const Task = () => {
  const dispatch = useDispatch();

  const [modalEditTask, setModalEditTask] = useState(false);
  const [editTask, setEditTask] = useState({ taskIndex: null, newName: "" });

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

  const onOpenDialogEdit = (taskIndex) => {
    setEditTask({ taskIndex: taskIndex, newName: taskList[taskIndex].name });
    setModalEditTask(true);
  };

  const onChangeTaskName = (newTaskName) => {
    setEditTask((prev) => ({ ...prev, newName: newTaskName }));
  };

  const handleConfirmEditTask = () => {
    dispatch(taskUpdateClicked(editTask.taskIndex, editTask.newName));
    setModalEditTask(false);
  };

  return (
    <>
      {/* Dialog edit task */}
      <Dialog fullWidth open={modalEditTask} onClose={() => setModalEditTask(false)}>
        <DialogTitle>EDIT TASK</DialogTitle>

        <DialogContent>
          <TextField value={editTask.newName} onChange={(event) => onChangeTaskName(event.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setModalEditTask(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleConfirmEditTask}>
            Confirm edit
          </Button>
        </DialogActions>
      </Dialog>

      <Container maxWidth={"lg"}>
        <Grid container gap={3} mt={5} alignItems="center">
          <Grid item xs={9}>
            <TextField label="Input task here" variant="outlined" fullWidth value={inputString} onChange={inputTaskChangeHandler} />
          </Grid>

          <Grid item xs>
            <Button fullWidth variant="contained" onClick={taskButtonClick}>
              Add task
            </Button>
          </Grid>
        </Grid>

        <Grid>
          <List>
            {taskList.map((element, index) => {
              return (
                <ListItem key={index}>
                  <Stack direction={"row"} gap={3}>
                    <Typography sx={{ ":hover": { cursor: "pointer" }, color: element.status ? "green" : "red" }} onClick={() => taskClickToggleHandler(index)}>
                      {index + 1}. {element.name}
                    </Typography>
                    <Button size="small" variant="contained" color="info" onClick={() => onOpenDialogEdit(index)}>
                      Edit
                    </Button>
                  </Stack>
                </ListItem>
              );
            })}
          </List>
        </Grid>
      </Container>
    </>
  );
};

export default Task;
