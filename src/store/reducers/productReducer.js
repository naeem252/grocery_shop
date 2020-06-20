import * as actionTypes from "../actions/actionTypes";
const initialState = {
  products: [],
  category: null,
  price: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.allProducts,
      };

    case actionTypes.FILTER_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        products: action.filterProducts,
        category: action.categoryName,
      };
    case actionTypes.FILTER_PRODUCTS_BY_PRICE:
      return {
        ...state,
        products: action.filterProducts,
        price: action.priceVal,
      };
    case actionTypes.FILTER_PRODUCTS_BY_SEARCH:
      return {
        ...state,
        products: action.filterProducts,
        category: null,
        price: null,
      };
    default:
      return {
        ...state,
      };
  }
};
export default reducer;
