import { useState } from "react";


const MultiNumber = () => {

    const [nb, setNb] = useState(1);

    const handleReste = () => {
        setNb(1);
    }

    const handleMulti2 = () => {
        setNb( nb => nb * 2)
    }

    const handleDivide2 = () => {
        setNb( nb => nb / 2)
    }

    return (
        <>
        <h3>Multiplication d'un nombre</h3>
        <p>Valeur actuel du nombre : {nb}</p>

        <button onClick={handleReste}>Reset</button>
        <button onClick={handleMulti2}>X2</button>
        <button onClick={handleDivide2}>/2</button>
        <button onClick={() => setNb(nb => nb * 3)}>X3</button>
        </>
    )
}

export default MultiNumber;