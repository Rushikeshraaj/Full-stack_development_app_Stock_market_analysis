import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Markets from './pages/Markets';
import WatchlistPage from './pages/Watchlist';
import Portfolio from './pages/Portfolio';
import Header from './components/Header';
import Footer from './components/Footer';
import { MarketProvider } from './context/MarketContext';
import './App.css';

function App() {
  return (
    <MarketProvider>
      <BrowserRouter>
        <div className="app">
          <Header title="Stock Market Analysis" />
          <nav className="navbar">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/markets">Markets</NavLink>
            <NavLink to="/watchlist">Watchlist</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </nav>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/markets" element={<Markets />} />
              <Route path="/watchlist" element={<WatchlistPage />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </main>
          <Footer text="© 2026 Stock Market Analysis Platform" />
        </div>
      </BrowserRouter>
    </MarketProvider>
  );
}
export default App;
