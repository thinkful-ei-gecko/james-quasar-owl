import React from 'react';
import store from './store';

export default function Stage(props) {
  const peopleOnStage = store.participants.filter(person => {
    return person.onStage
  })
  return (
    <section className="on-stage">
      <header>
        {/* remove after styles appropriately show separate from List */}
        <h1>The Stage</h1>
      </header>
      {
        peopleOnStage.map( person => (
          <ul key={person.id}>
            <li>{person.name}</li>
            <li><img src={person.avatar} alt={person.name + ' avatar'}/></li>
          </ul>
        ))
      }
    </section>
  );
}
