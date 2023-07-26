// 1) Import the React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) TELL React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
function App() {
  const name = 'Samantha';
  const age = 30;
  return (
    <h1>
      Hi there! My name is {name}. My age is {age}
    </h1>
  );
}

// 5) Show the component on the screen
root.render(<App />);
