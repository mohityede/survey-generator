import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    navRoot: {
        flexGrow: 1,
    },
    cardRoot: {
        width: "300px",
        height: "170px",
        margin: '10px',
        backgroundSize: '200%',
        background: '#ebf5fc',
        boxShadow: 'inset 5px 5px 5px rgba(0,0,0,0.5), inset -5px -5px 5px rgba(255,255,255,0.5),5px 5px 5px rgba(0,0,0,0.5), -5px -5px 5px rgba(255,255,255,0.5)',
        transition: '0.6s',
        '&:hover': {
            transform: 'translateY(-5px)',
            boxShdow: '0 5px 20px rgba(0,0,0,0.4)',
            background: 'linear-gradient(90deg,white,#3f51b5)',
            cursor: 'pointer',
        }
    },
    cardTitle: {
        color: 'rgb(63, 81, 181)'
    },
    quesRoot: {
        marginTop: '30px'
    },
    menuButton: {
        marginRight: theme.spacing(2),
        marginLeft: '60px'
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