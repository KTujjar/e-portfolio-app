
import './App.css'
import Navbar from './Components/Navbar'
import Introduction from './Components/Introduction'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'


function App() {


  return (
    <div className="space-y-0">
      <Navbar></Navbar>
      <Introduction></Introduction>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  )
}

export default App
