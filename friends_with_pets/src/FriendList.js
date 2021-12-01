import React from "react";
import Pet from "./Pet";

function FriendList(props){
    return(
        <div>
            <h1 className={'friendName'}>{`Name: ${props.friend.name}`}</h1>
            <h2 className={'friendAge'}>{`Age: ${props.friend.age}`}</h2>
            <h3 className={'pets'}>
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