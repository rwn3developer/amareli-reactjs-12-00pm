import { useState } from "react"

const Counter = (Newcomponent) => {
    return () => {
        const [no,setNo] = useState(0);
        const Increment = () => {
            setNo(no + 1);
        }
        return (
            <Newcomponent 
                    cnt={no}
                    incMethod={Increment}
            />
        )
    }
}
export default Counter