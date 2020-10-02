import React from 'react';
import { connect } from 'react-redux';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
     Badge,
  } from "reactstrap";

function Cart(props) {
    return (
        <div>
            <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Basket <Badge color="warning"></Badge> 
        </DropdownToggle>
          <DropdownMenu right>
          {props.basket.map(addedProducts=>(
            <DropdownItem key={addedProducts.product.id}>
              <Badge onClick={()=>props.removeProduct(addedProducts.product)}  style={{marginRight:"10px"}} color="danger">x</Badge>
              {addedProducts.product.productName} 
                  <Badge style={{marginLeft:"10px"}} color="warning">{addedProducts.quantity}</Badge>
            </DropdownItem>
            ))}
          </DropdownMenu>
      </UncontrolledDropdown>
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
    basket:state.getBasketProducts.products
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeProduct: (product) =>
      dispatch({ type: "REMOVE_PRODUCTS", payload: product }),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Cart);

