import React from 'react';
import AnotherComponent from '../AnotherComponent/index';

const styles = {
  'backgroundColor': 'orange'
};

export default ({ prop, score, valid }) => (
  <section style={styles}>
    <h2>Inside SomeComponent</h2>
    <p>Prop passed down from parent: {prop}</p>
    <p>Score: {score}</p>
    <p>{valid && "It's valid"}</p>
    <AnotherComponent />
  </section>
);