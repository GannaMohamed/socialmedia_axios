import React, {Component} from 'react'
class Counter extends Component{
    render() 
    {
        const {plus, minus, id} = this.props;
        return <div className='counter'>
        <button onClick={()=> {plus(id)}}>+</button>
        <h1>{this.props.value}</h1>
        <button onClick={()=> {minus(id)}}>-</button>
        </div>
    }
}

export default Counter;



// ##passing event arguments
// ##make counters component and ONE RESET BUTTON
// ##flipButton
// ##dynamic programming