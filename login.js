import React from 'react'
import Videobg from './compo2/lv_0_20240211215024.mp4'
import './login.css'
import { Link } from 'react-router-dom'
import Nav from './compo2/nav.js';
import Footer from './compo2/footer.js'
const login = () => {
  return (
  <>
  <div className="ramon">
<Nav/>  
  <div><video src={Videobg} autoPlay muted loop>
</video></div>
<div className="form-container">
  <form method="post">
    <div className="in-container"><h3>log in </h3><hr/></div>
    <div>
      <label><center>Email:</center></label>
      <input type="email" placeholder="dilipbbx123@gmail.com" id="name" required/><br/>
      <label><center>Password:</center></label>
      <input type="password" placeholder="dilipbbx123"  id="name"/><br/>
    <p>Don't have an account?<Link to='/register'>Register Now</Link></p>
    <input type='submit' value="Log In" className="form-btn"/><br/>
    </div>
    </form>
    </div>
    <Footer/></div>
    </>
  )
}

export default login
