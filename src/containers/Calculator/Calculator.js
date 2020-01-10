import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../main.css';
import buttons from "../../constants";

class Calculator extends Component {
  render() {
    return (
        <div className='calculator'>
          <div className='codepad'>
            <p>{this.props.sum}</p>
          </div>
          <div className='numpad numpad-calc'>
            {buttons.calculator.map((btn, key) => {
              switch (btn) {
                case 'C':
                  return <button onClick={this.props.clearNums} key={key}>{btn}</button>;
                case '=':
                  return <button onClick={this.props.evalEquation} key={key}>{btn}</button>;
                default:
                  return <button onClick={()=>this.props.addSymbol(btn)} key={key}>{btn}</button>
              }
            })}
          </div>
        </div>
    );
  }

}
const mapStateToProps = (state) => {
  return {
    sum: state.calculator.sum,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addSymbol: (value)=>dispatch({type: 'ADD_SYMBOL', value}),
    clearNums : ()=> dispatch({type: 'CLEAR_ALL'}),
    evalEquation : ()=> dispatch({type: 'EVAL_TOTAL'}),
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Calculator);