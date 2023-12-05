import React from 'react'
import './App.css'
import img from './login/image/download.jpeg'
const App = () => {
  const handle = () => {
    alert("Welcome SKCET")
  }
  return (
    <>
    <div className='tit'><h1>Sri Krishna College</h1></div>
    <div className='name'><h2>Name : Vineeth</h2></div>
    <div className='image'><img src={img} alt='img'></img></div>
    <div className='link'><p>To visit SKCET portal <a target='blank' href='https://www.skcet.ac.in/'>CLICK HERE</a></p></div>
    <div className='stx'>click the magic button--{'>'}
    <button className='text' onClick={handle}>Magic</button>
    </div>
    </>
    )
}

export default App