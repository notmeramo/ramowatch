import React from 'react'
import { Link } from 'react-router-dom'
import logo from './compo2/hello.png'
import Video from './compo2/gear5.mp4'
const landing = () => {
  return (<>
    <div>
    <div className='hentai'><video src={Video} autoPlay muted loop>
</video></div>
    
    <div className='App'>
      <Link to='/home'><img src={logo} className="App-logo" alt="logo" /></Link><p>Click the LOGO to Go to Home</p>
      </div>  
      </div>
    </>
  )
}

export default landing
