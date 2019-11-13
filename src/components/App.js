import React from 'react';
import SideBarMenu from './SideBarMenu';

const App = props => {
  return(
    <div class="container">
      <h1>Citizens</h1>
      <SideBarMenu
      dogs={props.animals.dogs} 
      />

    </div>
  )
}

export default App;
