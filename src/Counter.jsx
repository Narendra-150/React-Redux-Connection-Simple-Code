import React, { Component } from "react";
import { connect } from "react-redux"; //1

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.ctr}</h1>

        <button onClick={this.props.onADDCounter}>Add</button>
        <button onClick={this.props.onSUBCounter}>SUB</button>
        <button onClick={this.props.onMULTCounter}>MULT</button>
        <button onClick={this.props.onDIVCounter}>DIV</button>
        <button onClick={this.props.onCustCounter}>Cust</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onADDCounter: () => dispatch({ type: "ADD" }),
    onSUBCounter: () => dispatch({ type: "SUB" }),
    onDIVCounter: () => dispatch({ type: "DIV" }),
    onMULTCounter: () => dispatch({ type: "MULT" }),
    onCustCounter: () => dispatch({ type: "Cust", value: 50 })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter); //2
