import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ButtonShoppingCart.css';
import PropTypes from 'prop-types';

class ButtonShoppingCart extends React.Component {
  render() {
    const { shoppingCart } = this.props;
    return (
      <div className="cart-icon">
        <Link
          to="/"
        >
          <img
            className="logo"
            src="https://logosvg.com.br/logos/mercado-livre-88.png"
            width="200"
            alt="Shopping cart"
          />
        </Link>
        <Link
          className="link-shopping-cart"
          data-testid="shopping-cart-button"
          to="/shopping-cart"
        >
          <span className="material-symbols-outlined">
            shopping_cart
          </span>
          <span
            className="quantity-number"
            data-testid="shopping-cart-size"
          >
            {shoppingCart?.reduce((acc, curr) => {
              acc += curr.quantity;
              return Number(acc);
            }, 0)}
          </span>
        </Link>
      </div>
    );
  }
}

ButtonShoppingCart.propTypes = {
  shoppingCart: PropTypes.array,
}.isRequired;

export default ButtonShoppingCart;
