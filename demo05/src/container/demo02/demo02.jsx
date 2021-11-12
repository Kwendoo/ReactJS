import { useState } from "react";
import DisplayCounter from "../../components/display-counter/display-counter";
import InterractionCounter from "../../components/interraction-counter/interraction-counter";


const Demo02 = () => {

    const [count, setCount] = useState(0);

    const handleIncrement = (step) => {
        setCount(c => c + step);
    }

    const handleDecrement = (step) => {
        setCount(c => c - step);
    }

    return (
        <div>
            <h2>Demo 2</h2>
            <DisplayCounter count={count}/>
            <InterractionCounter 
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}/>
            <InterractionCounter
                step = {5} 
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}/>
        </div>
    );

};

export default Demo02;