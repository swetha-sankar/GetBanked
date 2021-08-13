function ApplicationItem(props) {

    return (
        <div>
            <p>{props.props.type}</p>
            <p>{props.props.type} amount: {props.props.amount}</p>
            <p>status: {props.props.status}</p>
            <p>interest rate: {props.props.interest}%</p>
        </div>
    )

}

export default ApplicationItem;