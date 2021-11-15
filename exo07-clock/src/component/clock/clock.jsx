import { useEffect, useState } from "react";


const Clock = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTime(new Date());
        }, 200);

        return () => {
            clearTimeout(timer);
        }
    });

    const hours = time.getHours().toString().padStart(2,0);
    const min = time.getMinutes().toString().padStart(2,0);
    const sec = time.getSeconds().toString().padStart(2,0);


    return (
        <>

            <p>{hours} : {min} : {sec}</p>
            <p>{time.toLocaleTimeString()}</p>

        </>
    )

};

export default Clock;