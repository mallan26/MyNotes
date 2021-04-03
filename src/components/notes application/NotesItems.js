import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { startGetRemove } from '../../Actions/usersAction'
import EditNotes from './EditNotes'

export default function NotesItems({_id , title , body}){
    const dispatch = useDispatch()
    const [toggle , setToggle] = useState(false)
    
    const handleRemove = ()=>{
        dispatch(startGetRemove(_id))
    }

    const handleToggle =()=>{
        setToggle(!toggle)
    }

    return (
        <div>
            {toggle ? (
                <div>
                    <EditNotes id ={_id} title ={title} body ={body} handleToggle ={handleToggle} />
                    <button onClick ={handleToggle}>cancel</button>
                </div>
            ) : (
                <blockquote>
                    <h4>Title : {title}</h4>
                    <p>Body : {body}</p>
                    <button onClick = {handleRemove} >remove</button>
                    <button onClick = {handleToggle} >Edit</button>
                </blockquote>
            )}
        </div>
    )
}