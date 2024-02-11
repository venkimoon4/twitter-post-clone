import { useContext, useState } from "react";
import { MdDelete } from "react-icons/md";
import { PostLists } from "../store/post-list-store";
import { FcLike } from "react-icons/fc";
import { FaRetweet } from "react-icons/fa6";
import { BiCommentDetail } from "react-icons/bi";
import { TiSocialTwitter } from "react-icons/ti";
import { RiUser3Line } from "react-icons/ri";

const Post=({posts})=>{


 const {deletePost}=useContext(PostLists);

  const getPostId=(id)=>{
   deletePost(id)
  }

  const[reacts,setReacts]=useState(false);
  const[reaction,setReactions]=useState(posts.reactions);

  const onReactionClick=()=>{
    if(reacts===false){
    setReactions(posts.reactions+=1);
    console.log(reaction)
     setReacts(true);
  }
  else if(reacts===true){
    setReactions(posts.reactions-=1);
    setReacts(false);
  }
  }


return (
  <>
  <div className="card post-card" style={{width: "700px",height:"fit-content"}}>

      <div className="profile">
      
      <div>
       <TiSocialTwitter className="bird"/>
      </div>

      <div style={{display:"flex"}}>
      <RiUser3Line className="user" />
      <h6 className="card-title">{posts.userID}</h6>
       </div>

       
       
       

       <div className="delete-icon" onClick={()=>getPostId(posts.id)}>
        <MdDelete />
        </div>

       </div>

        <div className="card-body">
          
          <h5 className="card-title">{posts.title}</h5>
          <p className="card-text">
           {posts.body}
          </p>
          {posts.tags.map((tag)=><span key={tag} className="badge text-bg-primary">#{tag}</span>)}

         <div className="social-container">
          <div className="reactions-container-1" title="Likes">
            {/*  */}
            <div className="heart-container" title="Like">
            <input type="checkbox" className="checkbox" id="Give-It-An-Id" onClick={onReactionClick} />
            <div className="svg-container">
                <svg viewBox="0 0 24 24" className="svg-outline" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
                    </path>
                </svg>
                <svg viewBox="0 0 24 24" className="svg-filled" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
                    </path>
                </svg>
                <svg className="svg-celebrate" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="10,10 20,20"></polygon>
                    <polygon points="10,50 20,50"></polygon>
                    <polygon points="20,80 30,70"></polygon>
                    <polygon points="90,10 80,20"></polygon>
                    <polygon points="90,50 80,50"></polygon>
                    <polygon points="80,80 70,70"></polygon>
                </svg>
            </div>
        </div>
            {/*  */}
          <div className=" reaction"  role="alert">
           {reaction}
          </div>
          </div>

          <div>
          <FaRetweet className="retweet"/>
          </div>

          <div>
          <BiCommentDetail className="comment"/>
          </div>
          </div>

        </div>
      </div>
  </>
)

}


export default Post;