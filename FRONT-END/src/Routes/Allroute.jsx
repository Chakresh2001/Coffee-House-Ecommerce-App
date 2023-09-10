import { Route, Routes } from "react-router-dom"
import { Home } from "../Pages/Home"
import { News } from "../Pages/News"
import { Navbar } from "../HomeComponent/Navbar"
import { MokaExpress } from "../Pages/MokaExpress"
import { About } from "../Pages/About"
import { Shop } from "../Pages/Shop"
import { Login } from "../FourIcon/Login"
import { Signup } from "../FourIcon/Signup"

import { SinglePage } from "../SmallComponents/SinglePage"
import { Account } from "../SmallComponents/Account"
import { Cart } from "../FourIcon/Cart"
import { Checkout } from "../Pages/CheckOut"
import { Wishlist } from "../FourIcon/Wishlist"
import { PrivateRoute } from "../AuthContectProvider/PrivateRoute"


export const Allroute = () => {
  return (
    <div>
        
        <Navbar/>

    <Routes>

        <Route path="/" element={<Home/>}></Route>
        <Route path="/News&Blog" element={<News/>}></Route>
        <Route path="/MokaExpress" element={<MokaExpress/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/shop" element={<Shop/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>

        <Route path="/coffee/:id" element={<PrivateRoute><SinglePage/></PrivateRoute>}></Route>
        <Route path="/account" element={<PrivateRoute><Account/></PrivateRoute>}></Route>
        <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>}></Route>
        <Route path="/checkout" element={<PrivateRoute><Checkout/></PrivateRoute>}></Route>
        <Route path="/wishlist" element={<PrivateRoute><Wishlist/></PrivateRoute>}></Route>
    </Routes>
        
    </div>
  )
}
