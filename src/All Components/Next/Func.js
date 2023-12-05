function Func()
{
  return <Greeting name="Peter"/>
}

function Greeting(props)
{
  return (
    
    <div className><h1>
        Dr Octopus : Hello,{props.name}!
    </h1>
    </div>
  );
}
export default Func;