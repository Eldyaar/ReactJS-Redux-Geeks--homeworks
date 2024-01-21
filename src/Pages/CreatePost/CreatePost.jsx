import { useForm } from 'react-hook-form'
import './createPost.scss'

const CreatePost = () => {
   const { register, handleSubmit, reset } = useForm({})

   // Пока-что на консоль
   const onSubmit = (data) => {
      console.log(data)

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
                     {...register('author')} 
                     placeholder='Автор' 
                     type='text' 
                     className='create-post-wrap__form_author' 
                  />
                  <button 
                     type='submit' 
                     className='create-post-wrap__form_btn'
                  >
                     Отправить
                  </button>
               </form>
            </div>
         </div>
      </div>
   )
}

export default CreatePost