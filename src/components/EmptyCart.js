import React from 'react';
import '../styles/ShoppingCart.css';

class EmptyCart extends React.Component {
  render() {
    return (
      <div className="empty-cart">
        <p
          data-testid="shopping-cart-empty-message"
        >
          Seu carrinho está vazio
        </p>
        <img
          src="https://stonehouseathenry.ie/images/empty-cart.png"
          alt="Sad empty cart"
          width="200"
        />
      </div>
    );
  }
}

export default EmptyCart;
