// const StartWorkout = () => {
//     return (
//         <>
//             music and workout data go here
//         </>
//     )
// };

// export default StartWorkout;

import React, { useState, useEffect } from 'react';
import WebPlayback from './spotify/WebPlayback'

function StartWorkout() {

    const [token, setToken] = useState('');

    useEffect(() => {

        async function getToken() {
            const response = await fetch('/auth/token');
            const json = await response.json();
            setToken(json.access_token);
        }

        getToken();

    }, []);

    return (
        <>
            { <WebPlayback token={token} />}
        </>
    );
}


export default StartWorkout;