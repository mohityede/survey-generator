import React, { useState } from 'react';
import { FormGroup, Checkbox, Radio, TextField, Container, RadioGroup, FormControlLabel, Button } from '@material-ui/core';
import useStyles from './style';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function ShowQuestion({ ques }) {
    const [quesInd, setQuesInd] = useState(0);
    const [value, setValue] = useState(null);
    const classes = useStyles();
    const history = useHistory();
    console.log(ques);

    const submitQues = () => {
        const obj = {
            questionId: ques[quesInd]._id,
            optionId: value
        }
        console.log("submit obj", obj);
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
