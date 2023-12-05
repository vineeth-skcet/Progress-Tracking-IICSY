import React, { Component } from "react";
export default function Child({gfgcolor, userColor})
{
    return (
        <div>
        <h1>This is a child component</h1>
        <h1 style={{ color: gfgcolor}}> GeeksForGeeks</h1>
        <h1 style={{color:userColor }}>Welcome to Ggf!</h1>
        </div>
    )
}