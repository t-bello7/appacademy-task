import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  redirect,
  RouterProvider
} from 'react-router-dom'
import Home from './pages/Home.tsx'
import Login from './pages/Login.tsx'
import Register from './pages/Register.tsx'
import Error from './pages/Error.tsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    loader: async ({ request }) => {
      const user = localStorage.getItem("userData");
      if (!user) {
        throw redirect("/login");
      }
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/tasks`, {
        signal: request.signal,
      });
      const tasks = await res.json();
      return tasks;
  }
  },
  {
    path: "/login",
    element: <Login />,
    loader: async () => {
      const user = localStorage.getItem("userData");
      if (user) {
        return redirect("/")
      }
      return(user)
    }
  },
  {
    path: "/register",
    element: <Register />,
    loader: async () => {
      const user = localStorage.getItem("userData");
      if (user) {
        return redirect("/")
      }
      return(user)
    }
  }
])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
