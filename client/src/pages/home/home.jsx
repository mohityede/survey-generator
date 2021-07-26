import { Container, Typography } from '@material-ui/core';
import SimpleCard from '../../components/card';
import useStyles from './style';

function Home() {
    const classes = useStyles();
    return (
        <>
            <Typography className={classes.heading} >Existing Surveys</Typography>
            <Container className={classes.Container}>
                <SimpleCard />
                <SimpleCard />
                <SimpleCard />
                <SimpleCard />
                <SimpleCard />
                <SimpleCard />
                <SimpleCard />
                <SimpleCard />
            </Container>
        </>
    );
}

export default Home;