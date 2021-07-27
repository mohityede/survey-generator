import React from 'react';
import { format } from 'timeago.js';
import { Card, CardContent, Typography } from '@material-ui/core';
import useStyles from './style';

export default function SimpleCard({ survey }) {
    const classes = useStyles();

    return (
        <Card className={classes.cardRoot}>
            <CardContent>
                <Typography className={classes.titleP} color="textSecondary" gutterBottom>
                    {format(survey.updatedAt)}
                </Typography>
                <Typography variant="h5" component="h2">
                    {survey.title}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {survey.subTitle}
                </Typography>
                <Typography variant="body2" component="p">
                    {survey.description}
                </Typography>
            </CardContent>
        </Card>
    );
}
