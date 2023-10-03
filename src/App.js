/*  [ ] Open the src/App.js file 
    [ ] Remove the existing JSX from the component 
    [ ] Create a level-one heading that says "Todo List" 
    [ ] Create an unordered list (<ul>)
 */

import React from 'react';

const title = 'React';

function App() {
  return (
    <div>
      <h1>Hello {title}</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;
