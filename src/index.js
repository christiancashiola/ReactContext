import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Context, ContextProvider } from './contexts/Context';

ReactDOM.render(
  <ContextProvider>
    <Context.Consumer>
      {({ people }) => (
        <App people={people} />
      )}
    </Context.Consumer>
  </ContextProvider>,
  document.getElementById('root')
);

