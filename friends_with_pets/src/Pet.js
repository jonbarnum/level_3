import React from "react";

function Pet(props){
    return(
        <div>
            <h3 className={'petName'}>{`Pet Name: ${props.pet.name}`}</h3>
            <h3 className={'petBreed'}>{`Pet Breed: ${props.pet.breed}`}</h3>
        </div>
    )
}

export default Pet;