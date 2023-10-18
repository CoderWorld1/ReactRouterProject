import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './Index.css'
import Root from './Root'
import Home from './Components/Home/Home'
import GitHub from './Components/GitHub/GitHub'
import User from './Components/User/User'
import About from './Components/About/About'
// import Login from './Components/Login/Login'
import Contact from './Components/Contact/Contact'
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from 'react-router-dom'
import { createRoutesFromElements } from 'react-router-dom'
import { Route } from 'react-router-dom'



// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },

//       {
//         path: "about",
//         element: <About />
//       },

//       {
//         path: "contact",
//         element: <Contact />
//       }

//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} >
      {/* <Route path="login" element={<Login />} /> */}
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:id" element={<User />} />
      <Route path="github" element={<GitHub />} />
    </Route>

  )
)





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)