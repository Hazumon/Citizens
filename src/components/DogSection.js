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
    <div class="boxcolor">
      {dogs}
    </div>
  )
}

export default DogSection;
