import { useEffect, useState } from "react"
import MessageCounter from "../../message/message-counter";


const ClickCounter = () => {
    
    const [count, setCount] = useState(0);

    useEffect(() => {

        document.title=`Compteur : ${count}`;
        console.log(`Vous avez cliqué ${count} fois`);

    }, [count]); 

    const handleClick = () => {
        setCount(c => c+1);
    };

    const handleReset = () => {
        setCount(c => 0);
    };

    return (
        <div>
            <p>Nombre de clique : {count}</p>
            <button onClick={handleClick}>+1</button>
            <button onClick={handleReset}>Reset</button>

            {count >  5 &&(<MessageCounter/>)}
        </div>
    )
}

export default ClickCounter;