import { useState } from "react"
import { useNavigate } from "react-router-dom"
import AuthLayout from "../layouts/authLayout"

const Login = () => {
    const [error, setError] = useState<any>([])
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        userName: '',
        password: '',
    })
    const handleChange = (e: any) => {
        setFormData({... formData, 
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        try {
            const userData = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            const result = await userData.json()
            
            if (userData.status === 200) {
                localStorage.setItem("userData", JSON.stringify(result))
                navigate("/");
                }
            setError(["Invalid Credentials"])
        } catch (err) {
            console.log("Error", err);
        } 
    }


    return(
        <AuthLayout>
            <div>
            <h1> Hello Again </h1>
            <h2> Enter your login details below </h2>

            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                <div> Username </div>
                <input className="text-black" name="userName" value={formData.userName} onChange={handleChange} placeholder="enter username" required />

                <div> Password </div>
                <input  className="text-black" name="password" value={formData.password} onChange={handleChange} placeholder="enter password" required />
                {
                    error.map((err: any, index: any) => (<li key={index}> {err} </li>))
                }
                <button className="bg-white text-black w-[50%]" type="submit"> Login </button>
            </form>
            <span> Don't have an account ?  </span> <a href={`/register`}> Sign Up </a>
            </div>
        </AuthLayout>
    )
}

export default Login