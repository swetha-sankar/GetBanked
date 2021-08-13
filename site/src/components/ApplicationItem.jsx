import {makeStyles} from "@material-ui/core";

function ApplicationItem({ txn }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <p className="blurb-home">{txn.type.toUpperCase()}</p>
            <p className="text-home mb-0">{txn.type} amount: {txn.amount}</p>
            <p className="text-home mb-0">status: {txn.status}</p>
            <p className="text-home">interest rate: {txn.interest}%</p>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: theme.spacing(3),
        padding: theme.spacing(3),

        border: "2px solid #E38278",
        borderRadius: "50px",

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