import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Button, Table } from "reactstrap";

function ListProduct(props) {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (!props.productList) {
      const getProducts = () => {
        const products = fetch("http://localhost:3000/products").then((resp) =>
          resp.json()
        );
        // .then(props.onRetrieveData);
        props.onRetrieveData(products);
      };
      getProducts();
    }
  }, [props.onRetrieveData, props, props.productList]);

  useEffect(() => {
    if (!!props.productList) {
      props.productList.then((data) => setProducts(data));
    }
  }, [props.productList]);

  return (
    <div>
      <h3>Products</h3>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Product Name</th>
            <th>Quantity Per Unit</th>
            <th>Unit Price</th>
          </tr>
        </thead>
        <tbody>
          {!!products &&
            products.map((product, index) => (
              <tr key={product.id}>
                <th scope="row">{index + 1}</th>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>
                  <Button onClick={()=>props.addBasket(product)} color="primary">Add</Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    productList: state.getProducts.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterProduct: (product) =>
      dispatch({ type: "FILTER_PRODUCTS", payload: product }),
    onRetrieveData: (data) =>
      dispatch({ type: "FETCH_PRODUCTS", payload: data }),
      addBasket: (data) =>
      dispatch({ type: "ADD_PRODUCTS", payload: data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListProduct);
