import React, {useState} from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const Login = props => {
    const [credentials, setCredentials] = useState({
            username: '',
            password: ''
        }
    );
    const handleChange = e => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    };
    const login = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/login', credentials)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.payload);
            console.log(res.data)
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