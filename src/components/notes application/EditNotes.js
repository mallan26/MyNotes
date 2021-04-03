import React from 'react'
import NotesForm from './NotesForm'


export default function editNotes({id , title, body ,  handleToggle }){

    return (
        <div> 
            {/* <h2> Edit Mode </h2> */}
            <NotesForm id ={id} title ={title} body ={body} handleToggle = {handleToggle} />
        </div>
    )
}