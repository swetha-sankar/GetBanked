import {makeStyles} from "@material-ui/core";
import Login from "./Login";

function ApplicationItem(props) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <p>{props.props.type.toUpperCase()}</p>
            <p>{props.props.type} amount: {props.props.amount}</p>
            <p>status: {props.props.status}</p>
            <p>interest rate: {props.props.interest}%</p>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(3),

        border: "black",
        borderStyle: "solid",

        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '300px',
            borderRadius: 20,

        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(2),

        },
    },
}));

export default ApplicationItem;