import { Navigate } from 'react-router-dom';
import Layout from '../layout/layout';

export { PrivateRoute };

function PrivateRoute({ children }) {
    // const { user: authUser } = useSelector(x => x.auth);
    const authUser = window && window.localStorage.getItem('isAuthenticated') || false;

    if (!authUser) {
        // not logged in so redirect to login page with the return url
        return <Navigate to="/login" />
    }

    // authorized so return child components
    return ( <Layout>{children}</Layout>);
}