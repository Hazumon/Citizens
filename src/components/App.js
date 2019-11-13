import React from 'react';
import SideBarMenu from './SideBarMenu';

const App = props => {
  return(
    <div class="container">
      <h1>Citizens</h1>
      <SideBarMenu
      dogs={props.animals.dogs} // pulls data from the animals variable that was passed
                                // from the  main.js and sends it to the DogSection file with the dogs var
      />

    </div>
  )
}

export default App;
