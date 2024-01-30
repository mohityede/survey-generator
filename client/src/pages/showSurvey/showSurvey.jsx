import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams } from "react-router-dom";
import { Container, Typography, Button } from '@material-ui/core';
import useStyles from './style';
import ShowQuestion from '../../components/showQuestion';
import SurveyStat from '../../components/surveyStat';

function ShowSurvey() {
    const classes = useStyles();
    const [survey, setSurvey] = useState({});
    const [surveyView, setSurveyView] = useState("btn");// "stats" , "ques"
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

    const handleGiveSurey = () => {
        setSurveyView("ques");
    }
    const handleViewStats = () => {
        setSurveyView("stats")
    }

    return (
        <>
            <Container className={ classes.Container }>
                <Container className={ classes.details }>
                    <Typography variant="h4" className={ classes.title }>
                        { survey.title }
                    </Typography>
                    <Typography className={ classes.title }>
                        { survey.subTitle }
                    </Typography>
                    <Typography >
                        Creator Name: { survey.creatorName }
                    </Typography>
                    <Typography >
                        Creator Email: { survey.email }
                    </Typography>
                    <Typography className={ classes.description }>
                        { survey.description }
                    </Typography>
                </Container>
                {
                    surveyView === "btn" &&
                    <Container className={ classes.btnContainer }>
                        <Button
                            className={ classes.surveyBtn }
                            onClick={ () => handleGiveSurey() }
                            variant="contained"
                        >Give Survey</Button>
                        <Button
                            className={ classes.surveyBtn }
                            onClick={ () => handleViewStats() }
                            variant="contained"
                        >View Stats</Button>
                    </Container>
                }
                {
                    surveyView === "stats" &&
                    <Container className={ classes.btnContainer }>
                        <SurveyStat questions={ survey.questions } />
                    </Container>
                }
                {
                    surveyView === "ques" &&
                    <Container className={ classes.btnContainer }>
                        <ShowQuestion ques={ survey.questions } />
                    </Container>
                }
                {/* <form className={classes.formContainer} noValidate autoComplete="off">
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
                </form> */}
                {/* <Typography>if you want to submit survey.. you need to approve my work</Typography> */ }
            </Container >
        </>
    );
}

export default ShowSurvey;