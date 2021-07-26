import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import useStyles from './style';

export default function SimpleCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.titleP} color="textSecondary" gutterBottom>
                    day before
                </Typography>
                <Typography variant="h5" component="h2">
                    Title
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    subTitle
                </Typography>
                <Typography variant="body2" component="p">
                    description
                </Typography>
            </CardContent>
        </Card>
    );
}
