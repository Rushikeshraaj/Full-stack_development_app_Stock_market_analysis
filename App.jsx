// src/components/StockList.jsx
import { useState, useEffect } from 'react';

function StockList() {
  // 1. State for stocks and loading
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. useEffect – runs only on mount (empty dependency array)
  useEffect(() => {
    // Simulate API call with setTimeout
    const timer = setTimeout(() => {
      setStocks([
        { id: 1, symbol: 'RELIANCE', price: 2850.40, change: 1.25 },
        { id: 2, symbol: 'TCS', price: 3850.20, change: -0.45 }
      ]);
      setLoading(false);
    }, 1500); // 1.5 second delay

    // 3. Cleanup function – runs when component unmounts
    return () => clearTimeout(timer);
  }, []); // empty array → run only once on mount

  // 4. Conditional rendering while loading
  if (loading) {
    return <p>Loading market data...</p>;
  }

  // 5. Render the list after data is loaded
  return (
    <div className="stock-list">
      <h2>Market Data (loaded with useEffect)</h2>
      <ul>
        {stocks.map((stock) => (
          <li key={stock.id}>
            {stock.symbol} – ₹{stock.price.toFixed(2)}{' '}
            <span style={{ color: stock.change >= 0 ? 'green' : 'red' }}>
              {stock.change >= 0 ? '+' : ''}{stock.change}%
            </span>
          </li>
        ))}
      </ul>
      <p style={{ fontSize: '0.9rem', color: '#666' }}>
        Loaded on mount via useEffect • Cleanup function demonstrated on unmount
      </p>
    </div>
  );
}

export default StockList;