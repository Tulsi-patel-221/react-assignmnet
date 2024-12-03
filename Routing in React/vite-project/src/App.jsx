
import './App.css'
import Home from './Home'
import About from './About'
import Contant from './Contant'
import Navbar from './Navbar'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'




function App() {
 
  const router=createBrowserRouter[
    {path:'/',
      element:<div>
           <Navbar/>
           <Home/>
      </div>
     },
     {
       path:'/about',
      element:<div>
      <Navbar/>
      <About/>
   </div>
     },
     {
       path:'/contant',
      element:<div>
      <Navbar/>
      <Contant/>
   </div>
     }
    ]

  return (
    <>
      
      <RouterProvider router={router}/>
      <Navbar/>
      
    </>
  )
}

export default App
