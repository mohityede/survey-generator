import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    Container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '20px',
        alignItems: 'center',
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '20px'
    },
    input: {
        fontSize: '40px',
        margin: '20px',
        textAlign: 'center',
    },
    title: {
        fontWeight: 'bold'
    },
    button: {
        margin: theme.spacing(1),
    }
}));