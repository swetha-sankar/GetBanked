# API

In order to keep track of the accounts and transactions in the system, we have utilized a Firebase Realtime Database. 

## Data Organization

At the top level of our database we have 4 major fields: `accounts`, `transactions`, `funds` and `withdrawals`.

```
get-banked-62777-default-rtdb
    |- accounts
    |- transactions
    |- funds: 500
    |_ withdrawals: 100
```

### `Accounts`

`Accounts` is an object of account objects, each of which contains the necessary information about the user and their investments/loans. Below is an example of what the `account` object might look like.

```
accounts
    |- rohanuttamsingh
    |- swethasankar
    |- prathamrawat
    |_ alicewang65
```


 An example the structure of each account object is below:

```
alicewang65
    |- email: "ayw2006@nyu.edu"
    |- id: 3
    |- name: "Alice Wang"
    |- password: "testpassword"
    |- total: 200
    |- transactions
    |    |- 0: "account creation"
    |    |- 2: "investment"
    |    |_ 3: "investment"
    |_ type: "investor"
```

### `Transactions`
`Transactions` is an object of transaction objects (either an investment or loan), each of which contains information about the transaction, such as associated account, amount, interest rate, duration, etc. Below is an example of the organization of the `transaction` object:

```
transactions
    |- 2
    |- 3
    |_ 4
```

Here's an example of what a transaction object might look like:

```
    3
    |- account: 3
    |- amount: 248
    |- interest: 2
    |- period: 12
    |- status: "active"
    |_ type: "investment"
```

***
Created by Alice Wang and Rohan Uttamsingh. <br>
Last Updated 8/12/2021.