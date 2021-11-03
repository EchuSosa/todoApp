import React, { useEffect } from "react";

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useStyles } from "./styles";

import { useTasks } from "../../../context/tasks-context";
import TasksService from "../../../services/taskServices";

import TaskList from "../../tasks-list";

const Home = () => {
    const { tasks, setTasks } = useTasks();
    const classes = useStyles();

    const setDataTasks = () => {
        const tasks = TasksService.INSTANCE.getAll();
        setTasks(tasks);

    };

    useEffect(() => {
        setDataTasks();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Paper className={classes.root}>
            <div className={classes.title}>
                <Typography variant="h4">
                    What's the Plan for today?
                </Typography>
            </div>
            <Grid container justifyContent="center">
                <TaskList tasks={tasks} />
            </Grid>
        </Paper>
    );
};

export default Home;
