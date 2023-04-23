import { useState } from "react";
import Son from "./son";

const Parent = ({ children }: { children: any }) => {
    console.log('Parent');
    const [point, setpoint] = useState({ x: 0, y: 0 });
    return <div style={{ width: '20px', height: '20px', border: '1px solid red', position: 'absolute', left: point.x, top: point.y }} onMouseMove={(event) => {
        setpoint({ x: event.clientX, y: event.clientY });
    }}>
        {children}
    </div>
}

export default Parent;