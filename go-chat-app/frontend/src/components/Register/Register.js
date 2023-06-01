import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {cleanError, register} from "../../redux/auth/authActions";
import {NavLink} from "react-router-dom";
import "./Register.scss"

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const error = useSelector((state) => state.auth.error);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register(username, password));
    };

    useEffect(() => {
        dispatch(cleanError())
    }, []);

    return (
        <div className={"register-page"}>
            <div className="background">
                <div className="shape"/>
                <div className="shape"/>
            </div>
            <form onSubmit={handleSubmit}>
                <h3>Register</h3>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Username" name="username" value={username}
                       onChange={(e) => setUsername(e.target.value)}/>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" name="password" value={password}
                       onChange={(e) => setPassword(e.target.value)}/>
                <p id="err" style={{color: "red"}}>{error}</p>
                <br/>
                <button type="submit">Sign Up</button>
                <NavLink to="/login" className={"href"}>Already have an account</NavLink>
            </form>
        </div>


    );
}

export default Register;
