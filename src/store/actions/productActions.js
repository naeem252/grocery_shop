import * as actionsTypes from "./actionTypes";
import { products } from "../../productsItems";

// const fetchProductStart = () => {
//   return {
//     type: actionsTypes.FETCH_PRODUCT_START,
//   };
// };

// const fetchProductSuccess = () => {
//   return {
//     type: actionsTypes.FETCH_PRODUCT_SUCCESS,
//     allProducts: products,
//   };
// };
// const fetchProductFail = (error) => {
//   return {
//     type: actionsTypes.FETCH_PRODUCT_FAIL,
//     err: error,
//   };
// };
export const fetchProducst = () => {
  return {
    type: actionsTypes.FETCH_PRODUCT_SUCCESS,
    allProducts: products,
  };
};
export const filterProductByCategory = (category, storePrice) => {
  let filteredProduct;
  let catTitle = category;
  if (category === "all") {
    catTitle = null;
    filteredProduct = products.map((prod) => {
      if (storePrice) {
        return {
          ...prod,
          className:
            prod.price >= storePrice.split("-")[0] &&
            prod.price <= storePrice.split("-")[1]
              ? "Show"
              : "Hide",
        };
      }
      return {
        ...prod,
        className: "Show",
      };
    });
  } else {
    filteredProduct = products.map((prod) => {
      if (storePrice) {
        return {
          ...prod,
          className:
            prod.price >= storePrice.split("-")[0] &&
            prod.price <= storePrice.split("-")[1] &&
            prod.category === category
              ? "Show"
              : "Hide",
        };
      } else {
        return {
          ...prod,
          className: prod.category === category ? "Show" : "Hide",
        };
      }
    });
  }

  return {
    type: actionsTypes.FILTER_PRODUCTS_BY_CATEGORY,
    filterProducts: filteredProduct,
    categoryName: catTitle,
  };
};
export const filterProductByPrice = (price, storeCat) => {
  let filteredProduct;
  let priceTitle = price;
  let minPrice = price.split("-")[0];
  let maxPrice = price.split("-")[1];
  if (price === "all") {
    priceTitle = null;
    filteredProduct = products.map((prod) => {
      if (storeCat) {
        return {
          ...prod,
          className: prod.category === storeCat ? "Show" : "Hide",
        };
      }
      return {
        ...prod,
        className: "Show",
      };
    });
  } else {
    filteredProduct = products.map((prod) => {
      if (storeCat) {
        return {
          ...prod,
          className:
            prod.price >= minPrice &&
            prod.price <= maxPrice &&
            prod.category === storeCat
              ? "Show"
              : "Hide",
        };
      } else {
        return {
          ...prod,
          className:
            prod.price >= minPrice && prod.price <= maxPrice ? "Show" : "Hide",
        };
      }
    });
  }
  return {
    type: actionsTypes.FILTER_PRODUCTS_BY_PRICE,
    filterProducts: filteredProduct,
    priceVal: priceTitle,
  };
};

export const filterProductBySearch = (searchQ) => {
  let filterProduct = products.map((prod) => {
    if (prod.name.toLocaleLowerCase().includes(searchQ.toLocaleLowerCase())) {
      return {
        ...prod,
        className: "Show",
      };
    } else {
      return {
        ...prod,
        className: "Hide",
      };
    }
  });

  return {
    type: actionsTypes.FILTER_PRODUCTS_BY_SEARCH,
    filterProducts: filterProduct,
  };
};
