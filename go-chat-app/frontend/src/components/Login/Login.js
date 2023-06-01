import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useNavigate} from "react-router-dom";
import {cleanError, login} from "../../redux/auth/authActions";
import "./Login.scss";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const error = useSelector((state) => state.auth.error);


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(username, password));
    };

    useEffect(() => {
        dispatch(cleanError())
    }, []);

    return (
        <div className={"login-page"}>
            <div className="background">
                <div className="shape"/>
                <div className="shape"/>
            </div>
            <form onSubmit={handleSubmit}>
                <h3>Login</h3>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Username" name="username" value={username}
                       onChange={(e) => setUsername(e.target.value)}/>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" name="password" value={password}
                       onChange={(e) => setPassword(e.target.value)}/>
                <p id="err" style={{color: "red"}}>{error}</p>
                <br/>
                <button type="submit">Log In</button>
                <NavLink to="/register" className={"href"}>Don't have an account yet</NavLink>
            </form>
        </div>
    );
}

export default Login;
