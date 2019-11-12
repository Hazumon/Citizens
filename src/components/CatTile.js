import React from 'react';

const CatTile = props => {
  return(
    <div className="columns small-4">
      <h4>{props.cat.name}</h4>
      <p>personality: {props.cat.personality}</p>
      <p>human: {props.cat.human}</p>
      <img src={`${props.cat.image}`} />
    </div>
  )
}

export default CatTile;
