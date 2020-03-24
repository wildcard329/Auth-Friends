import React, {useState, useEffect} from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

function FriendsDisplay() {
    const [friends, setFriends] = useState([])
    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        axiosWithAuth()
            .get('/api/friends/')
            .then(res => {
                console.log(res);
                setFriends(res.data)
            })
            .catch(err => {
                console.error('Friends Display Error',err, err.message)
            })
    }
    return(
        <div>
            {friends.map(friend => (
                <div key={friend.id}>
                    <p>{friend.name}</p>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                </div>
            ))}
        </div>
    )
}

export default FriendsDisplay;