import React from 'react';
import DogTile from './DogTile';

const DogSection = props => {
  let dogs = props.dogs.map(dog => {
    return(
      <DogTile
        key={dog.id}
        dog={dog}
      />
    )
  })


  return(
    <div className="row">
      <h2>Dogs</h2>
      {dogs}
    </div>
  )
}

export default DogSection;
