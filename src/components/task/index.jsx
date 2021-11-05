/* eslint-disable react/prop-types */
import React, { useState } from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { useStyles } from "./styles";
import Dialog from '../alert-dialog'

import { useTasks } from "../../context/tasks-context";

export default function Task({ task }) {
    const { id, title } = task;
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const { tasks, setTasks } = useTasks();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleComplete = () => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <>
            <Dialog
                open={open}
                handleClose={handleClose}
                task={{ id, title }}
                handleComplete={handleComplete}
            />
            <Card className={classes.root} onClick={handleClickOpen} >
                <CardContent sx={{ height: 50 }}>
                    <Typography variant="h5" noWrap>
                        Task #{id}
                    </Typography>
                    <Typography variant="h6" noWrap>
                        {title}
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}
