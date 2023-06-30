import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    
    const [user, setUser] = useState({
        userName: ''
    })
    const navigate = useNavigate();
    useEffect(() => {
        const userData = localStorage.getItem("userData");
        if (userData) {
            setUser(JSON.parse(userData));
        }
    },[])

    const handleLogout = async () => {
        await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/logout`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
        })
        localStorage.removeItem("userData");
        return navigate('/login')
    }

        return (
    <div className="grid justify-items-center">
        <h1 className="underline underline-offset-8 decoration-8"> Today's Task </h1>
        <div>
            <h2>{user?.userName}</h2>
            <button onClick={handleLogout} type="button"> Logout</button>
        </div>
    </div>
    )
}

export default Header;