import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minWidth: 275,
        maxHeight: 250,
        margin: '10px',
    },
    menuButton: {
        marginRight: theme.spacing(2),
        marginLeft: '30px'
    },
    title: {
        flexGrow: 1,
        color: 'white',
        textDecorationLine: 'none',
    },
    titleP: {
        fontSize: 14,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    pos: {
        marginBottom: 12,
    },
}));