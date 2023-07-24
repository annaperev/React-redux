# React-redux
https://www.udemy.com/course/react-redux/ by Stephen Grider

### So what's React all about?

#### React

- displays HTML
- changes that HTML when the user does something

#### React components

- functions that returns JSX (stuff that looks like HTML)
- tells React what to show on the screen
- a project can have many components that work together

#### JSX

- tell React to create a normal HTML element

or

- tell React to show another component

### How does a React app start up?

1. All of your project's JS files are 'bundled' together into a single file, then placed onto a server
![Alt text](readme/A9BF1CC1-362E-4AAD-9C44-82ECC9C0CEEB.png)
2. User makes a request to the server and gets an HTML file + the bundle
![Alt text](readme/9D4F01C4-D21A-466A-8F7B-C7108FE62647.png)
3. User's browser executes your code
   - Find the div with id of 'root' in the DOM
   - Tell React to take control of that element
   - Tell React to get JSX from the App component, turn it into HTML, and show it in the root

   ![Alt text](readme/C374360E-BABD-47BF-9E2A-5634CCA10174.png)

### What were the 'useState' functions?

- 'useState' is a function that works with React's "state" system
- State is like a variable in React
- State is used to store data that changes over time
- Whenever state changes, React automatically updates content on the screen
