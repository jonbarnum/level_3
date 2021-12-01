import React from "react";

// function Pet({
//     pet,
//     color
// }){
//     return color + pet.name
// }
function Pet(props){
    return(
        <div>
            <h3>{`Pet Name: ${props.pet.name}`}</h3>
            <h3>{`Pet Breed: ${props.pet.breed}`}</h3>
        </div>
    )
}

export default Pet;