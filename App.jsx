// src/components/Watchlist.jsx  (or pages/Watchlist.jsx)
import { useState } from 'react';

function Watchlist() {
  // 1. State for the list of stocks
  const [stocks, setStocks] = useState([
    { id: 1, symbol: 'TCS', price: 3850.20 }
  ]);

  // 2. State for controlled form inputs
  const [symbol, setSymbol] = useState('');
  const [price, setPrice] = useState('');

  // 3. Add a new stock
  const addStock = () => {
    if (!symbol || !price) return; // simple validation

    setStocks([
      ...stocks,
      {
        id: Date.now(),               // unique id
        symbol: symbol.toUpperCase(),
        price: parseFloat(price)
      }
    ]);

    // clear the form
    setSymbol('');
    setPrice('');
  };

  // 4. Remove a stock by id
  const removeStock = (id) => {
    setStocks(stocks.filter(s => s.id !== id));
  };

  return (
    <div className="watchlist">
      <h2>My Watchlist (Live State)</h2>

      {/* Controlled Form */}
      <div className="add-form">
        <input
          type="text"
          placeholder="Symbol (e.g. RELIANCE)"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button onClick={addStock}>Add Stock</button>
      </div>

      {/* Live count */}
      <p>Current watchlist items (state): {stocks.length}</p>

      {/* List of stocks */}
      <ul>
        {stocks.map((stock) => (
          <li key={stock.id}>
            {stock.symbol} – ₹{stock.price.toFixed(2)}
            <button onClick={() => removeStock(stock.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Watchlist;