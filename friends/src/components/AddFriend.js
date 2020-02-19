import React, {useState } from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth";


const AddFriend = props => {
    const [friend, setFriend] = useState({
        id: "",
        name: "",
        age: "",
        email: ""
    });

    const handleChange = (update, type) => {
        setFriend({
            ...friend,
            ...update
        });
    }

    const handlePost = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/friends", friend)
            .then(res => {
                console.log(res.data);
                setFriend({
                    id: "",
                    name: "",
                    age: "",
                    email: ""
                });
            })
            .catch(err => {
                console.log("Could not add frineds: ", err);
        });



    }

    return (
        <form onSubmit={e => handlePost(e)}>
            <input type="text" placeholder="name" value={friend.name} onChange={e => handleChange({name: e.target.value})}/>
            <input type="text" placeholder="age" value={friend.age} onChange={e => handleChange({age: e.target.value})}/>
            <input type="text" placeholder="email" value={friend.email} onChange={e => handleChange({email: e.target.value})}/>
            <button type="submit">Add Friend</button>
        </form>
    );
}

export default AddFriend;