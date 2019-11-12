import React from 'react';

const DogTile = props => {
  return(
    <div className="columns small-4">
      <h4>{props.dog.name}</h4>
      <p>breed: {props.dog.breed}</p>
      <p>human: {props.dog.human}</p>
      <img src={`${props.dog.image}`} />
    </div>
  )
}

export default DogTile;
