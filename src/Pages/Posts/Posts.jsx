import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'

import './posts.scss'


const Posts = () => {
   const [data, setData] = useState([])
   const [allData, setAllData] = useState([])
   const [searchParams, setSearchParams] = useSearchParams()

   const getPostsData = async (url) => {
      try {
         const response = await axios.get(url)
         setData(response.data.posts)
      } catch (e) {
         console.error(`error: ${e}`)
      }
   }

   useEffect(() => {
      const getAllPostsData = async () => {
         try {
            const response = await axios.get('https://dummyjson.com/posts')
            setAllData(response.data.posts)
            setData(response.data.posts)
         } catch (e) {
            console.error(`error: ${e}`)
         }
      }

      getAllPostsData()
   }, [])

   // === Динамическое формирование переключателей ===

   const countPostSwitches = Math.ceil(allData.length / 10)
   const postSwitches = []
   for (let i = 0; i < countPostSwitches; i++) {
      postSwitches.push(i + 1)
   }
   // === / Динамическое формирование переключателей ===

   const pageFilter = (pageId) => {
      console.log(pageId)
      setSearchParams({
         page: pageId
      })

      let urlParam
      for (let i = 1; i <= countPostSwitches; i++) {
         if (i === 1 && pageId === i) {
            urlParam = 0
         } else if (i !== 1 && pageId === i) {
            urlParam = Number(`${i-1}0`)
         }
      }

      getPostsData(`https://dummyjson.com/posts?limit=10&skip=${urlParam}`)
   }

   const resetFilter = () => {
      setSearchParams({})
      getPostsData(`https://dummyjson.com/posts`)
   }

   return (
      <div className='posts'>
         <div className='container'>
            <nav className='posts-nav'>
               <ul className='posts-nav__list'>
                  <li>
                     <button onClick={() => resetFilter()}>Все</button>
                  </li>
                  {postSwitches.map(item => (
                        <li key={item}>
                           <button onClick={() => pageFilter(item)}>{item}</button>
                        </li>
                     )
                  )}
               </ul>
            </nav>
            <div className='posts-wrap'>
               {data.map(post => <Post key={post.id} postData={post} />)}
            </div>
         </div>
      </div>
   )
}

const Post = ({ postData }) => {
   return (
      <div className='posts-wrap-post'>
         <div className='posts-wrap-post__title'>{postData.title}</div>
         <div className='posts-wrap-post__author'>Author {postData.id}</div>
         <div className='posts-wrap-post__desc'>{postData.body}</div>
      </div>
   )
}

export default Posts
