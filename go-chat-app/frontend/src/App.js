import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Main from "./components/Main";
import {useSelector} from "react-redux";
import './App.scss'
import {AuthorizationRoutes, PrivateRoute} from "./routes/routes";

function App() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    return (
        <Router>
            <Routes>
                <Route exact path="/register" element={<AuthorizationRoutes element={<Register/>}/>}/>
                <Route exact path="/login" element={<AuthorizationRoutes element={<Login/>}/>}/>
                <Route exact path="/" element={<PrivateRoute element={<Main/>}/>}/>
            </Routes>
        </Router>
    );
}

export default App;
