import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../Routing/Home"
import About from "../Routing/About"
import Contact from "../Routing/Contact"
import Login from "../Routing/Login"
import Header from "./Header"
import Cart from "./Cart"

function Routing() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pratice" element={<Header />}>
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="cart" element={<Cart />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Routing
