// 1) Import the React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) TELL React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component

//how it was in html
// function App() {
//   return (
//     <div class="wrapper">
//       <textarea
//         readonly="true"
//         maxlength="3"
//         spellcheck="true"
//         style="background-color: gray;"
//       />
//     </div>
//   );   
// }

function App() {
  return (
    <div className="wrapper">
      <textarea
        readOnly
        maxLength={3}
        spellCheck
        style={{ backgroundColor: 'gray' }}
      />
    </div>
  );
}

// 5) Show the component on the screen
root.render(<App />);