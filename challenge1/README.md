# PHASE 2 CODE CHALLENGE 1

## Bank of flat iron

The application allows one to view their transactions , add more transactions, fill and submit a form to add new transactions to the table and it posts the new transaction to the backend API . 

It filters transactions so that only those with a matching description of the search item will be shown in the table.

## Features

1. One can view transactions
2. One can fill out a form to add transactions

## Setting up

1. Cloning the repository

git clone `https://github.com/kwambokamegan/PHASE2-CHALLENGE1/tree/master/challenge1`

cd challenge-1

2. Running npm install to install dependencies

3. Local Environment
 
 Ran json-server --watch db.json to run the  local environ meant backend.

 Ran  npm run dev to start the react application.

 ## Application Summary

 1. Viewing transactions 

 There is a table with transactions fetched from the backend

2. Adding a new transactions

* Fill out the form with the date, description, category, and amount.

* Submit the form to add the transaction to the table and persist it to the backend.

3. Filtering transactions 

The search bar filters transactions by description.

### API endpoints

* GET/transactions : fetches all transactions

* POST/transactions :adds a new 

## FILES 

## App.js

* Manages the state and behavior of the application

Functions :

1. Fetches transactions from the backend API.
2. Manages the state for transactions and search input.
3. Handles adding new transactions and filtering the list.
4. Renders SearchBar, TransactionForm, and TransactionTable components.
  

## TransactionTable.js

* Displays a table of transactions

Functions:

1. Manages form state (date, description, category, amount).
2. Handles input changes and form submission.
3. Calls the onAddTransaction prop with the form data when the form is submitted.

## SearchBar.js

* Has a search input for filtering transactions

Functions:

1. Calls the onSearchChange prop whenever the input value changes, allowing the parent component to update the search state.

## App.css

* Allows the styling of the applications

Functions:

Has styles for the application

## db.json

Provides mock data for the backend API.


## Author 

Megan Kwamboka  Nyakina

## Date

8th August 2024

##   Vercel Link

[Link] ()









