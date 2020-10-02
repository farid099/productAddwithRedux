const initialProductState={
    products:null,
};


const getProducts =(state = initialProductState,action)=>{

    if(action.type === "FETCH_PRODUCTS"){
        return {
            products:action.payload
        }
    }
    if(action.type === "FILTER_PRODUCTS"){
        let url = "http://localhost:3000/products?categoryId="+action.payload;
        const products = fetch(url)
       .then((resp) => resp.json());
        return {products};
    }
    return state;
};

export default getProducts