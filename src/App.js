import BtnPrimary from "./buttons/BtnPrimary"
import BtnSecondary from "./buttons/BtnSecondary"
import Home from "./pages/Home"
import PortfolioIndex from "./pages/PortfolioIndex"
import PortfolioDetail from "./pages/PortfolioDetail"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Contact from "./pages/Contact"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PortfolioIndex" element={<PortfolioIndex />} />
          <Route
            path="/PortfolioDetail/Manage"
            element={<PortfolioDetail i={0} />}
          />
          <Route
            path="/PortfolioDetail/Bookmark"
            element={<PortfolioDetail i={1} />}
          />
          <Route
            path="/PortfolioDetail/Insure"
            element={<PortfolioDetail i={2} />}
          />
          <Route
            path="/PortfolioDetail/Fylo"
            element={<PortfolioDetail i={3} />}
          />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
