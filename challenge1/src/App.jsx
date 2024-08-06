import React, { useState, useEffect } from 'react';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';
import SearchBar from './SearchBar';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then(response => response.json()) //converts data to json
      .then(data => setTransactions(data));//updates transactions with the data
  }, []);

  const addTransaction = (transaction) => {
    fetch('http://localhost:3000/transactions', {//add a new transaction
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(transaction)
    })
      .then(response => response.json())
      .then(data => setTransactions([...transactions, data]));//updates transactions
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Bank of Flatiron</h1>
      <SearchBar onSearchChange={setSearch} />
      <TransactionForm onAddTransaction={addTransaction} />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
}

export default App;
  