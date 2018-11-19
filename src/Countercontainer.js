import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    poulet: state
  });
  
  const mapDispatchToProps = dispatch => ({
    add10: () => dispatch({ type: "ADDTEN" }),
    add: () => dispatch({ type: "ADD" }),
    remove10: () => dispatch({ type: "REMOVETEN" }),
    remove: () => dispatch({ type: "REMOVE" }),
    reset: () => dispatch({ type: "RESET" })
  });
  
  const Countercontainer = ({ poulet, add10, add, remove, remove10, reset }) => (
    <div>
      <p>{poulet}</p>
      <button onClick={add10}>10</button>
      <button onClick={add}>1</button>
      <button onClick={remove10}>-10</button>    
      <button onClick={remove}>-1</button>
      <button onClick={reset}>0</button>
    </div>
  );
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Countercontainer);