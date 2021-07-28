import axios from 'axios';
import { Container, Typography } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import SimpleCard from '../../components/card';
import useStyles from './style';

function Home() {
    const classes = useStyles();
    const [surveys, setSurveys] = useState([]);

    useEffect(() => {

        const fetchSurveys = async () => {
            try {
                const result = await axios.get("http://localhost:7700/api/survey/all");
                setSurveys(result.data);
            } catch (err) {
                toast.error("Something wrong with connection!!")
            }
        }
        fetchSurveys();

    }, [])

    return (
        <>
            <Typography className={classes.heading} >Existing Surveys</Typography>
            <Container className={classes.Container}>
                {(surveys.length === 0) && <Container className={classes.notice} >Nothing to Display! Create some survey.</Container>}
                {surveys && surveys.map(survey => (
                    //@ts-ignore
                    < SimpleCard key={survey._id} survey={survey} />
                ))}
            </Container>
        </>
    );
}

export default Home;