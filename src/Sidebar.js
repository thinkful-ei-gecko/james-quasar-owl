import React from 'react';
import store from './store';
import List from './List';
import Chat from './Chat';
import './Sidebar.css';

export default function Sidebar(){
  return(
    <section className="sidebar-section">
      <ul className='sidebar-menu'>
       <li> <a href='replace with function to show chat'>Chat</a></li> 
       <li> <a href='replace with function to show chat'>Participants</a></li> 
       <li>gear</li>
       <li>link</li>
       <li>question mark</li>
      </ul>
      <div className='sidebar-feed'>
        {store.feed === 'chat' ? <Chat /> : <List />}
      </div>
    </section>
  )
} 