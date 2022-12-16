import React from 'react';
import { Link } from 'react-router-dom';
import ButtonShoppingCart from '../components/ButtonShoppingCart';
import CardProduct from '../components/CardProduct';
import EmptyCart from '../components/EmptyCart';
import { getShoppingCart, saveShoppingCart,
  removeProduct } from '../services/localstorage';
import '../styles/ShoppingCart.css';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      shoppingCart: [],
    };
  }

  componentDidMount() {
    this.handleGetShoppingCart();
  }

  handleGetShoppingCart = () => {
    const shoppingCart = getShoppingCart();
    this.setState({
      shoppingCart,
    });
  };

  handleRemoveProduct = (product) => {
    removeProduct(product);
    this.handleGetShoppingCart();
  };

  handleQuantity = ({ target }) => {
    const shoppingCart = getShoppingCart();
    const { id, name } = target;
    const findProduct = shoppingCart.find((product) => product.id === id);
    if (name === 'increase') {
      findProduct.quantity += 1;
    }
    if (name === 'decrease') {
      findProduct.quantity -= 1;
    }
    saveShoppingCart(shoppingCart);
    this.setState({
      shoppingCart,
    });
  };

  render() {
    const { shoppingCart } = this.state;
    return (
      <>
        <ButtonShoppingCart shoppingCart={ shoppingCart } />
        <div className="shopping-cart">
          { (shoppingCart?.length > 0) // a interrogação valida se não é undefined, evitando que o código quebre.
            ? (
              <>
                <ul className="cart-list">
                  {shoppingCart.map((product, i) => (
                    <li
                      className="list-item"
                      key={ i }
                      data-testid="shopping-cart-product-name"
                    >
                      <CardProduct
                        dataTestId="shopping-cart-product-quantity"
                        title={ product.title }
                        thumbnail={ product.thumbnail }
                        price={ product.price }
                        id={ product.id }
                      />
                      <div className="change-quantity">
                        <button
                          className="increase-decrease"
                          name="increase"
                          id={ product.id }
                          type="button"
                          data-testid="product-increase-quantity"
                          disabled={
                            (product.quantity === product.available_quantity)
                          }
                          onClick={ this.handleQuantity }
                        >
                          +
                        </button>
                        <p
                          data-testid="shopping-cart-product-quantity"
                        >
                          { product.quantity }
                        </p>
                        <button
                          className="increase-decrease"
                          name="decrease"
                          id={ product.id }
                          type="button"
                          data-testid="product-decrease-quantity"
                          disabled={
                            (product.quantity === 1)
                          }
                          onClick={ this.handleQuantity }
                        >
                          -
                        </button>
                      </div>
                      <button
                        className="button-remove"
                        type="button"
                        data-testid="remove-product"
                        onClick={ () => this.handleRemoveProduct(product) }
                      >
                        <span className="material-symbols-outlined">
                          remove_shopping_cart
                        </span>
                        Remover Produto
                      </button>
                    </li>))}
                </ul>
                <Link to="/checkout">
                  <button
                    className="button-checkout"
                    data-testid="checkout-products"
                    type="button"
                  >
                    <span className="material-symbols-outlined">
                      shopping_cart_checkout
                    </span>
                    Finalizar compra
                  </button>
                </Link>
              </>
            )
            : <EmptyCart />}
        </div>
      </>
    );
  }
}

export default ShoppingCart;
