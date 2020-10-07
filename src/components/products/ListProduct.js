import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Button, Table } from "reactstrap";
import axios from "axios";
import Pagination from "../pagination/Pagination";

function ListProduct(props) {
  const [products, setProducts] = useState([]);
  const [steps,setSteps] = useState(5);
  const [currentPage, setCurrentPage]=useState(1);


  useEffect(() => {
    if(!Object.keys(props.currentCategory).length){
      axios.get("http://localhost:3000/products")
      .then((resp) => setProducts(resp.data))

    }else{
      let url="http://localhost:3000/products?categoryId="+props.currentCategory.id
      axios.get(url)
      .then((resp) => setProducts(resp.data))
      setCurrentPage(1)
    } 
 
  }, [props.currentCategory]);


  const indexOfLastProduct = currentPage * steps;
  const indexOfFirstProduct = indexOfLastProduct - steps;
  const currentProducts = products.slice(indexOfFirstProduct,indexOfLastProduct)

  const changePage =(number)=>{
    setCurrentPage(number)
  }

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
            currentProducts.map((product, index) => (
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
      {/* <Pagination steps={currentProducts.length} totalProduct={products.length} changePage={changePage}></Pagination> */}
      <Pagination steps={steps} totalProduct={products.length} changePage={changePage}></Pagination>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    productList: state.getProducts.products,
    currentCategory: state.changeCategory.currentCategory,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRetrieveData: (data) =>
      dispatch({ type: "FETCH_PRODUCTS", payload: data }),
      addBasket: (data) =>
      dispatch({ type: "ADD_PRODUCTS", payload: data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListProduct);
