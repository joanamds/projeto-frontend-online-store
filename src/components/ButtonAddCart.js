import React from 'react';
import PropTypes from 'prop-types';
import '../styles/CardProduct.css';

class ButtonAddCart extends React.Component {
  render() {
    const { handleAddCart } = this.props;
    return (
      <button
        className="button-add-cart"
        type="button"
        name="addCart"
        data-testid="product-add-to-cart"
        onClick={ handleAddCart }
      >
        <span className="material-symbols-outlined">
          add_shopping_cart
        </span>
        Adicionar ao carrinho
      </button>
    );
  }
}

ButtonAddCart.propTypes = {
  handleAddCart: PropTypes.func,
}.isRequired;

export default ButtonAddCart;
