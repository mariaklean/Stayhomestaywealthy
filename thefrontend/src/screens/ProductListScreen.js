import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import {
    PRODUCT_CREATE_RESET,
    PRODUCT_DELETE_RESET,
  } from '../constants/productConstants';
  import {
    createProduct,
    deleteProduct,
    listProducts,
  } from '../actions/productActions';

export default function ProductListScreen(props) {
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const productCreate = useSelector(state=> state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
        dispatch({ type: PRODUCT_CREATE_RESET });
        props.history.push(`/product/${createdProduct._id}/edit`);
      }
      if (successDelete) {
        dispatch({ type: PRODUCT_DELETE_RESET });
      }
    dispatch(listProducts());
  }, [createdProduct, dispatch, props.history, successCreate]);
  const deleteHandler = (product) => {
        dispatch(deleteProduct(product._id))

};

  const createHandler=()=>{
      dispatch(createProduct());
  };
  return (
    <div>
    <div className="row">
      
    </div><h1>Products</h1>
    {loadingCreate && <LoadingBox></LoadingBox>}
      {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <form className="form">
        <table className="table">
          <thead>
            <tr>
              {/* <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>DETAILS</th>
              <th>ACTIONS</th> */}
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                 <td><div> <h3>{product.name}</h3>
                 <br/> {product.description}</div></td>

                <td><img className='logo' src={product.image}></img></td>
                <td> <div>  <t/> <br/></div> </td>
                <td><h2> £{product.price} </h2></td>
                <td></td>
                <td>
                <table className="table">
                    <thead>
                      <tr>
                      <button
                      type="button"
                    className="primary"
                    onClick={() =>
                      props.history.push(`/product/${product._id}/edit`)
                    }
                  >
                    Edit...
                  </button>
                      </tr>
                    </thead>
                    <tbody>
                    <button
                    type="button"
                    className="small"
                    onClick={() => deleteHandler(product)}
                  >
                    Delete
                  </button>
                      </tbody>
                      </table>
                </td> 

              </tr>
              
              
            ))} <tr>                <button type="button" className="primary" onClick={createHandler}>Create product</button>
            </tr>
          </tbody>
        </table>
        </form>
      )}
    </div>
  );
}