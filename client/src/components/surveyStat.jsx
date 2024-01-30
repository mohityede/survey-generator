import React from "react";
import { Container, Box } from '@material-ui/core';
import useStyles from './style';

function SurveyStat({ questions }) {
    const classes = useStyles();
    const getTotalVotes = (q) => {
        let sum = 0;
        q.options.map((opt) => sum += opt.voteCounts);
        return sum
    }
    return (
        <Container>
            { questions.map((q) => {
                return (
                    <div key={ q._id }>
                        <Container>
                            <span>Q. { q.question }?</span>
                        </Container>
                        <Container>
                            <span style={ { fontSize: '15px', fontWeight: 'bold' } }>Total Votes:{ getTotalVotes(q) } votes</span>
                        </Container>
                        <Container>
                            { q.options.map((opt) => (
                                <Box key={ opt._id } className={ classes.optionBox }>
                                    <span>{ opt.option }</span>
                                    <span style={ { fontSize: '15px' } }>{ getTotalVotes(q) === 0 ? 0 : ((opt.voteCounts / getTotalVotes(q)) * 100) }%</span>
                                    <span style={ { fontSize: '15px' } }>{ opt.voteCounts } votes</span>
                                </Box>
                            )) }
                        </Container>
                    </div>
                )
            }) }
        </Container>
    )
}

export default SurveyStat;