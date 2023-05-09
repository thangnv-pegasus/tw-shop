import { ADD_BY_CART, ADD_PRODUCT, REMOVE_PRODUCT } from "./counter.types";

export const add_product = (product) => {
  return {
    type: ADD_PRODUCT,
    product: product,
  };
};

export const add_by_cart = (product) => {
  return {
    type: ADD_BY_CART,
    product: product,
  };
};

export const remove_product = (product) => {
  return {
    type: REMOVE_PRODUCT,
    product: product,
  };
};
