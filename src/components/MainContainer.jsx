import React from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({
  stocks,
  portfolio,
  addToPortfolio,
  removeFromPortfolio,
  setSortOption,
  setFilterOption,
}) {
  return (
    <div>
      <SearchBar setSortOption={setSortOption} setFilterOption={setFilterOption} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} handleStockClick={addToPortfolio} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} handleStockClick={removeFromPortfolio} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
