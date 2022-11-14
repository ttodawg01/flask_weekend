import React, {useEffect, useState} from 'react'
import PostCard from './PostCard';

export default function Home(props) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("https://kekambas-blog.herokuapp.com//blog/posts")
        .then(response => response.json())
        .then(result => {
            console.log(result)
            setPosts(result)
        })
        .catch(error => console.log('error', error));
    }, [])
    return (
    <>
    <h1 className='text-center'>Home Page</h1>
    {posts.map(x => <PostCard post = {posts}/>)}
    </>
  )
}
