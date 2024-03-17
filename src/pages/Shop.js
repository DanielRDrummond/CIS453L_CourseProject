import React from 'react';

function Shop() {
  return (
    <div>
      <section className="shop">
        <h2>Shop</h2>
        <div className="products">
          <div className="product">
            <h3>Metal Shed</h3>
            <p>Description of Product 1</p>
            <button>Add to Cart</button>
          </div>
          <div className="product">
            <h3>Wooden Shed</h3>
            <p>Description of Product 2</p>
            <button>Add to Cart</button>
          </div>
          {/* Add more products as needed as I work through the project */}
        </div>
      </section>
    </div>
  );
}

export default Shop;
