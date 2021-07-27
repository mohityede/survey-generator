import React from 'react';
import { FormGroup, Checkbox, Radio, TextField, Container, RadioGroup, FormControlLabel } from '@material-ui/core';
import useStyles from './style';

export default function ShowQuestion({ ques }) {
    const classes = useStyles();

    return (
        <Container className={classes.quesRoot}>
            <Container style={{ marginBottom: '20px' }}>
                Q. {ques.question}{ques.isRequired && '*'}
            </Container>
            {(ques.type === 'text') && <Container>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </Container>}
            {(ques.type === 'selectMultiple') && <Container>

                <FormGroup>
                    {/* {ques.options.length} */}
                    {ques.options.map(opt => (
                        <FormControlLabel
                            control={<Checkbox />}
                            label={opt.value}
                        />
                    ))}


                </FormGroup>
            </Container>}
            {(ques.type === 'selectOne') && <Container>
                <RadioGroup aria-label="gender" name="gender1" >
                    {ques.options.map(opt => (
                        <FormControlLabel value={opt.value} control={<Radio />} label={opt.value} />
                    ))}
                </RadioGroup>
            </Container>}
        </Container>
    );
}
