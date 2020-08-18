import * as React from "react";

export const ProductListings = () => {
  return (
    <div className="card border-secondary mb-3" style={{ width: "18em" }}>
      <img src="..." className="card-img-top" alt="..." />
      <span className="badge badge-light">Category</span>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
};