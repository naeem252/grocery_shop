import * as actionsTypes from "./actionTypes";

export const addToCart = (product) => {
  return {
    type: actionsTypes.ADD_TO_CART,
    addProduct: product,
  };
};

export const ingCardProdPrice = (index, multiplyBy) => {
  return {
    type: actionsTypes.ING_CARD_PROD_PRICE,
    index: index,
    ingMultiply: +multiplyBy,
  };
};
