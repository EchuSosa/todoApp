import React from "react";

import Typography from '@mui/material/Typography';
import { useStyles } from "./styles";

import Task from "../task";

const TaskList = ({ tasks = [] }) => {
  const classes = useStyles();

  return !!tasks.length ? (
    tasks.map((task) => <Task task={task} key={task.id} />)
  ) : (
    <div className={classes.title}>
      <Typography variant="p">
        There aren't task in your list
    </Typography>
    </div>

  );
};

export default TaskList;
