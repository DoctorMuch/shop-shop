import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import ProductItem from '../ProductItem';
import { QUERY_PRODUCTS } from '../../utils/queries';
import spinner from '../../assets/spinner.gif';
import { idbPromise } from '../../utils/helpers';
import { UPDATE_PRODUCTS } from '../../utils/features/products/productsSlice';
import { useDispatch, useSelector } from 'react-redux';

function ProductList() {
  const dispatch = useDispatch();
  const { products } = useSelector(state)
  const { currentCategory } = state;
  
  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products
      });
// saves products to IDB using helper function
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
      // else if to check if 'loading' is undefined in 'useQuery'
    } else if (!loading) {
      // since offline, get all data from IDB 'products' store
      idbPromise('products', 'get').then((products) => {
        // use retrieved data to set global state for browsing offline
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  return (
    <div className="my-2">
      <h2>Our Products:</h2>
      {state.products.length ? (
        <div className="flex-row">
          {filterProducts().map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ProductList;
