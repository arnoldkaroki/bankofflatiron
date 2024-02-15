// TransactionForm.js
import React, { useState } from 'react';

function TransactionForm({ onAddTransaction }) {
  const [newTransaction, setNewTransaction] = useState({ description: '', category: '', amount: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setNewTransaction(prevTransaction => ({
      ...prevTransaction,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAddTransaction(newTransaction);
    setNewTransaction({ description: '', category: '', amount: '' });
  };

  return (
    <div>
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="description" placeholder="Description" value={newTransaction.description} onChange={handleChange} />
        <input type="text" name="category" placeholder="Category" value={newTransaction.category} onChange={handleChange} />
        <input type="text" name="amount" placeholder="Amount" value={newTransaction.amount} onChange={handleChange} />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default TransactionForm;
