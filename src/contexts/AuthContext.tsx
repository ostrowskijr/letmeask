import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { auth, firebase } from '../services/firebase';

type User = {
    id: string,
    name: string,
    avatar: string
}

type authContextType = {
    user: User | undefined,
    signInWithGoogle: () => void;
}

type authContextProviderType = {
    children: ReactNode
}

const AppContext = createContext({} as authContextType);

const AuthContextProvider = (props: authContextProviderType) => {
    const [user, setUser] = useState<User>();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                const { displayName, photoURL, uid } = user;
                if (!displayName || !photoURL) {
                    throw new Error('Missing information about user from Google');
                }
                setUser({
                    id: uid,
                    name: displayName,
                    avatar: photoURL
                })
            }
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const signInWithGoogle = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const { user } = await auth.signInWithPopup(provider);
        //     
        if (user) {
            const { displayName, photoURL, uid } = user;
            if (!displayName || !photoURL) {
                throw new Error('Missing information about user from Google');
            }
            setUser({
                id: uid,
                name: displayName,
                avatar: photoURL
            })
        }
    };
    return (
        <AppContext.Provider value={{ user, signInWithGoogle }}>
            {props.children}
        </AppContext.Provider>
    );
}

export { AuthContextProvider, AppContext };
