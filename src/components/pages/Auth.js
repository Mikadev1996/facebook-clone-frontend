import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Auth() {
    const { token } = useParams()
    const { user_id } = useParams()
    const [error , setError] = useState(false);
    const nav = useNavigate();

    useEffect(() => {
        if (token.length > 0) {
            localStorage.setItem('token', JSON.stringify(token));

            if (user_id) {
                localStorage.setItem('user_id', JSON.stringify(user_id));
            }

            nav('/home');
        }

        else {
            setError(true);
            setTimeout(() => {
                nav('/');
            }, 2000)
        }
    }, [])

    return (
        <div>
            {error && <h1>Error... please try again</h1>}
        </div>
    )
}

export default Auth;
