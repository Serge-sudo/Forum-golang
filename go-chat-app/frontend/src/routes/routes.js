import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ element }) => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    return isAuthenticated ? element : <Navigate to="/login" />;
};

const AuthorizationRoutes = ({ element }) => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    return isAuthenticated ? <Navigate to="/" replace={true} /> : element;
};
export { PrivateRoute, AuthorizationRoutes };