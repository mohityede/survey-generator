import React, { useState } from 'react';
import { Radio, Container, RadioGroup, FormControlLabel, Button } from '@material-ui/core';
import useStyles from './style';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function ShowQuestion({ ques }) {
    const [quesInd, setQuesInd] = useState(0);
    const [value, setValue] = useState(null);
    const classes = useStyles();
    const history = useHistory();

    const submitQues = () => {
        const obj = {
            questionId: ques[quesInd]._id,
            optionId: value
        }
        const fetchSurvey = async () => {
            try {
                await axios.patch(`${process.env.REACT_APP_BASE_URL}/response`, obj);
            } catch (err) {
                toast.error("Something wrong!!")
            }
        }
        fetchSurvey();
        if (quesInd === ques.length - 1) {
            history.push("/")
        }
        setQuesInd(quesInd + 1);
    }

    const handleRedioSelect = (e) => {
        setValue(e.target.value);
    }
    return (

        <Container className={ classes.quesRoot }>
            <Container style={ { marginBottom: '20px' } }>
                Q. { ques[quesInd].question }
            </Container>
            <Container>
                <RadioGroup
                    name="options"
                    value={ value }
                    onChange={ handleRedioSelect }
                >
                    { ques[quesInd].options.map(opt => (
                        <FormControlLabel
                            key={ opt._id }
                            value={ opt._id }
                            control={ <Radio /> }
                            label={ opt.option }
                        />
                    )) }
                </RadioGroup>
            </Container>
            <Container>
                <Button
                    variant="contained"
                    className={ classes.saveBtn }
                    onClick={ () => submitQues() }
                    disabled={ (value === null) }
                >Save & Next</Button>
            </Container>
        </Container>
    );
}
