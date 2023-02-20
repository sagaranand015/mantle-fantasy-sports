import { Consolidate } from 'mdi-material-ui';
import React from 'react'
import { useContext } from 'react';
import { useState, useEffect } from 'react';

interface AuthProviderValue {
    currentAccount: string | null;
    setCurrentAccount: () => Promise<void> | null;
    admin: boolean | false;
    setAdmin: () => void | null;
}

const defVal: AuthProviderValue = {
    currentAccount: "" || null,
    setCurrentAccount: () => null,
    admin: false,
    setAdmin: () => null,
}

const AuthContext = React.createContext<AuthProviderValue>(defVal);

function AuthProvider(props: any) {

    const [currentAccount, setCurrentAccount] = useState(null)
    const [admin, setAdmin] = useState<boolean>(false);

    const checkWalletIsConnected = async () => {
        const { ethereum } = window
        if (ethereum) {
            const accounts = await ethereum.request({ method: 'eth_accounts' })
            if (accounts.length) {
                setCurrentAccount(accounts[0])
            }
        }
    }

    const connectWalletHandler = async () => {
        const { ethereum } = window
        if (!ethereum) {
            alert("Please Install Metamask")
        }
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
            setCurrentAccount(accounts[0])
        } catch (error) {
            console.log(error)
        }
    }

    const setAdminHandler = () => {
        // TOOD: Add logic for assigning admin to the currentAccount.
        setAdmin(true);
    }

    const checkAdminAccess = () => {
        setAdmin(true);
    }

    useEffect(() => {
        checkWalletIsConnected();
        setAdminHandler();
    }, [])

    return (
        <AuthContext.Provider value={{ currentAccount, setCurrentAccount: connectWalletHandler, admin, setAdmin: setAdminHandler }}>
            {props.children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const authContext = useContext(AuthContext);
    return { ...authContext };
}

export { AuthProvider, useAuth };