import React,{useEffect} from 'react'
import NotesForm from './NotesForm'
import {useDispatch} from 'react-redux'
import {startGetNotse} from "../../Actions/usersAction"
import NotesList from './NotesList'



export default function Notes(){
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(startGetNotse())
    },[])

    return (
        <div>
            <h2>MY Notes component</h2>
            <NotesList/>
            <NotesForm/>
        </div>
    )
}