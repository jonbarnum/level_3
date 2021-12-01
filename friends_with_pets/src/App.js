import React from "react";
import friends from './friends';
import FriendList from "./FriendList";

function App(){
    const compiledFriends = friends.map(friend => <FriendList key={friend.name} friend={friend}/>);

    return(
        <div>
            {compiledFriends}
        </div>
    )
}

export default App;