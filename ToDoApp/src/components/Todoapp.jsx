import React, { useState } from 'react'




const Todoapp = () => {
const [items, setItems] = useState('')
const [tasts, setTasts] = useState([])
const [editid, setEditid] = useState(null)


function addtast(){
  if (items === ""){
alert("todo required")
  return;  
  } 

  // items === ""?alert("todo required"):console.log("add tast")
 
  setTasts([...tasts,{value:items,status:false,id:Date.now()}])


  if(editid){

const newtodo = items;
console.log(newtodo)
setItems({...tasts,newtodo})
// newtodo[items] = tasts;
// setTasts(newtodo);
// setEditid(null)

    
  }else{
// setTasts([...tasts,items])
  }




setItems("")



}

function inputchange(e){
// if(tast === ""){
// alert("todo required")
// }
setItems(e)
console.log(items)

}

// complete tasts todo
function completeTodo(id){
// console.log(todo.id)
const update = tasts.map((todo)=>
  // console.log(todo)
todo.id === id ? {...todo,status: !todo.status} :todo
);
setTasts(update)
// console.log(tasts)
}


/////delete btn
function deletetodo(id){
  // console.log("run",id)
setTasts(tasts.filter(tast => tast.id !== id))



}

function edittasts(id){

setEditid(id)
const update = tasts.filter((todo)=>{
editid !== null ? setItems(todo.value) :todo

})

}



  return (
    <div>
      <h1 className=' text-[2rem] font-bold text-center'>TODO APP</h1>
    <div className=' rounded-md flex justify-around flex-col items-center border-[1px] border-gray-300 max-w-[80%] h-[120px] mx-auto'>

<input value={items}  onChange={(e)=>inputchange(e.target.value)} className=' rounded-md w-[95%] h-[40%] border-2 border-gray-400 p-4 outline-none' type="text" name="" id="" placeholder='New Todo' />
<button onClick={addtast}  className='rounded-md bg-[#16a3b7] text-white font-bold w-[95%] h-[40%] hover:bg-[#87d9e1] hover:duration-500 outline-none '>
  {editid !== null ? "Update":"Add a Tast"}
</button>

    </div>

    {
      tasts.map((todo,index)=>{
        
return(
  <div key={index}  className=' rounded-lg border-[1px] border-gray-800 max-w-[80%] h-[50px] mx-auto mt-10 p-2'>
<div className='flex justify-between '>
<li  className={ todo.status ?'text-red-500 list-none font-bold text-[1.5rem] line-through ':"list-none font-bold text-[1.5rem] no-underline"}> 
{todo.value}

</li>
<div className='pr-4 flex gap-6 '>
<input onClick={()=>{

  completeTodo(todo.id)


}}   type="checkbox" className="w-[30px] h-[30px]" />



<img onClick={()=>edittasts(todo.id)}  className='w-[35px] h-[35px] ' src="src\assets\edit_note_24dp_FBC017_FILL0_wght400_GRAD0_opsz24.png" alt="" />
<img onClick={()=>deletetodo(todo.id)} className='w-[30px] h-[30px] ' src="src\assets\delete_24dp_DA3946_FILL0_wght400_GRAD0_opsz24.png" alt="" />

</div>


</div>
</div>
)

      })
    }




    </div>
  )
}

export default Todoapp
