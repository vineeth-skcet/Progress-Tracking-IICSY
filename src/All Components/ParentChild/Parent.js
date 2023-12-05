import React, { Component } from 'react';
import Child from "./Child";
function App()
{
    return (
        <di>
        <h1>This is parent Component</h1>
        <ul>
        <li>
        <Child 
                gfgcolor="green"
                userColor="blue"
                />
        </li>
        </ul>
        </di>
    )
}
export default App