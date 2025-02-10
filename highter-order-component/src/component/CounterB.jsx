import { useState } from "react";
import Counter from "./Counter";

const CounterB = ({cnt,incMethod}) => {
    return(
        <div>
            <h1>Counter B</h1>
            <h2>No :- {cnt}</h2>
            <button onClick={ () => incMethod() }>+</button>
        </div>
    )
}
let B = Counter(CounterB)
export default B;