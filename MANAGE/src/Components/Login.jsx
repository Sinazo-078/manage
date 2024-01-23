import React from 'react'
// import 'bootstrap/dist/cs/bootsrap.min.css'

const Login = () => {
  return (
    
    <div className="d-flex justfy-content-center align-item-center vh-100 loginPage" >  
    <div className="p-3 rounded w-25 border loginForm" >
      <h2>Login Page</h2> 
      <form>
   
       <div>
        <label htmlfor="email"><strong>Password</strong></label>
        <input type="Email" name="email"autoComplete="off" placeholder="Enter Email"
        className='form-control rounded-0'/>
           </div> 
           
       <div>
        <label htmlfor="password">Email:</label>
        <input type="password" name="password"autoComplete="off" placeholder="Enter Email"
        className='form-control rounded-0'/>

           </div> 
           <button className='btn btn sucess w-100 rounded-0'>Submit</button> 
        </form>
    </div>  
</div>
  )
}

export default Login
