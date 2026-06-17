import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import axios from 'axios';

interface UserProfile {
    id?: string;
    email?: string;
    username?: string;
    is_admin?: boolean;
    [key: string]: any;
}

interface AuthContextType {
    user: UserProfile | null;
    loading: boolean;
    refreshUser: () => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }:{ children: ReactNode }) => {
    const [user, setUser] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchProfile = async () => {
        setLoading(true);
        try {
            const resp = await axios.get('/me/');
            setUser(resp.data || null);
            // keep a local cache for compatibility, but do not trust it for security
            if (resp.data && typeof resp.data.is_admin !== 'undefined') {
                localStorage.setItem('isAdmin', resp.data.is_admin ? 'true' : 'false');
            }
        } catch (err) {
            setUser(null);
            localStorage.removeItem('isAdmin');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // If there is a token, try to fetch profile; otherwise mark not authenticated
        const token = localStorage.getItem('authToken');
        if (token) {
            fetchProfile();
        } else {
            setLoading(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const refreshUser = async () => {
        await fetchProfile();
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('email');
        localStorage.removeItem('userId');
        localStorage.removeItem('userName');
        localStorage.removeItem('isAdmin');
        setUser(null);
        setLoading(false);
        window.location.href = '/login';
    };

    return (
        <AuthContext.Provider value={{ user, loading, refreshUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};