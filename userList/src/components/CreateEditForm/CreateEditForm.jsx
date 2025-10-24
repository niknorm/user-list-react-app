import {useForm} from 'react-hook-form'
import styles from '../CreateEditForm/CreateEditForm.module.css'

function CreateEditForm({onSubmit, defaultValues = {}, onClose }) {

    const {
        register,
        handleSubmit, 
        reset,
        formState: {errors}
     } = useForm({defaultValues})

     const submitHandler = (data) => {
        onSubmit(data)
        reset()
        if(onClose) onClose()
     }

    return(
        <form  onSubmit={handleSubmit(submitHandler)}
        className={styles['modal-form']}>
            <div>
                
                <input 
                {...register('name',{required: true})}
                placeholder='Введите имя' 
                />
                {errors.name && <span>Обязательное поле</span>}
            </div>
            <div>
                
                <input 
                {...register('username',{required: true})}
                placeholder='Введите фамилию' 
                />
                {errors.username && <span>Обязательное поле</span>}
            </div>
            <div>
                
                <input 
                {...register('age',{required: true,  min: 1})}
                placeholder='Введите возраст' 
                />
                {errors.age && <span>Обязательное поле</span>}
            </div>
            <button type='submit'>Сохранить</button>

        </form>
    )
}

export default CreateEditForm