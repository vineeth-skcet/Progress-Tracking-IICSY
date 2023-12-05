import React from 'react'
import Signup from './Component/Signup/Signup';
import Signin from './Component/Signin/Signin';
import Dashboard from './Component/Dashboard/Dashboard';
const func1 = () =>
{
    if(window.location.pathname === "/Dashboard")
    {
        return <Dashboard/>
    }
}
const func2 = () =>
{
    if(window.location.pathname === "/Signin")
    {
        return <Signin/>
    }
}
const func3 = () =>
{
    if(window.location.pathname === "/")
    {
        return <Signup/>
    }
}
const App = () => {
  return (
    <div className='ui container'>
    {func1()}
    {func2()}
    {func3()}
    </div>
  )
}

export default App