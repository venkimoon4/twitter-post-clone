import { useContext, useRef } from "react";
import { PostLists } from "../store/post-list-store";
import { Form } from "react-router-dom";

const CreatePost = () => {

  const { addPost } = useContext(PostLists);


  const userIdElemenet = useRef();
  const postTitleElement = useRef();
  const postContentElement = useRef();
  const tagsElement = useRef();
  const reactionsElement = useRef();

  const getPosts = () => {
    const userID = userIdElemenet.current.value;
    const postTitle = postTitleElement.current.value;
    const postContent = postContentElement.current.value;
    const reactionsString = reactionsElement.current.value;
    const reactions = Number(reactionsString);
    console.log(reactions)
    const tags = tagsElement.current.value.split(" ");

    addPost(userID, postTitle, postContent, reactions, tags)

    userIdElemenet.current.value = "";
    postTitleElement.current.value = "";
    postContentElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

  };

  return (
    <>

      <Form className="create-post">

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            User Id
          </label>
          <input
            type="user-id"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            ref={userIdElemenet}
            name="userId"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Post Title
          </label>
          <input
            type="post-title"
            className="form-control"
            id="exampleInputPassword1"
            ref={postTitleElement}
            name="title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Post Content
          </label>
          <textarea
            rows={5}
            className="form-control"
            id="exampleInputPassword1"
            ref={postContentElement}
            name="body"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Reactions
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputPassword1"
            ref={reactionsElement}
            name='reactions'
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Tags
          </label>
          <input
            type="tags"
            className="form-control"
            id="exampleInputPassword1"
            ref={tagsElement}
            name="tags"
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={getPosts}>
          Submit
        </button>

      </Form>

    </>

  );
};

// export async function activeAddPost(data){

//   const { addPost } = useContext(PostLists);

//   const formData= await data.request.formData();
//   const postData=Object.fromEntries(formData);

//   postData.tags=postData.tags.split(" ")

//   console.log(postData);

//   addPost(postData)

//   return redirect('/')

// }


export default CreatePost;
