import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import * as postsAPI from "../../utilities/posts-api"

export default function PostPage() {
    const postID = useParams();
    const [post, setPost] = useState("")

  useEffect(function() {
    async function getPost() {
      const curPost = await postsAPI.getPost(postID.id)
      setPost(curPost);
    }
    getPost();

  }, []);

  return (
      <div>
          <h1>Post Page</h1>
          <h2>{post.title}</h2>
      </div>
  )
}