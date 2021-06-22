import { useContext } from 'react';
import { AppContext } from '../contexts/AuthContext';

export const useAuth = () => {
    const value = useContext(AppContext);
    return value;
}