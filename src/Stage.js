import React from 'react';
import store from './store';
import './Stage.css';

export default function Stage(props) {
  const peopleOnStage = store.participants.filter(person => {
    return person.onStage
  })
  return (
    <section className="on-stage">
      <div className="stage">
      {
        peopleOnStage.map( person => (
          <ul key={person.id} className="stage-person">
            <li>{person.name}</li>
            <li className="stage-person__avatar"><img src={person.avatar} alt={person.name + ' avatar'}/></li>
          </ul>
        ))
      }
      </div>
    </section>
  );
}
