import React,{useState} from 'react'
import {startGetAddNotes , startGetEdit} from '../../Actions/usersAction'
import {useDispatch} from 'react-redux'

export default function NotesForm({id , title:name , body:text , handleToggle}){
    const dispatch = useDispatch()
    const [title , setTitle] = useState(name ? name : '')
    const [body , setBody] = useState(text ? text : '')

    const handleInput =(e)=>{
        const input  = e.target.name
        if(input === "title"){
            setTitle(e.target.value)
        } else if(input === "body"){
            setBody(e.target.value)
        }
    }
const handleSubmit =(e)=>{
    e.preventDefault()

    const formData = {
        title : title,
        body : body
    }

    if(handleToggle){
        dispatch(startGetEdit(id , formData))
        handleToggle()
    } else {
        dispatch(startGetAddNotes(formData))
    }
    
}


    return(
        <div>
            {name ? <h2>Edit Form</h2> : <h2>Notes Form</h2>}
            <form onSubmit ={handleSubmit}>
                <input type='text' placeholder ="notes title" name = "title" value ={title} onChange = {handleInput}/> 
                <br/> <br/>
                <textarea type = "text" placeholder ="write notes here ..." name ='body' value ={body} onChange={handleInput}/>
                <br/>
                <input type = "submit" value ="save"/>
            </form>
        </div>
    )
}