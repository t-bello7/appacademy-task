const AuthLayout = ({children}: any) => {
    return (
        <div className="grid place-content-center bg-black text-white h-[100vh]">
            {children}
        </div>
    )
}

export default AuthLayout;