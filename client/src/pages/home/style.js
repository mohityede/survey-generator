import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    Container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: '20px',
        flexWrap: 'wrap',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column-reverse',
            alignItems: 'center',
        },
    },
    heading: {
        textAlign: 'center',
        fontSize: '30px',
        marginTop: '20px',
        fontWeight: 'bold'
    }
}));