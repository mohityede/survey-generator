import axios from 'axios';
import { Container, Typography } from '@material-ui/core';
import { useState, useEffect } from 'react';
import SimpleCard from '../../components/card';
import useStyles from './style';
import { toast } from 'react-toastify';

function Home() {
    const classes = useStyles();
    const [surveys, setSurveys] = useState([]);

    useEffect(() => {
        try {
            const fetchSurveys = async () => {
                const result = await axios.get("http://localhost:7700/api/survey/all");
                setSurveys(result.data);
                console.log(result.data);
            }
            fetchSurveys();
        } catch (err) {
            toast.error("Something wrong!!")
        }
    }, [])

    return (
        <>
            <Typography className={classes.heading} >Existing Surveys</Typography>
            <Container className={classes.Container}>
                {surveys.map(survey => (
                    //@ts-ignore
                    < SimpleCard key={survey._id} survey={survey} />
                ))}
            </Container>
        </>
    );
}

export default Home;