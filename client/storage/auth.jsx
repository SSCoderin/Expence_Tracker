import { createContext, useState, useContext, useEffect } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [istoken, setIstoken] = useState(localStorage.getItem("token"));
    const [userget, setUserget] = useState(null);
    
    const storetokeninls = (token) => {
        setIstoken(token);
        return localStorage.setItem("token", token);
    };
    
    const isloggedin = !!istoken;    
    
    const LogoutUser = () => {
        setIstoken("");
        return localStorage.removeItem("token");
    };
    
    const userAuthentication = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/user", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${istoken}`
                }
            });
            if(response.ok) {
                const data = await response.json();
                console.log("user data by get method", data);
                setUserget(data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        userAuthentication();
    }, []);
       
    return <AuthContext.Provider value={{ storetokeninls, isloggedin, LogoutUser, istoken, userget }}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return authContextValue;
};