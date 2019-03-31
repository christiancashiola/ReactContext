import React, { Component } from 'react';

export const Context = React.createContext();

export class ContextProvider extends Component {

  state = {
    people: [
      'John Doe',
      'Jane Doe'
    ],
    score: 110,
    valid: true
  };

  doSomething = id => {
    alert('Now doing something...');
  };
  
  render() {
    return (
      <Context.Provider value={{
          ...this.state,
          doSomething: this.doSomething
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}