import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../storage/auth";
export default function Logout(){

    const {LogoutUser} = useAuth();

    useEffect(()=>{
        LogoutUser();
        alert("Logout Successfully")

    },[LogoutUser])
    return <Navigate to = "/login"/>
    
}