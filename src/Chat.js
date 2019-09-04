import React from 'react';
import store from './store.js';

export default function Chat(props) {

  const toDate = function(time) {
    const formattedTime = new Date(time);
    return formattedTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  }

  const getParticipantName = function(event) {
    const id = event.participantId; 
    return store.participants[id - 1].name;
  };

  const getParticipantAvatar = function(event) {
    const id = event.participantId; 
    return store.participants[id - 1].avatar;
  };

  const createEvent = function(event) {

    let message = ''; 
    switch (event.type) {
      case 'thumbs-up':
        message = 'gave a thumbs up';
        break;
      case 'thumbs-down':
        message = 'gave a thumbs down';
        break;
      case 'clap':
        message = 'clapped';
        break;
      case 'join':
        message = 'joined';
        break;
      case 'leave':
        message = 'left';
        break;
      case 'join-stage':
        message = 'joined stage';
        break;
      case 'leave-stage':
        message = 'left stage';
        break;
      default:
        message = 'unknown';
        break;
    }
    return (
      <li key={event.timestamp}><span className="chat-name">{getParticipantName(event)}</span> {message}</li>
    );
  };

  const createMessage = function(event) {
    return (
      <li key={event.timestamp}>
        <img src={getParticipantAvatar(event)} alt={getParticipantName(event) + ' avatar'} />
        <p><span className="chat-name">{getParticipantName(event)}</span> {toDate(event.time)}</p>
        <p>{event.message}</p>
      </li>
    );
  };

  return (
    <ul>
    {
      store.chatEvents.map(event => (
          event.type === 'message' ? createMessage(event) : createEvent(event)
      ))
    }
    </ul>

  );
}