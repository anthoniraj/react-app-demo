import React from 'react';
import ReactDOM from 'react-dom/client';
import Greet from './Greet.js'
import Popup from './Counter.js';
import TextInput from './TextInput.js';


function Content(){
  return <p>This is the main content</p>;
};

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
      <Greet name="Antony"/>
      <Content />
      <TextInput/>
  </React.StrictMode>
);
