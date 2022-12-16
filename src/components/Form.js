import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Details.css';

class Form extends React.Component {
  render() {
    const { handleOnChange, validationInputs, email, text } = this.props;
    return (
      <form className="evaluation-form">
        <h3>Opinião do Produto</h3>
        <label htmlFor="email">
          <input
            id="email"
            type="email"
            name="email"
            value={ email }
            placeholder="Digite seu e-mail"
            data-testid="product-detail-email"
            onChange={ handleOnChange }
            required
          />
        </label>
        <span>Nota:</span>
        <div className="rating">
          <label htmlFor="one" data-testid="1-rating">
            <input
              id="one"
              type="radio"
              name="rating"
              value="1"
              onChange={ handleOnChange }
              required
            />
            <span className="icon">★</span>
          </label>
          <label htmlFor="two" data-testid="2-rating">
            <input
              id="two"
              type="radio"
              name="rating"
              value="2"
              onChange={ handleOnChange }
              required
            />
            <span className="icon">★</span>
            <span className="icon">★</span>
          </label>
          <label htmlFor="three" data-testid="3-rating">
            <input
              id="three"
              type="radio"
              name="rating"
              value="3"
              onChange={ handleOnChange }
              required
            />
            <span className="icon">★</span>
            <span className="icon">★</span>
            <span className="icon">★</span>
          </label>
          <label htmlFor="four" data-testid="4-rating">
            <input
              id="four"
              type="radio"
              name="rating"
              value="4"
              onChange={ handleOnChange }
              required
            />
            <span className="icon">★</span>
            <span className="icon">★</span>
            <span className="icon">★</span>
            <span className="icon">★</span>
          </label>
          <label htmlFor="five" data-testid="5-rating">
            <input
              id="five"
              type="radio"
              name="rating"
              value="5"
              onChange={ handleOnChange }
              required
            />
            <span className="icon">★</span>
            <span className="icon">★</span>
            <span className="icon">★</span>
            <span className="icon">★</span>
            <span className="icon">★</span>
          </label>
        </div>
        <br />
        <label htmlFor="evaluation">
          <textarea
            data-testid="product-detail-evaluation"
            id="evaluation"
            name="text"
            value={ text }
            rows="4"
            cols="50"
            placeholder="Deixe seu comentário (opcional)"
            onChange={ handleOnChange }
          />
        </label>
        <br />
        <button
          className="button-evaluation"
          type="button"
          data-testid="submit-review-btn"
          onClick={ validationInputs }
        >
          Enviar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  handleOnChange: PropTypes.func,
  validationInputs: PropTypes.func,
  email: PropTypes.string,
  text: PropTypes.string,
}.isRequired;

export default Form;
