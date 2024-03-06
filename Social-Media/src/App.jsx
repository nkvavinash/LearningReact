import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Components/Header';
import Footer from './Components/Footer';
import SideBar from './Components/SideBar';
import CreatePost from './Components/CreatePost';

function App() {
  const [count, setCount] = useState(0)

  return (
    
  <>
  <div className="app-container">
      <SideBar></SideBar>
      <div className="content">
        <Header></Header>
        <div className="createpost">
          <CreatePost></CreatePost>
        </div>
      </div>
    </div><div className='footer'>
        <Footer></Footer>
      </div>
      
      </>
        
   
  )
}

export default App;
