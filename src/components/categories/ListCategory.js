import React, {  useEffect } from "react";
import { connect } from "react-redux";
import { ListGroup, ListGroupItem } from "reactstrap";

const ListCategory = (props) => {

  useEffect(() => {
    const getCategories = () => {
        fetch("http://localhost:3000/categories")
          .then((resp) => resp.json())
          .then(props.onRetrieveData);
      };
    getCategories();
  }, [props.onRetrieveData]);

 
  return (
    <div>
      <h3>{(props.currentCategory.categoryName)?props.currentCategory.categoryName:"Category"}</h3>
      <ListGroup>
        {!!props.categoryList && props.categoryList.map((category) => (
          <ListGroupItem
            key={category.id}
            active={category.id === props.currentCategory.id}
            onClick={() => props.filterProducts(category)}
          >
            {category.categoryName}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentCategory: state.changeCategory.currentCategory,
    categoryList: state.changeCategory.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterProducts: (products) =>
    dispatch({type: "CHANGE_CATEGORY", payload: products}),
    onRetrieveData: (data) =>
      dispatch({ type: "FETCH_CATEGORIES", payload: data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListCategory);
