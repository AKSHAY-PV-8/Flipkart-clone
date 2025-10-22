
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ProductListPage from "./pages/ProductListPage"
import ProductDetails from "./pages/ProductDetails"

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/productList" element={<ProductListPage></ProductListPage>}/>
          <Route path="/productDetail/:id" element={<ProductDetails></ProductDetails>}/>
        </Routes>
      </Router>
  )
}

export default App

