import { useState } from "react"
import { useNavigate } from "react-router-dom"
import AuthLayout from "../layouts/authLayout"

const Register = () => {
    const [error, setError] = useState<any>([])
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        userName: '',
        password: '',
        confirm_password: '',
    })
    const handleChange = (e: any) => {
        setFormData({... formData, 
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e: any) => {
        e.preventDefault()   
        setError([])
        if (formData.confirm_password !== formData.password) {
            setError(["Password don't match"])
            return false
        }
        try {
            const userData = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            const result = await userData.json()
            if (result.message === "User already exist"){
                setError(["Username already exist"])
                return false
            }
            if (userData.status === 200) {
                // pass the param of user 
                return navigate("/login");
            }
          
        } catch (err) {
            console.log("Error", err);
        }
    }   
    return(
        <AuthLayout>
            <h1> Create your account </h1>
            <h2> Enter your personal informtion</h2>

            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                <div> Username </div>
                <input className="text-black" name="userName" value={formData.userName} onChange={handleChange} placeholder="enter username" required/>

                <div> Password </div>
                <input className="text-black" name="password" value={formData.password} onChange={handleChange} placeholder="enter password" required/>

                <div> Confirm Password </div>
                <input className="text-black" name="confirm_password" value={formData.confirm_password} onChange={handleChange} placeholder="confirm password" required/>
                {
                    error.map((err: any, index: any) => (<li key={index}> {err} </li>))
                }
                <button type="submit" className="bg-white text-black w-[50%]"> Sign Up </button>
            </form>

            <span>
                Already have an account ? <a href={`/login`}> Login </a>
            </span>
        </AuthLayout>
    )
}

export default Register