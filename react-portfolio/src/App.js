
import Header from './Component/Header'
import {Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Project from './pages/Project'
import Landing from './pages/Landing'


function App() {
  return (
    <>

      <Header />

      <Routes>
        {/* these create a single page app but with link to display different sections of the app */}
        <Route path="/" element={<Landing  />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/Project" element={<Project />}/>
        <Route path="/About" element={<About  />}/>
        
      </Routes>
    </>
  )
}

export default App;
