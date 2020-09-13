import React, { Component } from "react";
import PropTypes from "prop-types";

class Filter extends Component {
  state = {
    filter: "",
  };

  handleOnFilter = (e) =>
    this.setState({ filter: e.target.value }, () => {
      this.props.onFilter(this.state.filter);
    });

  render() {
    return (
      <>
        <div>Find contacts by name</div>
        <input
          type="text"
          name="filter"
          value={this.state.filter}
          onChange={this.handleOnFilter}
        />
      </>
    );
  }
}

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
