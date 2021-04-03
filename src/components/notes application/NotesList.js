import React from 'react'
import {useSelector} from "react-redux"
import NotesItems from './NotesItems'

export default function NotesList(){
    const data = useSelector((state)=>{
        return state.notes
    })

    return(
        <div>
            <h2>Notes List</h2>
            {data.map(ele =>{
                return <NotesItems key={ele._id} {...ele}/>
            })}
        </div>
    )
}