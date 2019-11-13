import React from 'react';
import SideBar from './SideBar';

const SideBarMenu = props => {
  let dogs = props.dogs.map(dog => {
    return(
      <SideBar
        key={dog.id}
        dog={dog}
      />
    )
  })


  return(
    <div>
      {dogs}
    </div>
  )
}

export default SideBarMenu;
