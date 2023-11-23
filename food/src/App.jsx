import { Route, Routes } from "react-router-dom"
import { Home ,Header,Footer, Menu, MenuInfo, About, Contac} from "./comonents"

function App() {

  return (
    <div>
      <Header />
     
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu  />} />
      <Route path="/menu/:id" element={<MenuInfo />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contac />} />
    </Routes>
    <Footer />
    </div>
  )
}

export default App
