import React from 'react';
import SomeComponent from './SomeComponent/index';

const styles = {
  'backgroundColor': 'salmon'
};

export default ({ people }) => {

  people = people.map((person, i) => (<li key={i}>{person}</li>));
  return (
    <section style={styles}>
      <h1>Inside App Component</h1>
      <ul>{people}</ul>
      <SomeComponent prop={"Some prop"} />
    </section>
  );
};