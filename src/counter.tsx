import { useState } from "react";

const Counter=()=>{
    const [count, setCount] = useState("");
    return <><div style={{ border: "1px solid red" }}>{count}</div>
    <input type="text" onChange={(event) => { setCount(event.target.value) }} />
    </>
}

export default Counter;
