import React, { useReducer, useState } from 'react'

let ini = {
  name : "",
  category : "",
  price : 0,
  description : "",
  color : "",
  image : "",
  image2 : "",
  id : 0
}

function reducer(state, action){
  switch(action.type){
    case "change" : {
      return {
        ...state,
        [action.payload.name] : action.payload.value
      }
    }
    case "reset":{
      return {
        ...ini
      }
    }
    default : {return {state}}
  }
}

export const Signup = () => {


  let [formData, dispatch] = useReducer(reducer, ini)

  let [data, setData]= useState([])

  let handelChange = (e)=>{
    let {value,name,type} = e.target
    let obj = {
      name : name,
      value : type=="number" ? Number(value) : value
    }
    dispatch({type:"change", payload:obj})
  }

  let handelSubmit=(e)=>{
    e.preventDefault()

    let newData = {...formData}

   setData([...data,newData])
   dispatch({type:"reset"})
  }

  console.log(JSON.stringify(data))


  return (
    <div style={{marginTop:"100px", display:"flex", justifyContent:"center"}}>

      <div>

<form onSubmit={handelSubmit}>

<input type="text" name='name' value={formData.name}  onChange={handelChange} style={{border:"1px solid black"}} placeholder='name'/>
<br />
<br />
<input type="text" name='category' value={formData.category}  onChange={handelChange} style={{border:"1px solid black"}} placeholder='category'/>
<br />
<br />
<input type="number" name='price' value={formData.price}  onChange={handelChange} style={{border:"1px solid black"}} placeholder='price'/>
<br />
<br />
<input type="text" name='description' value={formData.description}  onChange={handelChange} style={{border:"1px solid black"}} placeholder='desc'/>
<br />
<br />
<input type="text" name='color' value={formData.color}  onChange={handelChange} style={{border:"1px solid black"}} placeholder='color'/>
<br />
<br />
<input type="text" name="image" value={formData.image} onChange={handelChange} style={{border:"1px solid black"}} placeholder='image'/>
<br />
<br />
<input type="text" name="image2" value={formData.image2} onChange={handelChange} style={{border:"1px solid black"}} placeholder='image2'/>
<br />
<br />
<input type="submit" />
</form>


      </div>

    
    </div>
  )
}
