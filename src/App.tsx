import {BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import { Footer } from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import { AlertProvider } from "./context/alert/AlertContext";
import { GithubProvider } from "./context/githubContext/GithubContext";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";


function App() { 
  return (
    <GithubProvider>
      <AlertProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />  
          <main className="container mx-auto px-3 pb-12">
            <Routes>
              < Route path="/" element={<Home />} />
              < Route path="/about" element={<About />} />
              < Route path="/notfound" element={<NotFound />} />
              < Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div> 
      </Router>  
      </AlertProvider>
  </GithubProvider>
  )
}



export default App
