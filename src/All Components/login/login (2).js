const Login = () => 
  {
    return (
      <div className='right'>
      <h2>Sign In!</h2>
      <form>
        <label>
        Email:<br>
        </br>
          <input type='text'></input><br></br>
        </label>
        <label>
        Password:
        <br></br>
        <input type='password'></input></label>
      </form>
      <div>
      <button className='button'>Sign In!</button></div>
      </div>
    )
  }
  export default Login;