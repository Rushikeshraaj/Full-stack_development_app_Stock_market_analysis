import { createContext, useContext, useReducer } from 'react';

const MarketContext = createContext(null);

const initialStocks = [
  { symbol: 'RELIANCE', price: 2850.5, change: 1.25, volume: '2.4M' },
  { symbol: 'TCS', price: 3920.75, change: -0.45, volume: '1.1M' },
  { symbol: 'INFY', price: 1680.2, change: 0.85, volume: '3.2M' },
  { symbol: 'HDFCBANK', price: 1650.0, change: -0.12, volume: '4.5M' },
  { symbol: 'ICICIBANK', price: 1120.4, change: 2.1, volume: '2.8M' },
  { symbol: 'WIPRO', price: 480.3, change: 0.6, volume: '1.5M' },
  { symbol: 'SBIN', price: 780.9, change: -0.3, volume: '5.1M' },
];

function marketReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      if (state.watchlist.some((stock) => stock.symbol === action.stock.symbol)) return state;
      return { ...state, watchlist: [...state.watchlist, action.stock] };
    case 'REMOVE':
      return { ...state, watchlist: state.watchlist.filter((stock) => stock.symbol !== action.symbol) };
    default:
      return state;
  }
}

export function MarketProvider({ children }) {
  const [state, dispatch] = useReducer(marketReducer, { stocks: initialStocks, watchlist: [initialStocks[5]] });
  return (
    <MarketContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MarketContext.Provider>
  );
}

export function useMarket() {
  const context = useContext(MarketContext);
  if (!context) throw new Error('useMarket must be used inside MarketProvider');
  return context;
}
