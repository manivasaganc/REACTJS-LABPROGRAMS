import React from "react" ;

function Card({items}) {
  return (
    <>
    <div className="card"> 
      <h2>Product:{items.name}</h2>
      <h2>Price:{items.price}</h2>
    </div>
    </>
  );
}

export default Card;