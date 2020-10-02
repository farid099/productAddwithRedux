const initialBasketState={
    products:[],
};


const getBasketProducts =(state = initialBasketState,action)=>{

    if(action.type === "ADD_PRODUCTS"){
        let basketAddedProducts =[...state.products];
        var product =action.payload;
        var addedProduct = basketAddedProducts.find(p=>p.product.id === product.id);
        if(addedProduct){
            addedProduct.quantity++;
      
          }else{
            basketAddedProducts.push({product,quantity:1});      
          }
        return {
            products:basketAddedProducts
        }
    }
    if(action.type === "REMOVE_PRODUCTS"){
        let basketRemovedProducts = [...state.products];
        var removProduct =action.payload;
        let removedProduct = basketRemovedProducts.find(p=>p.product.id === removProduct.id);
        if(removedProduct.quantity>1){
          removedProduct.quantity--;
        }
        else{
            basketRemovedProducts = basketRemovedProducts.filter(p => p.product.id !== removProduct.id);       
           }
        return {
            products:basketRemovedProducts
        };
    }
    return state;
};

export default getBasketProducts