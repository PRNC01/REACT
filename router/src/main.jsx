import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout, {} from './Components/Layout.jsx'
import { } from './Components/Index.js'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contact, {} from './Components/Contact.jsx'
import User from './Components/User.jsx'
import Github, { githubInfoLoader } from './Components/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout />,
//     children:[
//       {
//         path:'',
//         element:<Home />
//       },
//       {
//         path:'/About',
//         element: <About />
//       },
//       {
//         path:'/Contact',
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/About' element={<About />} />
      <Route path='/Contact' element={<Contact />} />
      <Route loader={githubInfoLoader} path='/Github' element={<Github />} />
      <Route path='/User/:userId' element={<User />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
