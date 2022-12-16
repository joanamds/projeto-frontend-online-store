import React from 'react';
import { Redirect } from 'react-router-dom';
import CardProduct from '../components/CardProduct';
import FormCheckout from '../components/FormCheckout';
import { getShoppingCart } from '../services/localstorage';
import '../styles/Checkout.css';
import '../styles/CardProduct.css';
import ButtonShoppingCart from '../components/ButtonShoppingCart';

class Checkout extends React.Component {
  constructor() {
    super();

    this.state = {
      shoppingCart: [],
      name: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
      payment: '',
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

  handleOnChange = ({ target }) => {
    const { id, value, name, type } = target;
    if (type === 'radio') {
      this.setState({
        [name]: id,
      });
    }
    if (type !== 'radio') {
      this.setState({
        [id]: value,
      });
    }
  };

  validationCheckout = () => {
    const { name, email, cpf, phone, cep, address, payment } = this.state;

    const cpfNumber = 11;
    const cepNumber = 8;
    const minPhone = 8;
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/i;
    const validName = name?.length > 0;
    const validCpf = cpf.length === cpfNumber;
    const validCep = cep.length === cepNumber;
    const validAddress = address.length > 0;
    const validPhone = phone.length >= minPhone;
    const validPayment = payment.length > 0;

    if (emailRegex.test(email)
      && validAddress
      && validName
      && validCep
      && validCpf
      && validPhone
      && validPayment) {
      this.setState({
        validation: true,
      }, () => localStorage.setItem('shopping_cart', JSON.stringify([])));
    } else {
      this.setState({
        validation: false,
      });
    }
  };

  render() {
    const { shoppingCart, validation } = this.state;
    return (
      <>
        <ButtonShoppingCart />
        <h2 className="checkout-title">Revise seus produtos</h2>
        <div>
          <ul className="checkout-list">
            {shoppingCart?.map((product, i) => (
              <li
                className="list-item"
                key={ i }
                data-testid="shopping-cart-product-name"
              >
                <CardProduct
                  dataTestId="shopping-cart-product-quantity"
                  title={ product.title }
                  thumbnail={ product.thumbnail }
                  price={ Number(product.price) * product.quantity }
                  id={ product.id }
                />
                <p className="quantity">
                  { `Quantidade: ${product.quantity}` }
                </p>
              </li>))}
          </ul>
        </div>
        <div className="total-item">
          <p>Total</p>
          {shoppingCart.reduce((acc, curr) => {
            acc += Number(curr.price) * curr.quantity;
            return Number(acc);
          }, [])}
        </div>
        <FormCheckout handleOnChange={ this.handleOnChange } />
        {validation !== undefined
        && validation === false && <p data-testid="error-msg">Campos inválidos</p>}
        {validation === true && <Redirect to="/" />}
        <button
          className="button-shop"
          data-testid="checkout-btn"
          type="button"
          onClick={ this.validationCheckout }
        >
          Comprar!
        </button>
      </>
    );
  }
}
export default Checkout;
