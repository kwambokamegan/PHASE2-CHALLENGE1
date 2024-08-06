import React, { useState } from 'react';

function AddTransactionForm({ onAddTransaction }) {
  const [form, setForm] = useState({
    date: '',
    description: '',
    category: '',
    amount: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3001/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
      .then(response => response.json())
      .then(newTransaction => {
        onAddTransaction(newTransaction);
        setForm({
          date: '',
          description: '',
          category: '',
          amount: ''
        });
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <input
        type="text"
        name="category"
        value={form.category}
        onChange={handleChange}
        placeholder="Category"
        required
      />
      <input
        type="number"
        name="amount"
        value={form.amount}
        onChange={handleChange}
        placeholder="Amount"
        required
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default AddTransactionForm;