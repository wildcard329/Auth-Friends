import React, {useEffect} from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

function FriendsDisplay() {

    useEffect(() => {
        getData();
    })

    const getData = () => {
        axiosWithAuth()
            .get('/api/friends/')
            .then(res => {
                console.log(res);
            })
    }
    return(
        <></>
    )
}

export default FriendsDisplay;