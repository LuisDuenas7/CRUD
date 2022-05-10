import {IoBrush } from "react-icons/io5";
import {IoTrash,IoBrushOutline } from "react-icons/io5";
import {FaBirthdayCake} from "react-icons/fa";
import { useState } from "react";



const CardUser=({usersObj,onDelete,onEdit})=>{

    const[isEditing,setIsEditing]=useState(false)
    

const unselect={id:"",first_name:"",last_name:"",email:"",password:"",birthday:""}

return(
<div className={isEditing ? "card-box1" : "card-box"}>
 
   <div className="name">
   <span>{usersObj.first_name}</span>
   <span>{usersObj.last_name}</span>     
   </div>
   <div className="info">
     <span className="text-color">{usersObj.email}</span>
     <span><FaBirthdayCake className="icon-3"/> {usersObj.birthday}</span>
   </div>
  
  <div className="edit-delete"> 
  <div className="info-icon">
    <button onClick={()=> onEdit(usersObj,setIsEditing(true)) }> 
       <i><IoBrush className="icon-2"/>Edit</i>
    </button></div>   
  
    <div className="info-icon">
    <button onClick={()=> onEdit(unselect,setIsEditing(false)) }> 
      { isEditing ? <i><IoBrushOutline className="icon-5"/>Finish </i> : <i><IoBrushOutline className="icon-4"/></i>  }
    </button></div> 

    <div className="info-icon">
    <button onClick={()=> onDelete(usersObj.id)}  > 
        <i><IoTrash className="icon-delete"/>Delete</i>
    </button></div>
  </div>


</div>
)
}

export default CardUser