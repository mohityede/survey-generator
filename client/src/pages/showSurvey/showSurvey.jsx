import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams } from "react-router-dom";
import { Container, Typography, Button } from '@material-ui/core';
import useStyles from './style';
import ShowQuestion from '../../components/showQuestion';

function ShowSurvey() {
    const classes = useStyles();
    const [survey, setSurvey] = useState({});
    // @ts-ignore
    const { id: surveyId } = useParams();

    useEffect(() => {

        console.log(surveyId);
        const fetchSurvey = async () => {
            try {
                const result = await axios.get(`http://localhost:7700/api/${surveyId}/survey`);
                setSurvey(result.data);
            } catch (err) {
                toast.error("Something wrong!!")
            }
        }
        fetchSurvey();

    }, {})

    return (
        <>
            <Container className={classes.Container}>
                <Container className={classes.details}>
                    <Typography variant="h4" className={classes.title}>
                        {survey.title}
                    </Typography>
                    <Typography className={classes.title}>
                        {survey.subTitle}
                    </Typography>
                    <Typography >
                        Creator Name: {survey.creatorName}
                    </Typography>
                    <Typography >
                        Creator Email: {survey.email}
                    </Typography>
                    <Typography className={classes.description}>
                        {survey.description}
                    </Typography>
                    <Typography className={classes.title} >
                        * are compulsory
                    </Typography>
                </Container>

                <form className={classes.formContainer} noValidate autoComplete="off">
                    {survey.questions && survey.questions.map(ques => (
                        <ShowQuestion ques={ques} />
                    ))}
                    <Button
                        style={{ marginTop: '30px' }}
                        variant="contained"
                        color="secondary"
                        size="small"
                        disabled
                    >
                        sorry! you can't submit
                                </Button>
                </form>
                <Typography>if you want to submit survey.. first approve my work</Typography>
            </Container>
        </>
    );
}

export default ShowSurvey;