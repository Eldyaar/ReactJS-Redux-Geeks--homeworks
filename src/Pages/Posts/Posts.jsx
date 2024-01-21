import { useEffect, useState } from 'react'
import './posts.scss'

const Posts = () => {
   const [data, setData] = useState([])

   useEffect(() => {
      const getPostsData = async () => {
         try {
            const response = await fetch('https://dummyjson.com/posts')
            const postsData = await response.json()
            setData(postsData.posts)
         } catch (e) {
            console.error(`error: ${e}`)
         }
      }

      getPostsData()
   }, [])

   return (
      <div className='posts'>
         <div className='container'>
            <div className='posts-wrap'>
               {data.map((post) => <Post key={post.id} postData={post} />)}
            </div>
         </div>
      </div>
   )
}

const Post = (postData) => {
   return (
      <div className='posts-wrap-post'>
         <div className='posts-wrap-post__title'>{postData.postData.title}</div>
         <div className='posts-wrap-post__author'>Author {postData.postData.id}</div>
         <div className='posts-wrap-post__desc'>{postData.postData.body}</div>
      </div>
   )
}

export default Posts
