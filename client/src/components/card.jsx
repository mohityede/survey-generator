import React from 'react';
import { format } from 'timeago.js';
import { Card, CardContent, Typography } from '@material-ui/core';
import useStyles from './style';
import { useHistory } from 'react-router-dom';

export default function SimpleCard({ survey }) {
    const classes = useStyles();
    const history = useHistory();
    const openSurvey = (e) => {
        history.push(`/${survey._id}/survey`);
    };

    return (
        <Card className={classes.cardRoot} onClick={openSurvey}>
            <CardContent>
                <Typography className={classes.titleP} color="textSecondary" gutterBottom>
                    {format(survey.updatedAt)}
                </Typography>
                <Typography variant="h5" className={classes.cardTitle} component="h2">
                    {survey.title}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {survey.subTitle}
                </Typography>
                <Typography variant="body2" component="p">
                    Created By: {survey.creatorName}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {survey.questions.length} Questions
                </Typography>
            </CardContent>
        </Card>
    );
}
