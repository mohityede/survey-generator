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
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: '20px'
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