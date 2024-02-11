import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Footer from '../components/Footer'
import CreatePost from "../components/CreatePost"
import PostList from "../components/PostList"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react'
import PostListProvider from '../store/post-list-store'
import { Outlet } from 'react-router-dom'

function App() {




  const [option,setOption]=useState("home");


  const setOptionName=(optionName)=>{

    setOption(optionName)

  }

  return (
    <PostListProvider>
    <div className='container'>
    <SideBar option={option} setOptionName={setOptionName}/>
    <div className='div-con'>
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
    </div>
    


    
    </PostListProvider>
  )
}

export default App
