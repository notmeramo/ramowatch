import React from 'react'
import Videobg1 from './compo2/lv_0_20240211215024.mp4'
import './register.css'
import { Link } from 'react-router-dom'
import Nav from './compo2/nav.js';
import Footer from './compo2/footer.js'
const register = () => {
  return (
    <><div className="ramo">
    <Nav/>  
      <div><video src={Videobg1} autoPlay muted loop>
    </video></div>
    <div div className="form-containerr">
      <form method="post">
        <div className="in-containerr"><h3>register now</h3><hr/></div>
        <div>
          <label><center>Name:</center></label>
          <input type="text" placeholder="Dilip Sarukahni" id="name" required/>
          <label><center>Email:</center></label>
          <input type="email" placeholder="dilipbbx123@gmail.com" id="name" required/><br/>
          <label><center>Password:</center></label>
          <input type="password" placeholder="dilipbbx123"  id="name"/><br/>
          <label><center>Confirm Password:</center></label>
          <input type="password" placeholder="dilipbbx123" id="name"/><br/>
        <p>already have an account?<Link to='/login'>login now</Link></p>
        <input type='submit' value="Register" className="form-btn"/><br/>
        </div>
        </form>
        </div>
        <Footer/></div>
        </>
  )
}

export default register
