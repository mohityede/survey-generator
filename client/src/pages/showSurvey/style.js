import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    Container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '40px',
        alignItems: 'center',
        fontSize: '20px'
    },
    btnContainer: {
        display: 'flex',
        // flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '20px'
    },
    surveyBtn: {
        width: '150px',
        margin: '10px',
        background: '#96E9C6',
        transition: '0.6s',
        '&:hover': {
            transform: 'translateY(-5px)',
            boxShdow: '0 5px 20px rgba(0,0,0,0.4)',
            background: '#3f51b5',
            color: 'white',
            cursor: 'pointer',
        }
    },
    input: {
        fontSize: '40px',
        margin: '20px',
        textAlign: 'left',
    },
    title: {
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'center',
        marginBottom: '10px'
    },
    button: {
        margin: theme.spacing(1),
    },
    description: {
        fontSize: '15px',
        color: 'gray',
        textAlign: 'center',

    },
    details: {
        width: '50%',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    }
}));