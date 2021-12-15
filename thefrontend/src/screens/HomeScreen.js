import React, { useEffect } from 'react';

import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <main>
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        
        
        <div className="row center">
          <div className="row ">
          <div>
            <div className='card2' onsubmit="event.preventDefault();" role="search">
            <h1>Are you starving??</h1>

  <label for="search">Search for stuff</label>
</div>
            <br/>
            </div>
            </div>
       
            <div className="row center">
         
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
          </div>
        </div>
      )}
    </div>
    </main>
  );
}