import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import React, {Component, Fragment} from 'react'
import Counter from "./Counter"

class CounterList extends Component {
    state = {
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 0},
        ],
    };

    plus = (id) => {
        const {counters} = this.state;
        let arr = counters.map(counter => {
            if(id === counter.id)
            counter.value++;
            return {id: counter.id, value: counter.value}
        })
        this.setState({
            counters: arr
        })
    }

    minus = (id) => {
        const {counters} = this.state;
        let arr = counters.map(counter => {
            if(id === counter.id)
            counter.value--;
            return {id: counter.id, value: counter.value}
        })
        this.setState({
            counters: arr
        })
    }
    reset = () => {
        console.log("reset")
        // destructurung
        const {counters} = this.state;

        // map is a CALLBACK
        // destructuring
        let arr = counters.map(counter => {
            console.log(counter.value)
            return {id: counter.id, value:0}
        });
        this.setState(
             {counters: arr, }
        );

            // better destrucutign
            // let {id} = counter;
            // return {counter};

    }
    
    //render
    render() 
        {
            const {counters} = this.state;

    return <div>
        <button className='reset' onClick={this.reset}>reset</button>
        { counters.map( (counter) => 
            <Counter key={counter.id} value={counter.value} id={counter.id} plus={this.plus} minus={this.minus}></Counter>
            )}
            </div>
        }
    
    }
    
    export default CounterList;