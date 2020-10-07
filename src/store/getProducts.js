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
        return{
            products:action.payload
        }
    }
    return state;
};

export default getProducts