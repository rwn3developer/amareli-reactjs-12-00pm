import { useState } from "react";
import Counter from "./Counter";

const CounterC = ({cnt,incMethod}) => {
    return(
        <div>
            <h1>Counter C</h1>
            <h2>No :- {cnt}</h2>
            <button onClick={ () => incMethod() }>+</button>
        </div>
    )
}
let C = Counter(CounterC)
export default C;