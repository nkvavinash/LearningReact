import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Components/Header';
import Footer from './Components/Footer';
import SideBar from './Components/SideBar';
import CreatePost from './Components/CreatePost';
import Post from './Components/Post';
import PostList from './Components/PostList';

function App() {
  const [selectedTab, setSelectedTab] = useState("Home")

  return (
    
  <>
  <div className="app-container">
      <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></SideBar>
      <div className="content">
        <Header></Header>
        {selectedTab === "Home" ? (
        <PostList></PostList>
        ):(<CreatePost></CreatePost>)

}
      </div>
    </div><div className='footer'>
        <Footer></Footer>
      </div>
      
   </>
      
  )
}

export default App;
