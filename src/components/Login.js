import React,{useState} from 'react'
import axios from 'axios'
import validator from 'validator'

export default function Login(props){
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [formError , setFormError] = useState({})
    const error = {}

    const handleInput = (e)=>{
        const input  = e.target.name
        if(input === "email"){
            setEmail(e.target.value)
        } else if(input ==="password"){
            setPassword(e.target.value)
        }
    }
    const runValidation = ()=>{
        if(email.trim().length === 0){
            error.email = "email cannot be blank"
        } else if(!(validator.isEmail(email))){
            error.email =" invalid email format"
        }

        if(password.trim().length === 0){
            error.password = 'password cannot be blank '
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        // to run validation

        runValidation()

        if(Object.keys(error).length === 0){
            setFormError({})
            
        }

        const formData = {
            email : email,
            password : password
        }
        axios.post('http://dct-user-auth.herokuapp.com/users/login', formData)
            .then((response)=>{
                const result  = response.data
                if(Object.keys(result).includes('errors')){
                    alert(result.errors)
                } else {
                    alert('successfully logged in ')
                    // here we are storing the token in the local storage 
                    localStorage.setItem('token',result.token)
                    props.history.push('/')// redirecting to home component page 
                    props.handleLogginedIn()
                }
            })

            //reset the from 
            setEmail('')
            setPassword('')
    }

    return (
        <div>
            <h2>Login Form</h2>
            <form onSubmit ={handleSubmit}>
                <input type = "email" placeholder ="email" name ="email" value ={email} onChange ={handleInput}/>
                {formError.email && <span>{formError.email}</span>} <br/>

                <input type ="password" placeholder ="password" name ="password" value ={password} onChange ={handleInput}/> 
                {formError.password && <span>{formError.password}</span>} <br/>

                <input type = 'submit' value ="submit"/>
            </form>
        </div>
    )
}