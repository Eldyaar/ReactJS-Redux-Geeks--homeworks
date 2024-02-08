import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import './createPost.scss'


const CreatePost = () => {
   const { register, handleSubmit, reset } = useForm({})
   const navigate = useNavigate()

   const onSubmit = async (data) => {
      try {
         const response = await axios.post('https://dummyjson.com/posts/add', data)
         navigate('/posts')
         
      } catch (e) {
         console.error(`error: ${e}`)
      }
      
      reset()
   }
   
   return (
      <div className="create-post">
         <div className="container">
            <div className='create-post-wrap'>
               <form onSubmit={handleSubmit(onSubmit)} className='create-post-wrap__form'>
                  <input 
                     {...register('title')} 
                     placeholder='Название поста' 
                     type='text' 
                     className='create-post-wrap__form_title' 
                  />
                  <textarea 
                     {...register('body')} 
                     placeholder='Описание' 
                     type='text' 
                     className='create-post-wrap__form_desc' 
                  />
                  <input 
                     {...register('userId')} 
                     placeholder='User id' 
                     type='number' 
                     className='create-post-wrap__form_author' 
                  />
                  <button 
                     type='submit' 
                     className='create-post-wrap__form_btn'
                  >
                     Создать
                  </button>
               </form>
            </div>
         </div>
      </div>
   )
}

export default CreatePost