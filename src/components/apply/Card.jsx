import React from 'react'

const Card = ({title}) => {
    
  return (
    <div class="card" style={{height: "230px"}}>
        <img class="card-img-top" src='../img/house.png' alt="Card image cap" height="130px" />
        <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">card's content.</p>
        </div>
    </div>
  )
}

export default Card