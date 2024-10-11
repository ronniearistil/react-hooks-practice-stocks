import React from "react";

function Stock({ stock, handleStockClick }) {
  return (
    <div className="card" onClick={() => handleStockClick(stock)}>
      <div className="card-body">
        <h5 className="card-title">{stock.name}</h5>
        <p className="card-text">{stock.price}</p>
      </div>
    </div>
  );
}

export default Stock;

