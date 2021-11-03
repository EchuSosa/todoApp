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
        // eslint-disable-next-line
    }, []);

    const amountOfTasksText = `${tasks.length > 1 ? 'are': 'is'} ${tasks.length} ${tasks.length > 1 ? 'tasks': 'task'}`

    return (
        <Paper className={classes.root}>
            <div className={classes.title}>
                <Typography variant="h4">
                    What&apos;s the Plan for today?
                </Typography>
                {!!tasks.length && 
                    <Typography variant="p">
                        There {amountOfTasksText} to resolve
                    </Typography>
                }
            </div>
            <Grid container justifyContent="center">
                <TaskList tasks={tasks} />
            </Grid>
        </Paper>
    );
};

export default Home;
