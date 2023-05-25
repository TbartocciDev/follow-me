import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom"
import * as blogsAPI from "../../utilities/maps-api"
import * as postssAPI from "../../utilities/posts-api"
import BlogHeader from '../../components/BlogHeader/BlogHeader';
import PostList from '../../components/PostList/PostList';
import BlogTypeToggle from '../../components/BlogTypeToggle/BlogTypeToggle';
import MapView from '../../components/MapView/MapView';
import "./BlogPage.css"

export default function BlogPage() {
    const blogID = useParams();
    const [blog, setBlog] = useState("")
    const [blogPosts, setBlogPosts] = useState([]);
    const [blogType, setBlogType] = useState('standard')

  useEffect(function() {
    async function getBlog() {
      const curBlog = await blogsAPI.getBlog(blogID.id);
      setBlog(curBlog);
    }
    getBlog();

    async function getPosts() {
      const posts = await postssAPI.getAll();
      setBlogPosts(posts)
    }
    getPosts();

  }, []);

  if (blogType === 'standard') {
    return (
      <div>
        <BlogHeader blog={blog}/>
        <BlogTypeToggle blogType={blogType} setBlogType={setBlogType}/>
        <PostList posts={blogPosts}/>
      </div>
    )
  } else {
    return (
      <div>
        <BlogHeader blog={blog}/>
        <BlogTypeToggle blogType={blogType} setBlogType={setBlogType}/>
        <MapView posts={blogPosts}/>
      </div>
    )
  }
}