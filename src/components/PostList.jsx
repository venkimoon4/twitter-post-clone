import { useContext } from "react";
import { PostLists } from "../store/post-list-store";
import Post from "./Post";
import Message from "./Message";


const PostList = () => {

  const {postList}=useContext(PostLists);

  return (
    <>
    <Message/>  
    {postList.map((posts)=><Post key={posts.id} posts={posts}></Post>)}
    </>
  );
};

export default PostList;
