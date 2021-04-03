import React,{useState , useEffect} from 'react'
import NavBar from './components/NavBar'

const App =()=>{
  const [loggedIn , setLoggedIn] = useState(false)

  const handleLogginedIn = ()=>{
    setLoggedIn(!loggedIn)
  }

  useEffect(()=>{
    if(localStorage.getItem('token'))
      handleLogginedIn()
  },[])
  
  return (
    <div>
      <h1> My Notes Application </h1>
      <NavBar loggedIn = {loggedIn} handleLogginedIn = {handleLogginedIn}/>
    </div>
  )
}

export default App;
