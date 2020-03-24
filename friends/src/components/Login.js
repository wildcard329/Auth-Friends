import React, {useState} from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const Login = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
        }
    );
    handleChange = e => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    };
    login = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/login', credentials)
        .then(res => {
            localStorage.setItem('token', JSON.stringify(res.data.payload));
            props.history.push('/protected');
        })
        .catch(err => console.log(err.response));
    };
    return (
        <div>
            <form onSubmit={login}>
                <input
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button>Log In</button>
            </form>
        </div>
    )
};

export default Login;