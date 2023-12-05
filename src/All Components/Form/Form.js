import React from 'react'
import './App.css'
const App = () => {
  return (
    <div className='row'>
      <div className='left'>
             <h3>Welcome</h3>
             <button className='button'>Create Account</button>
      </div>
      <div className='right'>
      <form>
        <label>
        Email:<br>
        </br>
          <input type='text'></input>
        </label>
        <label>
        Password:
        <br></br>
        <input type='password'></input></label>
      </form>
      <div>
      <button className='button'>Sign In!</button></div>
      </div>
    </div>
  )
}

export default App