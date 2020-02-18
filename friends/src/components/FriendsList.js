import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendsList = props => {
    const [friends, setFriends] = useState();
    
    useEffect(() => {
        axiosWithAuth()
            .get("/friends")
            .then(res => {
                console.log(res);
                setFriends(res.data);
            })
            .catch(err => {
                console.log("Could not retrieve frineds: ", err);
            });
        }, []);

    if(!friends)
        return <h2>Loading...</h2>

    return (
        <div className="friends-list">
            {friends.map(friend => <div key={friend.id}>{friend.name}</div>)}
        </div>
    );
}

export default FriendsList;