import React from 'react';
import SideBar from './SideBar';

const DogSection = props => {
  let dogs = props.dogs.map(dog => {
    return(
      <SideBar
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

export default SideBarMenu;
