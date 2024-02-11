import { useContext } from "react";
import { PostLists } from "../store/post-list-store";
import LoadingSpinner from "./LoadingSpinner";

const Message=()=>{

  const {postList,fetching}=useContext(PostLists);


  return (
    <div className="message">
    {fetching===true && <LoadingSpinner/>}
    {fetching===false && postList.length===0 && <h2 >There Are No Post Yet</h2>}
    </div>
  )

}

export default Message;