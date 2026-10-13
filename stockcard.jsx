function StockCard({ symbol, price, change, volume }) {
  const isPositive = change >= 0

  return (
    <div className="stock-card">
      <div>
        <h3>{symbol}</h3>
        <p>Price: ₹{price}</p>
        <p>Vol {volume}</p>
      </div>
      <p className={isPositive ? "up" : "down"}>
        {isPositive ? "+" : ""}
        {change}%
      </p>
    </div>
  )
}

export default StockCard