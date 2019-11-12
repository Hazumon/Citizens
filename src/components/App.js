import React from 'react';
import DogSection from './DogSection';
import CatSection from './CatSection';

const App = props => {
  return(
    <div>
      <h1>Citizens</h1>
      <DogSection
      dogs={props.animals.dogs} // pulls data from the animals variable that was passed
                                // from the  main.js and sends it to the DogSection file with the dogs var
      />
      <CatSection
        cats={props.animals.cats}
      />
    </div>
  )
}

export default App;
