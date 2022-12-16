import React from 'react';
import { Link } from 'react-router-dom';
import ButtonShoppingCart from '../components/ButtonShoppingCart';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import CardProduct from '../components/CardProduct';
import { addProduct, getShoppingCart, saveShoppingCart } from '../services/localstorage';
import '../styles/Home.css';
import ButtonAddCart from '../components/ButtonAddCart';

class Home extends React.Component {
  state = {
    listCategories: [],
    shoppingCart: [],
  };

  componentDidMount() {
    this.handleGetCategories();
    this.handleGetShoppingCart();
  }

  handleGetCategories = async () => {
    const listCategories = await getCategories();
    this.setState({
      listCategories,
    });
  };

  handleGetShoppingCart = () => {
    const shoppingCart = getShoppingCart();
    this.setState({
      shoppingCart,
    });
  };

  handleSearchChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  };

  onSearchClick = async () => {
    const { search } = this.state;
    if (search) {
      const request = await getProductsFromCategoryAndQuery(undefined, search);
      const { results } = request;
      this.setState({
        results,
      });
    }
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

  onClickCategory = async ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
    const request = await getProductsFromCategoryAndQuery(value);
    const { results } = request;
    this.setState({
      results,
    });
  };

  render() {
    const { listCategories, results, shoppingCart } = this.state;
    return (
      <>
        <ButtonShoppingCart shoppingCart={ shoppingCart } />
        <label htmlFor="search">
          <p
            className="home-message"
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <input
            className="input-search"
            data-testid="query-input"
            type="text"
            id="search"
            name="search"
            onChange={ this.handleSearchChange }
          />
          <button
            className="input-button"
            type="button"
            data-testid="query-button"
            onClick={ this.onSearchClick }
          >
            Pesquisar
          </button>
        </label>
        <div className="page-content">
          <aside className="list-category">
            <h2 className="category-title">Categorias</h2>
            {listCategories.map((category) => (
              <li key={ category.id }>
                <label htmlFor={ category.id }>
                  <input
                    id={ category.id }
                    value={ category.id }
                    name="category"
                    type="radio"
                    data-testid="category"
                    onClick={ this.onClickCategory }
                  />
                  {category.name}
                </label>
              </li>
            ))}
          </aside>
          <section className="result-content">
            { results !== undefined
              ? (
                <ul className="results-list">
                  {results.map((result) => (
                    <div className="list-item" key={ result.id }>
                      <li
                        key={ result.id }
                        data-testid="product"
                      >
                        <CardProduct
                          title={ result.title }
                          thumbnail={ result.thumbnail }
                          price={ result.price }
                          id={ result.id }
                          shipping={ result.shipping.free_shipping }
                        />
                        <div className="details-button">
                          <Link
                            data-testid="product-detail-link"
                            to={ `/details/${result.id}` }
                          >
                            Detalhes
                          </Link>
                          <ButtonAddCart
                            handleAddCart={ () => this.handleAddCart(result) }
                          />
                        </div>
                      </li>
                    </div>))}
                </ul>
              )
              : <p className="no-product-found">Nenhum produto foi encontrado</p>}
          </section>
        </div>
      </>

    );
  }
}

export default Home;
