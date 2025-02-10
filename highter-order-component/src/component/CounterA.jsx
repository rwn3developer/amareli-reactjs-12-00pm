import { useState } from "react";
import Counter from "./Counter";
const CounterA = ({cnt,incMethod}) => {
    return(
        <div>
            <h1>Counter A</h1>
            <h2>No :- {cnt}</h2>
            <button onClick={ () => incMethod() }>+</button>
        </div>
    )
}
let A = Counter(CounterA)
export default A;