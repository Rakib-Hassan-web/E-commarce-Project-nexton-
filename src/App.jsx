import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import LayoutOne from './Layout/LayoutOne'
import Home from './pages/Home'
import DetailPage from './pages/DetailPage'
import ProductPage from './pages/ProductPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
  import { ToastContainer } from 'react-toastify';
import CheckOutPage from './pages/CheckOutPage'


function App() {
const [count, setCount] = useState(0)


const myroute = createBrowserRouter(createRoutesFromElements(

<Route>

<Route path='/' element={<LayoutOne/>}>
  
  <Route index element={<Home/>}/>
  <Route path='/DetailPage' element={<DetailPage/>}/>
  <Route path='/Product/:ProductID' element={<ProductPage/>}/>
  <Route path='RegisterPage' element={<RegisterPage/>} />
  <Route path='/LoginPage'   element={<LoginPage/>}/>
  <Route path='/CheckOut'   element={<CheckOutPage/>}/>
</Route>


</Route>


))
return (
<>

<ToastContainer/>

  <RouterProvider router={myroute} />
</>
)
}

export default App