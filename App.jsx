import Header from "./component/header";
import Footer from "./component/footer";
import StockCard from "./component/stockcard";
import "./App.css";

const stocks = [
  { symbol: "RELIANCE", price: "2,850.40", change: 1.25, volume: "4.2M" },
  { symbol: "TCS", price: "3,850.20", change: -0.45, volume: "1.8M" },
  { symbol: "INFY", price: "1,520.75", change: 0.87, volume: "3.4M" },
  { symbol: "HDFCBANK", price: "1,680.30", change: 0.31, volume: "2.1M" },
]

function App() {
  return (
    <div className="app">
      <Header title="Available Stocks" />
      <main className="list">
        {stocks.map((stock) => (
          <StockCard
            key={stock.symbol}
            symbol={stock.symbol}
            price={stock.price}
            change={stock.change}
            volume={stock.volume}
          />
        ))}
      </main>
      <Footer text="Reusable StockCard component | React + Vite" />
    </div>
  )
}

export default App