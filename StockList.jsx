import StockCard from './StockCard';

const sampleStocks = [
  { symbol: 'RELIANCE', price: 2850.5, change: 1.25, volume: '2.4M' },
  { symbol: 'TCS', price: 3920.75, change: -0.45, volume: '1.1M' },
  { symbol: 'INFY', price: 1680.2, change: 0.85, volume: '3.2M' },
  { symbol: 'HDFCBANK', price: 1650.0, change: -0.12, volume: '4.5M' },
  { symbol: 'ICICIBANK', price: 1120.4, change: 2.1, volume: '2.8M' },
];

function StockList() {
  return (
    <div className="stock-list">
      {sampleStocks.map((stock) => (
        <StockCard
          key={stock.symbol}
          symbol={stock.symbol}
          price={stock.price}
          change={stock.change}
          volume={stock.volume}
        />
      ))}
    </div>
  );
}

export default StockList;
