import React, { useState, useEffect } from 'react';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';
import SearchBar from './SearchBar';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:8001/transactions')
      .then(response => response.json())
      .then(data => {
        setTransactions(data.transactions);
        setFilteredTransactions(data.transactions);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleAddTransaction = (newTransaction) => {
    setTransactions(prevTransactions => [...prevTransactions, newTransaction]);
    setFilteredTransactions(prevTransactions => [...prevTransactions, newTransaction]);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
    const filtered = transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>bankofflatiron</h1>
      </header>
      <main>
        <TransactionForm onAddTransaction={handleAddTransaction} />
        <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        <TransactionTable transactions={filteredTransactions} />
      </main>
    </div>
  );
}

export default App;
