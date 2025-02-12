import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./component/Home"
import About from "./component/About"
import Product from "./component/Product"

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/ab" element={<About/>}/>
            <Route path="/product" element={<Product/>}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App
