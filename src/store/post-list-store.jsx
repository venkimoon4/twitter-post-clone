import { createContext, useEffect, useReducer, useState } from "react";

 export const PostLists=createContext({
  postList:[],
  addPost:()=>{},
  deletePost:()=>{},
  fetching:[]
});

const reducerFunction=(currentValue,action)=>{

  let newPost=currentValue;

  if(action.type==="ADD_POST"){
   newPost=[action.payload,...currentValue]
  }
  else if(action.type==="DELETE_POST"){
    newPost=currentValue.filter((post)=>post.id!==action.payload)
  }
  else if(action.type="ADD_POSTS_FROM_SERVER"){
    newPost=action.payload;
  }

  return newPost;

}


const PostListProvider=({children})=>{
  
 const [postList,dispatchPostList] =useReducer(reducerFunction,[]);


 const addPost=(userID,title,body,reactions,tags)=>{


  dispatchPostList({
    type:"ADD_POST",
    payload:{
      id:"id" + Math.random().toString(16).slice(2),
      userID,
      title,
      body,
      tags,
      reactions,
    }

  })
  
 }


 const deletePost=(id)=>{

  dispatchPostList({
    type:"DELETE_POST",
    payload:id
  })
 }

const [fetching,setFetching]=useState(false);

useEffect(()=>{
  setFetching(true);
  fetch('https://dummyjson.com/posts')
  .then(res => res.json())
  .then((data)=>{
    dispatchPostList({
      type:"ADD_POSTS_FROM_SERVER",
      payload:data.posts
    })
    setFetching(false);
  });


  return ()=>{
    console.log("Cleaning UseEffect")
  }

},[])





  return(
    <>
    <PostLists.Provider value={{postList,addPost,deletePost,fetching}}>
     {children}
    </PostLists.Provider>
    </>
  )

}


// const DEFAULT_VALUE=[{
//   id:"id" + Math.random().toString(16).slice(2),
//   userId:"venki",
//   postTitle:"Learning React",
//   postContent:"I Am Learnig React Is Hard But Catch On It AnyWay Go Go!",
//   tags:['React','Learning','Pro'],
//   reactions:10,
// },
// {
//   id:"id" + Math.random().toString(16).slice(2),
//   userId:"venki2",
//   postTitle:"Learning DataStructure",
//   postContent:"I Am Learnig DS Is Hard But Catch On It AnyWay Go Go!",
//   tags:['DS','Learning','Pro'],
//   reactions:12,
// }
// ]

export default PostListProvider;