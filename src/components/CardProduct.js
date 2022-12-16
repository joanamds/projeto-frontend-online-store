import React from 'react';
import PropTypes from 'prop-types';
import '../styles/CardProduct.css';

class CardProduct extends React.Component {
  render() {
    const { title, thumbnail, price, shipping } = this.props;
    return (
      <div className="card-product">
        <p data-testid="product-detail-name">{ title }</p>
        <img
          data-testid="product-detail-image"
          src={ thumbnail }
          alt={ title }
        />
        <p data-testid="product-detail-price">
          { `R$${price}`}
        </p>
        {shipping
        && (
          <div className="free-shipping-message">
            <span className="material-symbols-outlined">
              local_shipping
            </span>
            <p data-testid="free-shipping">
              Frete gratis!
            </p>
          </div>)}
      </div>
    );
  }
}

CardProduct.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.string,
  id: PropTypes.string,
  shipping: PropTypes.bool,
}.isRequired;

export default CardProduct;
