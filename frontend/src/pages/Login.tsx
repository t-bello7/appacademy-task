import AuthLayout from "../layouts/authLayout"


const Login = () => {
    return(
        <AuthLayout>
            <h1> Hello Again </h1>
            <h2> Enter your login details below </h2>

            <form className="flex flex-col">
                <div> Username </div>
                <input />

                <div> Password </div>
                <input />

                <button> Login </button>
            </form>
            Don't have an account ? <a href={`/register`}> Sign Up </a>
        </AuthLayout>
    )
}

export default Login