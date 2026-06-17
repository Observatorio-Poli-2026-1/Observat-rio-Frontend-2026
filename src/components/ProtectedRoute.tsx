import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Loading from './Loading';

function ProtectedRoute() {
    const token = localStorage.getItem('authToken');
    const { user, loading } = useAuth();

    if (!token) return <Navigate to="/login" />;
    if (loading) return <Loading />;

    // If user profile could not be fetched, force login
    if (!user) return <Navigate to="/login" />;

    return <Outlet />;
}

export default ProtectedRoute;