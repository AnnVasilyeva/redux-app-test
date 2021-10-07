import React from "react";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import * as actions from '../actions';

// нам приходит такой объект
// actions = {
//   inc: inc,
//   dec: dec,
//   rnd: rnd
// }

// Counter принимает несколько аргументов(props): counter приходит из state (соответственно из store), inc, dec, rnd - это actions
const Counter = ({counter, inc, dec, rnd}) => {
  return (
    <div className="jumbotron">
      <h1>{counter}</h1>
      <button className="btn btn-primary"
              onClick={dec}
      >DEC</button>
      <button className="btn btn-primary"
              onClick={inc}
      >INC</button>
      <button className="btn btn-primary"
              onClick={rnd}
      >RND</button>
    </div>   
  )
}

// возвращаем объект с теми свойствами, которые хотим вытащить из state
const mapStateToProps = (state) => {
  return {
    counter: state,
  }
}

// вытаскиваем наши actions и передаем в конфигурацию функции connect (ниже)
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
  // для понимания как работает встроенная в redux функция bindActionCreators
  // const bindActionCreator = (creator, dispatch) => (...args) => {
  //   dispatch(creator(...args));
  // }
}

// connect (принимает параметры конфигурации(выше) и Counter) связывает store (который передается из index.js через Provider) c Counter

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// можно в connect вторым аргументом передавать просто объект и она все сделает сама
// export default connect(mapStateToProps, actions)(Counter);