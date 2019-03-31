import React from 'react';

const styles = {
  'backgroundColor': 'yellow'
};

export default ({ doSomething }) => (
  <section style={styles}>
    <h3>Inside AnotherComponent</h3>
    <button onClick={doSomething}>
      Use Consumer Function
    </button>
  </section>
);