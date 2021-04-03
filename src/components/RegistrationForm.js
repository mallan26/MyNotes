import React,{useState } from 'react'
import {useDispatch} from 'react-redux'
import {startGetData} from '../Actions/usersAction'
import validator from 'validator'


export default function RegistrationForm(props){
    const dispatch = useDispatch()
    const [userName , setUserName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [formError , setFormError] = useState({})
    const error  = {}

    const handleInput =(e)=>{
        const input = e.target.name
        if(input === "name"){
            setUserName(e.target.value)
        } else if(input === 'email'){
            setEmail(e.target.value)
        } else if(input === 'password'){
            setPassword(e.target.value)
        }
    }

    const runValidation =()=>{
        // for name
        if(userName.trim().length === 0){
            error.userName = "name cannot be blank"
        }
        // for email
        if(email.trim().length === 0){
            error.email = "email cannot be blank "
        } else if( !(validator.isEmail(email))){
            error.email = "invalid email format"
        }

        // for password
        if(password.trim().length === 0){
            error.password = "password cannot be blank"
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        // form validation
        runValidation()

        if(Object.keys(error).length ===0 ){
            setFormError({})
            const formData={
                username : userName,
                email : email,
                password : password
            }
    
            dispatch(startGetData(formData ,props.history.push ))
            //props.history.push('/login')

            // reset form 
            
            setUserName('')
            setEmail('')
            setPassword('')

        } else{
            setFormError(error)
        }
    }

    return(
        <div>
            <h2>User Registration Form</h2>
            <form onSubmit ={handleSubmit}>
                <input type = "text" placeholder = "userName" name = "name" value ={userName} onChange ={handleInput} /> 
                {formError.userName  && <span>{formError.userName}</span>}<br/>

                <input type = "text" placeholder ="email" name ="email" value ={email} onChange ={handleInput}/>
                {formError.email  && <span>{formError.email}</span>}<br/>

                <input type ="password" placeholder ="password" name ="password" value ={password} onChange ={handleInput}/> 
                {formError.password  && <span>{formError.password}</span>}<br/>

                <input type = 'submit' value ="submit"/>
            </form>
        </div>
    )
}

