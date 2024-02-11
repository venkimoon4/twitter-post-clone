import { TiSocialTwitter } from "react-icons/ti";
import { Link } from "react-router-dom";

const SideBar=({setOptionName,option})=>{


  const setActiveOption=(optionName)=>{
    setOptionName(optionName)
  }

  

  return (
    <>
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary sideBar" style={{width: "170px",marginLeft:"-55px"}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <span className="fs-4 logo">Twitter<TiSocialTwitter className="bird"/></span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li onClick={()=>setActiveOption('home')} className="nav-item">
        <Link to="/" className={`nav-link ${option==='home' && 'active'}`} aria-current="page">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
          Home
        </Link>
      </li>
      <li onClick={()=>setActiveOption("create-post")}>
        <Link to="create-post" className={`nav-link ${option==='create-post' && 'active'}`} >
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
          Create Post
        </Link>
      </li>
    </ul>
    <hr/>
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong>mdo</strong>
      </a>
      <ul className="dropdown-menu text-small shadow">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
    </>
  )

}

export default SideBar;


