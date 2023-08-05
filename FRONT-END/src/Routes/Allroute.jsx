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

        <Route path="/coffee/:id" element={<SinglePage/>}></Route>
        <Route path="/account" element={<Account/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="/wishlist" element={<Wishlist/>}></Route>
    </Routes>
        
    </div>
  )
}
