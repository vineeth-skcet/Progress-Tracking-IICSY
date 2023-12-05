import React from 'react';
import ReactDOM from 'react-dom/client';
class Dummy extends React.Component{
    render()
    {
        return <h2>I am {this.props.name}</h2>;
    }
}
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Dummy name="Peter"/>);
export default Dummy