import { useState } from "react";

const BasiqueForm = () => {

    const [pseudo, setPseudo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit !!!');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
            <label>Pseudo </label>
            <input type="text" 
                value={pseudo} 
                onChange={(e) => setPseudo(e.target.value)}/>
            </div>

            <button type='submit'>Valider</button>
        </form>
    )

}

export default BasiqueForm;