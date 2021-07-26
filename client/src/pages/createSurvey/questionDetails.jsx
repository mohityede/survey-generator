import React from 'react';
import { toast } from 'react-toastify';
import { Container, Typography, MenuItem, TextField, Button, Select, InputLabel } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import useStyles from './style';

function QuestionDetails() {
    const classes = useStyles();
    const [question, setQues] = React.useState('');
    const [required, setRequired] = React.useState('');
    const [type, setType] = React.useState('');
    const [options, setOptions] = React.useState([{ value: null }]);

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

    function handleSubmit(e) {
        e.preventDefault();
        if (question !== '' && required !== '' && type !== '') {
            const output = {
                question,
                required,
                type,
                options
            }
            console.log(output);
            setQues('');
            setRequired('');
            setType('');
            toast.success("Question succefully added..")
        } else {
            toast.error("Please fill all required field!!")
        }
    }

    function handleSave() {
        console.log('submitted')

    }

    function handleques(event) {
        setQues(event.target.value);
    }

    function handleRequired(event) {
        setRequired(event.target.value);
    }

    function handleType(event) {
        setType(event.target.value);
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
                        <TextField onChange={handleques} value={question} required fullWidth label="Question" />
                    </Container>

                    <Container className={classes.input}>
                        <InputLabel id="demo-simple-select-label">Required</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            value={required}
                            fullWidth
                            onChange={handleRequired}
                        >
                            {/* @ts-ignore */}
                            <MenuItem value={true}>Yes</MenuItem>
                            {/* @ts-ignore */}
                            <MenuItem value={false}>No</MenuItem>
                        </Select>
                    </Container>

                    <Container className={classes.input}>
                        <InputLabel id="demo-simple-select-label">type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            value={type}
                            fullWidth
                            onChange={handleType}
                        >
                            <MenuItem value="text">Text</MenuItem>
                            <MenuItem value="selectOne">Select One</MenuItem>
                            <MenuItem value="selectMultiple">Select Multiple</MenuItem>
                        </Select>
                    </Container>

                    {(type == "selectOne" || type == "selectMultiple") && <Container className={classes.input}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            onClick={() => handleAdd()}
                            className={classes.button}
                            startIcon={<AddIcon />}
                        >
                            Add Option
                                </Button>

                        {options.map((field, idx) => {
                            return (
                                <Container key={`${field}-${idx}`}>
                                    <TextField onChange={e => handleChange(idx, e)} required label={`option ${idx}`} className={classes.input} />
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        size="small"
                                        onClick={() => handleRemove(idx)}
                                        className={classes.button}
                                        startIcon={<CancelIcon />}
                                    >
                                    </Button>
                                </Container>
                            );
                        })}
                    </Container>}

                    <Container className={classes.input}>
                        <Button type="submit" color="primary" aria-label="add">
                            <AddCircleOutlineIcon />
                        </Button>
                    </Container>

                    <Container className={classes.input}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            className={classes.button}
                            startIcon={<SaveIcon />}
                            type='submit'
                            onClick={handleSave}
                        >
                            Save Survey
                                </Button>
                    </Container>
                </form>
            </Container>
        </>
    );
}

export default QuestionDetails;