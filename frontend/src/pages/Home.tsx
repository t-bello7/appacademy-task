import Header from "../components/Header"
import TodoContainer from "../components/TodoContainer"
import TodoForm from "../components/TodoForm"

const Home = () => {

    return(
        <div className="w-[90%] h-screen container mx-auto">
            <div className="rounded-lg px-6 py-8 mt-[10vh] shadow-xl bg-white">
                <Header />
                <TodoForm />
                <TodoContainer />
            </div>
        </div>
    )
}

export default Home