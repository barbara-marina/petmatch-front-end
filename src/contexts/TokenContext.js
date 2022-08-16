import { createContext, useState } from "react";

const TokenContext = createContext();

const TokenProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem("token"));

    return (
        <TokenContext.Provider value={{token, setToken}}>{children}</TokenContext.Provider>
    );
};

export {
    TokenContext, TokenProvider
}