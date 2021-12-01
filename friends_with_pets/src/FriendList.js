import React from "react";
import Pet from "./Pet";

function FriendList(props){
    return(
        <div>
            <h1>{`Name: ${props.friend.name}`}</h1>
            <h2>{`Age: ${props.friend.age}`}</h2>
            <h3>
                {
                    props.friend.pets.map((pet) => (
                        <Pet key={pet.name} pet={pet}/>
                    ))
                }
            </h3>
        </div>
    )
}


export default FriendList;