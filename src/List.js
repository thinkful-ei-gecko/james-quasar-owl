import React from 'react';
import store from './store.js';
import './List.css';
// import ReactDOM from 'react-dom';

function List (props) {
  const activeParticipantsList = store.participants.filter(person => {
    return person.inSession;
  });

  console.log(activeParticipantsList);

  const inActiveParticipantsList = store.participants.filter(person => {
    return !person.inSession;
  });

  const allParticipantsList = activeParticipantsList.concat(inActiveParticipantsList);

  return (
    <ul className="participant-list">
      {
        allParticipantsList.map( person => (
          <li key={person.id}>
            <img className="participant-avatar" src={person.avatar} alt={person.name + ' avatar'}/>
            <div className="participant-details">
              <h2>{person.name}</h2>
              {person.inSession ? person.onStage ? <div className="active"><p>on stage</p></div> : <div className="active"><p>in session</p></div>: <div className="inactive"><p>left session</p></div>}
            </div>
          </li>
        ))}
    </ul>
  );
};

export default List;