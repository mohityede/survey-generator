import React from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container, Typography, Fab, TextField, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './style';

function UserDetails() {
    const classes = useStyles();
    const history = useHistory();
    const [creatorName, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [title, setTitle] = React.useState('');
    const [subitle, setSubtitle] = React.useState('');
    const [description, setDescription] = React.useState('');

    function handleName(event) {
        setName(event.target.value);
    }

    function handleEmail(event) {
        setEmail(event.target.value);
    }

    function handleTitle(event) {
        setTitle(event.target.value);
    }

    function handleSubTitle(event) {
        setSubtitle(event.target.value);
    }

    function handleDescription(event) {
        setDescription(event.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const flag = (creatorName != '' && email != '' && title != '');
        if (flag) {
            const output = {
                creatorName,
                email,
                title,
                subitle,
                description
            }
            console.log(output);
            history.replace('/create/:id/quetions')
        } else {
            toast.error("Please fill all required field!!")
        }
    }

    return (
        <>
            <Container className={classes.Container}>
                <Typography variant="h4" className={classes.title}>
                    Create Survey
                  </Typography>
                <Typography className={classes.title}>
                    * are compulsory
                  </Typography>

                <form className={classes.formContainer} onSubmit={handleSubmit} noValidate autoComplete="off">
                    <Container className={classes.input}>
                        <TextField onChange={handleName} value={creatorName} required fullWidth label="Your Name" />
                    </Container>
                    <Container className={classes.input}>
                        <TextField onChange={handleEmail} value={email} required fullWidth label="Email" />
                    </Container>
                    <Container className={classes.input}>
                        <TextField onChange={handleTitle} value={title} required fullWidth label="Survey Title" />
                    </Container>
                    <Container className={classes.input}>
                        <TextField onChange={handleSubTitle} value={subitle} fullWidth label="Survey Subtitle" />
                    </Container>
                    <Container className={classes.input}>
                        <TextField onChange={handleDescription} value={description} fullWidth label="Survey Description" />
                    </Container>

                    <Container className={classes.input}>
                        <Button
                            type='submit'
                        >
                            <Fab color="primary" aria-label="add">
                                <AddIcon />
                            </Fab>
                        </Button>
                    </Container>
                </form>
            </Container>
        </>
    );
}

export default UserDetails;