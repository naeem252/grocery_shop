import React, { Component } from "react";
import classes from "./Filter.module.css";
import FilterInput from "../../../components/UI/Input/Input";
import * as actions from "../../../store/actions/index";
import { connect } from "react-redux";
class Filter extends Component {
  state = {
    filterInputs: [
      {
        name: "Search",
        type: "input",
        config: {
          name: "search",
          placeholder: "search...",
          type: "text",
          value: "",
        },
      },
      {
        name: "Category",
        type: "select",
        config: [
          { value: "all", displayValue: "all" },
          { value: "milk", displayValue: "milk" },
          { value: "salt", displayValue: "Salt" },
          { value: "dui", displayValue: "dui" },
          { value: "halim", displayValue: "Halim" },
          { value: "noddles", displayValue: "noddles" },
        ],
      },
      {
        name: "Price",
        type: "select",
        config: [
          { value: "all", displayValue: "all" },
          { value: "50-100", displayValue: "50 - 100" },
          { value: "100-150", displayValue: "100 - 150" },
          { value: "150-200", displayValue: "150 - 200" },
        ],
      },
    ],
  };
  onChangedHandler = (index, event) => {
    if (event.target.tagName === "SELECT") {
      const filteredBy = this.state.filterInputs[index].name;
      const filteredVal =
        event.target.options[event.target.selectedIndex].value;
      if (filteredBy === "Category") {
        this.props.filterProductsByCat(filteredVal, this.props.price);
      }
      if (filteredBy === "Price") {
        this.props.filterProductByPrice(filteredVal, this.props.category);
      }
    } else {
      const typeValue = event.target.value;
      const newFilterInput = [...this.state.filterInputs];
      newFilterInput[index].config.value = typeValue;
      this.props.filterBySearch(typeValue);
      this.setState({ filterInputs: newFilterInput });
    }
    // console.log(index, event.target.options[event.target.selectedIndex].value);
  };
  render() {
    return (
      <div className={classes.Filter}>
        {this.state.filterInputs.map((input, index) => {
          return (
            <FilterInput
              changed={this.onChangedHandler.bind(this, index)}
              key={index}
              inputtype={input.type}
              label={input.name}
              config={input.config}
            />
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    allProducts: state.products.products,
    price: state.products.price,
    category: state.products.category,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    filterProductsByCat: (category, storePrice) =>
      dispatch(actions.filterProductByCategory(category, storePrice)),
    filterProductByPrice: (price, storeCat) =>
      dispatch(actions.filterProductByPrice(price, storeCat)),
    filterBySearch: (searchQ) =>
      dispatch(actions.filterProductBySearch(searchQ)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
