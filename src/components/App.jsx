import React, { useState, useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortOption, setSortOption] = useState(""); // For sorting
  const [filterOption, setFilterOption] = useState(""); // For filtering

  // Fetch stocks from the API
  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((response) => response.json())
      .then((data) => setStocks(data));
  }, []);

  // Add a stock to the portfolio
  const addToPortfolio = (stock) => {
    if (!portfolio.includes(stock)) {
      setPortfolio([...portfolio, stock]);
    }
  };

  // Remove a stock from the portfolio
  const removeFromPortfolio = (stock) => {
    setPortfolio(portfolio.filter((item) => item.id !== stock.id));
  };

  // Sort stocks based on the selected option
  const sortedStocks = () => {
    if (sortOption === "Alphabetically") {
      return [...stocks].sort((a, b) => a.ticker.localeCompare(b.ticker));
    } else if (sortOption === "Price") {
      return [...stocks].sort((a, b) => a.price - b.price);
    }
    return stocks;
  };

  // Filter stocks based on the selected filter
  const filteredStocks = () => {
    if (filterOption) {
      return sortedStocks().filter((stock) => stock.type === filterOption);
    }
    return sortedStocks();
  };

  return (
    <div>
      <Header />
      <MainContainer
        stocks={filteredStocks()}
        portfolio={portfolio}
        addToPortfolio={addToPortfolio}
        removeFromPortfolio={removeFromPortfolio}
        setSortOption={setSortOption}
        setFilterOption={setFilterOption}
      />
    </div>
  );
}

export default App;
