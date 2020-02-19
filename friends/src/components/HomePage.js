import React from "react";
import FriendsList from "./FriendsList";
import AddFriend from "./AddFriend";

const HomePage = props => {
    return (
        <>
            <FriendsList />
            <AddFriend />
        </>
    )
}

export default HomePage;