import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Checkout.css';

class FormCheckout extends React.Component {
  render() {
    const { handleOnChange } = this.props;
    return (
      <form className="checkout-form">
        <label htmlFor="name">
          Nome completo
          <input
            id="name"
            type="text"
            data-testid="checkout-fullname"
            onChange={ handleOnChange }
            required
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            id="email"
            type="email"
            data-testid="checkout-email"
            onChange={ handleOnChange }
            required
          />
        </label>
        <label htmlFor="cpf">
          CPF
          <input
            id="cpf"
            type="text"
            data-testid="checkout-cpf"
            onChange={ handleOnChange }
            required
          />
        </label>
        <label htmlFor="full-name">
          Telefone
          <input
            id="phone"
            type="text"
            data-testid="checkout-phone"
            onChange={ handleOnChange }
            required
          />
        </label>
        <label htmlFor="cep">
          CEP
          <input
            id="cep"
            type="text"
            data-testid="checkout-cep"
            onChange={ handleOnChange }
            required
          />
        </label>
        <label htmlFor="address">
          Endereço
          <input
            id="address"
            type="text"
            data-testid="checkout-address"
            onChange={ handleOnChange }
            placeholder="Nome da Rua, Bairro - Número"
            required
          />
        </label>
        <fieldset>
          <legend>Método de pagamento</legend>
          <label htmlFor="ticket">
            <input
              id="ticket"
              name="payment"
              type="radio"
              data-testid="ticket-payment"
              onChange={ handleOnChange }
            />
            <img
              src="https://www.growdeck.com.br/wp-content/uploads/2019/06/boleto-icon.png"
              alt="Boleto"
              width="50"
            />
            Boleto
          </label>
          <label htmlFor="visa">
            <input
              id="visa"
              name="payment"
              type="radio"
              data-testid="visa-payment"
              onChange={ handleOnChange }
            />
            <img
              src="https://logodownload.org/wp-content/uploads/2016/10/visa-logo-1.png"
              alt="Visa"
              width="50"
            />
            Visa
          </label>
          <label htmlFor="master">
            <input
              id="master"
              name="payment"
              type="radio"
              data-testid="master-payment"
              onChange={ handleOnChange }
            />
            <img
              src="https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo-7.png"
              alt="MasterCard"
              width="50"
            />
            Mastercard
          </label>
          <label htmlFor="elo">
            <input
              id="elo"
              name="payment"
              type="radio"
              data-testid="elo-payment"
              onChange={ handleOnChange }
            />
            <img
              src="https://logodownload.org/wp-content/uploads/2017/04/elo-logo-1-1.png"
              alt="Elo"
              width="50"
            />
            Elo
          </label>
        </fieldset>
      </form>
    );
  }
}

FormCheckout.propTypes = {
  handleOnChange: PropTypes.func,
}.isRequired;

export default FormCheckout;
