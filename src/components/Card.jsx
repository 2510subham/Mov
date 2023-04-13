import React from 'react'
import '../App.css';
const Card = (props) => {
  return (
    <div>
        <div className="card styleval" >
            <img src={props.movieimage !== 'N/A' ?props.movieimage : "https://via.placeholder.com/500x500.png?text=&bg=FFFFFF"} className="card-img-top" alt={props.type}/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.year}</p>
               
            </div>
            </div>
    </div>
  )
}

export default Card;