import React from 'react';
import { Context } from '../../contexts/Context';
import SomeComponent from './SomeComponent';

// must return a function
export default props => (
  <Context.Consumer>
    {({ score, valid }) => (
      <SomeComponent {...props} score={score} valid={valid} />
    )}
  </Context.Consumer>
);