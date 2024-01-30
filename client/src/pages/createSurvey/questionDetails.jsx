import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams, useHistory } from "react-router-dom";
import { Container, Typography, TextField, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import useStyles from './style';

function QuestionDetails() {
    const classes = useStyles();
    const history = useHistory();
    const [question, setQues] = React.useState('');
    const [options, setOptions] = React.useState([]);
    const { id: surveyId } = useParams();

    function handleChange(i, event) {
        const values = [...options];
        values[i].value = event.target.value;
        setOptions(values);
    }

    function handleAdd() {
        const values = [...options];
        values.push({ value: null });
        setOptions(values);
    }

    function handleRemove(i) {
        const values = [...options];
        values.splice(i, 1);
        setOptions(values);
    }

    function clearState() {
        setQues('');
        setOptions([{ value: null }]);
    }

    function validateOptions() {
        if (options.length === 0) {
            toast.error("Atleast one option is required!!")
            return false;
        }
        for (let i = 0; i < options.length; i++) {
            if (options[0].value === null || options.value === "") {
                toast.error("Atleast one option is required!!")
                return false;
            }
        }
        return true;
    }

    function doSubmit() {
        let flag = (question !== '' && validateOptions())

        if (flag) {
            let newOptions = [];
            options.map((op) => newOptions.push({ option: op.value }));
            const ques = {
                question,
                options: newOptions
            }
            try {

                const putSurvey = async () => {
                    console.log("body", ques);
                    const result = await axios.post(`http://localhost:7700/api/${surveyId}/question`, ques);
                    console.log(result);
                }

                putSurvey();
                clearState();
                toast.success("Question succefully added..")
                return true;
            } catch (err) {
                toast.error("Something wrong with connection!!")
            }
        } else {
            toast.error("Please fill all required field!!")
            return false;
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        validateOptions() && doSubmit();
    }

    function handleSave() {
        if (validateOptions()) {
            const isSubmited = doSubmit();
            isSubmited && history.replace('/');
        }
    }

    function handleques(event) {
        setQues(event.target.value);
    }
    return (
        <>
            <Container className={ classes.Container }>
                <Typography variant="h4" className={ classes.title }>
                    Create Survey
                </Typography>


                <form className={ classes.formContainer } onSubmit={ handleSubmit } validate autoComplete="off">
                    <Container className={ classes.input }>
                        <TextField onChange={ handleques } value={ question } required fullWidth label="Question" />
                    </Container>

                    <Container className={ classes.input }>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            onClick={ () => handleAdd() }
                            className={ classes.button }
                            startIcon={ <AddIcon /> }
                            disabled={ options.length > 8 }
                        >
                            Add Option
                        </Button>

                        { options.map((field, idx) => {
                            return (
                                <Container key={ `${field}-${idx}` }>
                                    <TextField onChange={ e => handleChange(idx, e) } required className={ classes.input } label={ `option ${idx}` } />
                                    <Button
                                        color="secondary"
                                        size="small"
                                        onClick={ () => handleRemove(idx) }
                                        className={ classes.button }
                                        startIcon={ <CancelIcon /> }
                                    >
                                    </Button>
                                </Container>
                            );
                        }) }
                    </Container>

                    <Container className={ classes.input }>
                        <Button type="submit" color="primary" aria-label="add">
                            <Button color="primary">
                                <AddIcon /> Add Quiz
                            </Button>
                        </Button>
                    </Container>

                    <Container className={ classes.input }>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            className={ classes.button }
                            startIcon={ <SaveIcon /> }
                            onClick={ handleSave }
                            disabled={ (question === '') }
                        >
                            Add & Save Survey
                        </Button>
                    </Container>
                </form>
            </Container>
        </>
    );
}

export default QuestionDetails;