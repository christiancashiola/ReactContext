import React from 'react';
import { Context } from '../../contexts/Context';
import AnotherComponent from './AnotherComponent';

export default props => (
  <Context.Consumer>
    {({ doSomething }) => (
      <AnotherComponent doSomething={doSomething} />
    )}
  </Context.Consumer>
);