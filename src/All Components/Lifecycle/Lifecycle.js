import React, { Component } from 'react'

export default class Lifecycle extends Component {
    constructor(props)
    {
        super(props);
        this.state={value: ' Initial value'};
        console.log('Constructor');
    }
    componentDidMount()
    {
        console.log('Component did mount');
    }
    componentDidUpdate(prevProps,prevState)
    {
        console.log('Compontnt did Update');
    }
    componentWillUnmount()
    {
        console.log('Component will unmount');
    }
    handleClick = () =>
    {
        this.setState({value: 'Updated value' });
    }
  render() {
    return (
      <div>
      <p>{this.state.value}</p>
      <button onClick={this.handleClick}>Update value</button></div>
    )
  }
}
