import { useEffect} from "react";
import { useForm } from "react-hook-form"
import {IoPersonAddSharp } from "react-icons/io5";
import {IoMail } from "react-icons/io5";
import {IoLockClosed } from "react-icons/io5";
import {IoCalendar } from "react-icons/io5";


const CreateUserForm=({onCreate,editValues,onEdit})=>{

const defaultValues= {first_name:"",last_name:"",email:"",password:"",birthday:""}


const{register,handleSubmit,reset}=useForm()


useEffect(()=>{
    if(editValues){
        reset(editValues)
        
         }
},[editValues,reset])



const onSubmit= (res)=>{
       if(editValues.id) {
           onEdit(res)
                                  
                   }
       else
       {onCreate(res)
        reset(defaultValues)   
    }
    }


   

return(
<div className="create-form">
<form onSubmit={handleSubmit(onSubmit)}>
<div className="inputs">   
  <label htmlFor="name"> <IoPersonAddSharp className="icon-1"/> </label>
  <input required id="name" {...register('first_name')} placeholder='First Name'/>
  <input required id="lastName" {...register('last_name')} placeholder='Last Name'/>

  <label htmlFor="email"><IoMail className="icon-1"/></label>
  <input required id="email" type="email" {...register('email')} placeholder='Email'/>

  <label htmlFor="password"><IoLockClosed className="icon-1"/></label>
  <input autoComplete="new-password" required id="password" {...register('password')} placeholder='Password' type="password"/>

  <label htmlFor="date"><IoCalendar className="icon-1"/></label>
  <input required id="date" {...register('birthday')} type="date"/>
</div>  

<div className="button-cont">
 {editValues.id ? <input className="button-edit" type='submit' value='Edit'/>: <input className="button" type='submit' value='Create'/> }
</div>  



 </form>
</div>
   
)

}

export default CreateUserForm
