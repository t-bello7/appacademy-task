import AuthLayout from "../layouts/authLayout"

const Register = () => {
    return(
        <AuthLayout>
            <h1> Create your account </h1>
            <h2> Enter your personal informtion</h2>

            <form className="flex flex-col">
                <div> Username </div>
                <input />

                <div> Password </div>
                <input />

                <div> Confirm Password </div>
                <input />

                <button> Sign Up </button>
            </form>

            <span>
                Already have an account ? <a href={`/login`}> Login </a>
            </span>
        </AuthLayout>
    )
}

export default Register