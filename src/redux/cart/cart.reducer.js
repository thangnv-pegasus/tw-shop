import { INITIAL_STATE } from "../init-state";
const Reducer = (state = INITIAL_STATE, action) => {
  // console.log("action", action);
  // console.log(state);

  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        cart: addProduct(state.cart, action.product),
      };
    case "ADD_BY_CART":
      return {
        ...state,
        cart: AddByCart(state.cart,action.product)
      };
    default:
      return state;
  }
};

const addProduct = (list, product) => {
  let check = false;
  for (let i = 0; i < list.length; i++) {
    if (list[i].id == product.id) {
      list[i].quantity += product.quantity;
      check = true;
    }
  }
  if (check == false) {
    list = [...list, product];
  }
  return list;
};


const AddByCart = (list, product) => {
  for(let i = 0; i<list.length;i++){
    if(list[i].id == product.id){
      list[i] = product;
    }
  }
  return list;
}

export default Reducer;
