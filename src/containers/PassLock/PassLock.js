import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../main.css';

import buttons from "../../constants";

class PassLock extends Component {
  render() {
    let accessState = null;
    if(this.props.access === false) {
      accessState = <p className='no-access'>ACCESS DENIED!</p>
    } else {
      accessState = <p className='access'>ACCESS GRANTED</p>
    }

    return (
        <div className='passLock'>
          <p>password is: 4578</p>
          {accessState}
          <div className='codepad'>
            <p className='codepad-nums'>{this.props.passCode &&
            this.props.passCode.split('').map(n => '*').join('')}</p>
          </div>
          <div className='numpad numpad-pass'>
            {buttons.passLock.map((btn, key) => {
                  if (btn === '<') {
                    return <button onClick={this.props.deleteNum} key={key}>{btn}</button>
                  } else if (btn === 'E') {
                    return <button onClick={this.props.checkNums} key={key}>{btn}</button>
                  } else {
                    return <button onClick={() => this.props.enterNum(btn)} key={key}>{btn}</button>
                  }
                }
            )}
          </div>

        </div>
    );
  }
}
const mapStateToProps = (state)=> {
  return {
    passCode : state.pass.password,
    access: state.pass.access,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    deleteNum: ()=> dispatch({type: 'DELETE_NUM'}),
    enterNum: (value)=>dispatch({type: 'ENTER_NUM', value}),
    checkNums : ()=> dispatch({type: 'CHECK_PASS'})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PassLock);