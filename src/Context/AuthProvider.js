import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const allContexs = useFirebase();

    return (
        <AuthContext.Provider value={allContexs}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;