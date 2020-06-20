import * as actionTypes from "../actions/actionTypes";
const initialState = {
  carts: [],
  prodPrices: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const newCarts = [...state.carts];
      const newProdPricec = [...state.prodPrices];
      newCarts.push(action.addProduct);
      newProdPricec.push(action.addProduct.price);
      return {
        ...state,
        carts: newCarts.map((prod) => {
          return {
            ...prod,
            quantity: prod.quantity ? prod.quantity : 1,
          };
        }),
        prodPrices: newProdPricec,
      };
    case actionTypes.ING_CARD_PROD_PRICE:
      if (action.ingMultiply <= 0) {
        return {
          ...state,
        };
      }
      const allCarts = [...state.carts];
      const allProdPrices = [...state.prodPrices];
      allCarts[action.index].quantity = action.ingMultiply;
      allCarts[action.index].price =
        allProdPrices[action.index] * action.ingMultiply;

      return {
        ...state,
        carts: allCarts,
      };
  }
  return state;
};
export default reducer;
