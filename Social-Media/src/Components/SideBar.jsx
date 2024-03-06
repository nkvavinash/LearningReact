import { Button } from "bootstrap";

const SideBar = ({selectedTab, setSelectedTab}) => {

  const handleonClick = (tabName)=>{
     setSelectedTab(tabName);
  }

  return ( 
    
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{width: "280px"}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none logofont">
      <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      <img src="data:image/png;base64,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" alt="" width="80" height="80" className="rounded-circle me-2"></img>
    
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item" onClick={()=>{handleonClick("Home")}}>
        <a href="#" className= {`nav-link text-white ${selectedTab == "Home" && "active"}`} aria-current="page">
         
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
          Home
        </a>
      </li>
      <li onClick={()=>{handleonClick("Create Post")}}>
        <a href="#" className={`nav-link text-white ${selectedTab === "Create Post" ? "active": null}`}>
       
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
          Create Post
        </a>
      </li>
      
    </ul>
    <hr/>
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"></img>
        <strong>UknownUser</strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
  )


}

export default SideBar;