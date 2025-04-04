import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ServicePage from './pages/ServicePage';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import SingleProject from './pages/SingleProject';

function App() {

  return (
    <Router>
      <div className='app'>
       <header>
        <Navbar></Navbar>
       </header>
       
       <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/ABOUT' element={<About/>} />
          <Route path='/SERVICES' element={<ServicePage/>} />
          <Route path='/Portfolio' element={<Projects/>}/>
          <Route path='/Portfolio/:id' element={<SingleProject/>}/>
          <Route path='/BLOG' element={<Blog/>}/>
          <Route path='/CONTACT' element={<Contact/>}/>
        </Routes>
       </main>
       <footer></footer>
      </div>
    </Router>
  )
}

export default App
