import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

import { productActions } from '../../Store/productSlice'

import './addProd.scss'


const AddProduct = () => {
   const { register, handleSubmit, reset } = useForm({})
   const dispatch = useDispatch()

   const onSubmit = async (data) => {
      addSomeProduct(data)

      reset()
   }

   const addSomeProduct = data => dispatch(productActions.addProduct(data))

   return (
      <div className='homework4'>
         <div className='container'>
            <div className='homework4-wrap'>
               <form onSubmit={handleSubmit(onSubmit)} className='homework4-wrap-form'>
                  <h3>Product data</h3>
                  <input
                     {...register('name')}
                     type='text'
                     placeholder='Наименование товара'
                     className='homework4-wrap-form__name'
                  /> 
                  <input 
                     {...register('price')}
                     type='number'
                     placeholder='Цена'
                     className='homework4-wrap-form__price'
                  />
                  <input
                     {...register('create_of_date')}
                     type='date'
                     placeholder='Дата изготовление'
                     className='homework4-wrap-form__date'
                  />
                  <input
                     {...register('origin')}
                     type='text'
                     placeholder='Страна производства'
                     className='homework4-wrap-form__origin'
                  />
                  <button type='submit'>Добавить</button>
               </form>
            </div>
         </div> 
      </div>
   )  
}

export default AddProduct