import React from 'react';
import PropTypes from 'prop-types';
import ButtonShoppingCart from '../components/ButtonShoppingCart';
import { getProductById } from '../services/api';
import CardProduct from '../components/CardProduct';
import { addEvaluation, addProduct,
  getEvaluationList, getShoppingCart, saveShoppingCart } from '../services/localstorage';
import '../styles/Rating.css';
import '../styles/CardProduct.css';
import '../styles/Details.css';
import ButtonAddCart from '../components/ButtonAddCart';
import Form from '../components/Form';

class Details extends React.Component {
  state = {
    result: {},
    email: '',
    text: '',
    rating: 0,
    validation: true,
    evaluationList: [],
  };

  componentDidMount() {
    this.renderProductandEvaluation();
    this.handleGetShoppingCart();
  }

  handleGetShoppingCart = () => {
    const shoppingCart = getShoppingCart();
    this.setState({
      shoppingCart,
    });
  };

  renderProductandEvaluation = async () => {
    const { match: { params: { id } } } = this.props;
    const request = await getProductById(id);
    const evaluationList = getEvaluationList(id);
    this.setState({
      result: request,
      evaluationList,
    });
  };

  handleAddCart = (result) => {
    const shoppingCart = getShoppingCart();
    const findProduct = shoppingCart.find((product) => product.id === result.id); // Se ja estiver no carrinho, retorna o produto/true.
    if (!findProduct) {
      result.quantity = 1;
      addProduct(result);
    }
    if (findProduct) {
      findProduct.quantity += 1;
      saveShoppingCart(shoppingCart);
    }
    this.setState({
      shoppingCart: getShoppingCart(),
    });
  };

  handleOnChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  validationInputs = (productId) => {
    const { email, text, rating } = this.state;
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/i;
    const validRating = rating > 0;
    if (emailRegex.test(email) && validRating) {
      const evaluation = { email, text, rating };
      addEvaluation(productId, evaluation);
      this.setState({
        validation: true,
        email: '',
        text: '',
        rating: 0,
        evaluationList: getEvaluationList(productId),
      });
    } else {
      this.setState({
        validation: false,
      });
    }
  };

  render() {
    const { result, validation, email, text, evaluationList, shoppingCart } = this.state;
    return (
      <div>
        <ButtonShoppingCart shoppingCart={ shoppingCart } />
        <CardProduct
          title={ result.title }
          thumbnail={ result.thumbnail }
          price={ result.price }
          id={ result.id }
        />
        <p className="brand">
          {result.attributes?.some((att) => att.id === 'BRAND')
          && `Marca: ${result.attributes?.find((att) => att.id === 'BRAND').value_name}`}
          {result.attributes?.some((att) => att.id === 'AUTHOR')
            && `Autor: 
            ${result.attributes?.find((att) => att.id === 'AUTHOR').value_name}`}
        </p>
        <div className="product-pictures">
          {result.pictures?.map((pic, i) => (<img
            key={ i }
            src={ pic.secure_url }
            alt={ pic.id }
          />))}
        </div>
        <ButtonAddCart
          handleAddCart={ () => this.handleAddCart(result) }
        />
        <Form
          validationInputs={ () => this.validationInputs(result.id) }
          handleOnChange={ this.handleOnChange }
          email={ email }
          text={ text }
        />
        {!validation && <p data-testid="error-msg">Campos inválidos</p>}
        <ul className="comments-list">
          <h2>Comentários</h2>
          {
            evaluationList?.map((evaluation, i) => (
              <li
                className="comment"
                key={ i }
              >
                <p data-testid="review-card-email">{evaluation.email}</p>
                <p data-testid="review-card-evaluation" className="text-comment">
                  {`Comentário: ${evaluation.text}`}
                </p>
                <p data-testid="review-card-rating">{`Nota: ${evaluation.rating}`}</p>
              </li>))
          }
        </ul>
      </div>
    );
  }
}
Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;
export default Details;
