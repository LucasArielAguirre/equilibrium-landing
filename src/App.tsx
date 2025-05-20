import Footer from "./components/Footer";
import Information from "./components/Information";
import  Navbar  from "./components/Navbar";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Contact from "./components/Contact";
import Form from "./components/Form";


function App() {
  return (
    <main className="w-full h-full bg-black">
       <Navbar />
       <Welcome />
       <Information />
       <About />
       <Contact/>
       <Form/>
       <Footer/>
    </main>
  )
}

export default App
